import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import './LiveTv.css';
import { scheduleData, getSlotStartMinutes } from '../../data/scheduleData';

const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const getNowNext = () => {
  const now = new Date();
  const istStr = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  const ist = new Date(istStr);
  const dayName = DAYS[ist.getDay()];
  const currentMins = ist.getHours() * 60 + ist.getMinutes();
  const slots = scheduleData[dayName] || [];

  if (slots.length === 0) {
    return { current: null, next: null, upcoming: [] };
  }

  let currentIdx = -1;
  for (let i = 0; i < slots.length; i++) {
    const startMins = getSlotStartMinutes(slots[i].time);
    const duration = parseInt(slots[i].duration, 10) || 30;
    if (currentMins >= startMins && currentMins < startMins + duration) {
      currentIdx = i;
      break;
    }
  }

  if (currentIdx === -1) {
    for (let i = slots.length - 1; i >= 0; i--) {
      if (getSlotStartMinutes(slots[i].time) <= currentMins) {
        currentIdx = i;
        break;
      }
    }
  }

  if (currentIdx === -1) {
    currentIdx = 0;
  }

  const current = slots[currentIdx];
  const next = currentIdx + 1 < slots.length ? slots[currentIdx + 1] : null;
  const upcoming = slots.slice(currentIdx + 1, currentIdx + 5);
  return { current, next, upcoming };
};


const LiveTv = ({ onNavigate }) => {
  const videoRef = useRef(null);
  const playerContainerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);
  const [epgState, setEpgState] = useState(getNowNext);

  useEffect(() => {
    const id = setInterval(() => setEpgState(getNowNext()), 60000);
    return () => clearInterval(id);
  }, []);

  const streamUrl = 'https://transcoding29.livebox.co.in/loveworldhls/loveworld.m3u8';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let hls;
    const playVideo = () => {
      video.muted = false;
      const p = video.play();
      if (p) {
        p.then(() => { setIsPlaying(true); setIsMuted(false); setIsBuffering(false); })
         .catch(() => {
           video.muted = true; setIsMuted(true);
           video.play().then(() => {
             setIsPlaying(true);
             setIsBuffering(false);
             const enableAudio = () => {
               video.muted = false;
               setIsMuted(false);
               window.removeEventListener('click', enableAudio);
               window.removeEventListener('touchstart', enableAudio);
             };
             window.addEventListener('click', enableAudio, { once: true });
             window.addEventListener('touchstart', enableAudio, { once: true });
           }).catch(() => { setIsPlaying(false); setIsBuffering(false); });
         });
      }
    };
    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: true, backBufferLength: 90 });
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, playVideo);
      hls.on(Hls.Events.BUFFER_STALLED, () => setIsBuffering(true));
      hls.on(Hls.Events.FRAG_BUFFERED, () => setIsBuffering(false));
      hls.on(Hls.Events.ERROR, (_, d) => {
        if (d.fatal) {
          if (d.type === Hls.ErrorTypes.NETWORK_ERROR) hls.startLoad();
          else if (d.type === Hls.ErrorTypes.MEDIA_ERROR) hls.recoverMediaError();
          else hls.destroy();
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = streamUrl;
      video.addEventListener('loadedmetadata', playVideo);
    }
    return () => { if (hls) hls.destroy(); };
  }, [streamUrl]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    else { videoRef.current.pause(); setIsPlaying(false); }
  };
  const toggleMute = () => {
    if (!videoRef.current) return;
    const n = !videoRef.current.muted;
    videoRef.current.muted = n; setIsMuted(n);
    if (!n && volume === 0) { setVolume(0.8); videoRef.current.volume = 0.8; }
  };
  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value); setVolume(val);
    if (videoRef.current) { videoRef.current.volume = val; videoRef.current.muted = val === 0; setIsMuted(val === 0); }
  };
  const toggleFullscreen = () => {
    if (!playerContainerRef.current) return;
    if (!document.fullscreenElement)
      playerContainerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    else document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
  };

  const { current, next, upcoming } = epgState;
  const isLive = Boolean(current && current.live);

  const formatTime12h = (timeStr) => {
    if (!timeStr) return '';
    if (timeStr.includes('AM') || timeStr.includes('PM')) return timeStr;
    const [h, m] = timeStr.split(':').map(Number);
    const period = h >= 12 ? 'PM' : 'AM';
    const hour = h % 12 || 12;
    return `${String(hour).padStart(2, '0')}:${String(m).padStart(2, '0')} ${period}`;
  };

  return (
    <div className="live-tv-page">
      <section className="live-tv-hero-stage">
        <div ref={playerContainerRef} className={`live-player-container ${isFullscreen ? 'is-fullscreen' : ''}`}>
          <video ref={videoRef} playsInline className="live-video-element"
            onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />
          {isBuffering && (
            <div className="live-loader-overlay">
              <div className="live-spinner"></div>
              <span className="live-loader-text">CONNECTING TO LIVE BROADCAST...</span>
            </div>
          )}
          {/* Custom Bottom Control Bar */}
          <div className="live-player-controls">
            <div className="controls-left">
              <button className="ctrl-btn play-btn" onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
                {isPlaying ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                )}
              </button>

              <div className="volume-group">
                <button className="ctrl-btn mute-btn" onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'}>
                  {isMuted || volume === 0 ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <line x1="23" y1="9" x2="17" y2="15" />
                      <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="volume-slider"
                />
              </div>

              {isLive && <span className="live-stream-badge">LIVE</span>}
            </div>

            <div className="controls-right">
              <button className="ctrl-btn fullscreen-btn" onClick={toggleFullscreen} aria-label="Fullscreen">
                {isFullscreen
                  ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>
                  : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="live-meta-bar">
        <div className="live-meta-container">
          <div className="live-now-row">
            <div className="live-now-left">
              <span className="live-now-badge">
                {isLive && <span className="pulse-dot-red"></span>}
                {isLive ? ' LIVE Now!' : ' ON AIR'}
              </span>
              <h2 className="live-now-title">{current ? current.title.toUpperCase() : 'LBN BROADCAST'}</h2>
            </div>
            <div className="live-now-actions">
              <button className="live-btn-schedule" onClick={() => onNavigate && onNavigate('epg')}>Full Schedule</button>
            </div>
          </div>
          {next && (
            <div className="live-next-row">
              <div className="next-tag">Next</div>
              <div className="next-time">{formatTime12h(next.time)}</div>
              <div className="next-show-name">{next.title}</div>
              <div className="next-duration">{next.category}</div>
            </div>
          )}

        </div>
      </section>

      {/* Upcoming Programs from EPG */}
      <section className="live-channels-section">
        <div className="live-channels-container">
          <h3 className="live-section-title">UPCOMING PROGRAMMES</h3>

          <div className="live-channels-grid">
            {upcoming.slice(0, 4).map((prog, idx) => (
              <div key={idx} className="channel-card">
                <div className="channel-img-wrap">
                  <img src={prog.image} alt={prog.title} className="channel-img" />
                  <span className="channel-time-badge">{formatTime12h(prog.time)}</span>
                  <span className="channel-badge upcoming">UPCOMING PROGRAMME</span>
                </div>
                <div className="channel-info">
                  <span className="channel-cat">{prog.category}</span>
                  <h4 className="channel-title">{prog.title.toUpperCase()}</h4>
                </div>
              </div>
            ))}
            {upcoming.length === 0 && (
              <p style={{ color: '#aaa', gridColumn: '1/-1', textAlign: 'center', padding: '2rem' }}>No upcoming programmes scheduled.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveTv;
