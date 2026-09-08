import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import './LiveTv.css';

import theTrumpet        from '../../images/Trumpet.png';
import prayWithMe        from '../../images/pray_with_me.jpg';
import healingStreams     from '../../images/healing_streams.png';
import praiseAThon        from '../../images/praise_a_thon.png';
import pastorChris       from '../../images/pastor_chris_teaching.png';
import rhapsodyTv        from '../../images/rhapsody_tv.png';
import praiseWorship     from '../../images/praise_worship_live.jpg';
import documentaryStudio from '../../images/documentary_studio.png';
import gytv              from '../../images/gytv.png';
import lovetoons         from '../../images/lovetoons.png';
import loveworldExtra    from '../../images/loveworld_extra.png';
import loveworldExpr     from '../../images/loveworld_expressions.png';
import teevablaze        from '../../images/teevablaze_banner.jpg';
import timelessParagon   from '../../images/timeless_paragon_new.jpg';
import chronicles        from '../../images/chronicles_of_prophecy.png';
import wordAtWork        from '../../images/Word at work.png';
import craftingFaith     from '../../images/Crafting Faith.png';
import moneyMatters      from '../../images/MONEY MATTERS (1).png';
import igniteImg         from '../../images/YOUTHIgnite.png';
import wholeness         from '../../images/Wholeness (1).png';

const epg = {
  Monday: [
    { time: '06:00', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '06:30', title: 'ROR Dailies', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '07:00', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '08:00', title: 'Enter the Healing School', category: 'HEALING', live: false, image: healingStreams },
    { time: '08:30', title: 'Documentary', category: 'SPECIALS', live: false, image: documentaryStudio },
    { time: '09:00', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '09:30', title: 'Enter the Healing School', category: 'HEALING', live: false, image: healingStreams },
    { time: '10:00', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '11:00', title: 'ROR Travels', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '11:30', title: 'TEEVABLAZE', category: 'TEENS & YOUTH', live: true, image: teevablaze },
    { time: '12:00', title: 'Pray With Me', category: 'PRAYER', live: true, image: prayWithMe },
    { time: '12:30', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '13:00', title: 'ROR Dailies', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '13:30', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '14:30', title: 'Rhapsody TV', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '16:00', title: 'THE TRUMPET LIVE', category: 'TALK SHOWS', live: true, image: theTrumpet },
    { time: '19:30', title: 'Enter the Healing School', category: 'HEALING', live: false, image: healingStreams },
    { time: '20:00', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '21:00', title: 'TEEVABLAZE - REBROADCAST', category: 'TEENS & YOUTH', live: false, image: teevablaze },
    { time: '21:30', title: 'Money Matters', category: 'SPECIALS', live: false, image: moneyMatters },
    { time: '22:00', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '22:30', title: 'ROR Travels', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '23:00', title: 'Loveworld Expressions', category: 'SPECIALS', live: false, image: loveworldExpr },
    { time: '23:30', title: 'Documentary', category: 'SPECIALS', live: false, image: documentaryStudio },
  ],
  Tuesday: [
    { time: '06:00', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '06:30', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '07:00', title: 'THE TRUMPET LIVE', category: 'TALK SHOWS', live: true, image: theTrumpet },
    { time: '11:00', title: 'ROR Travels', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '11:30', title: 'TEEVABLAZE', category: 'TEENS & YOUTH', live: true, image: teevablaze },
    { time: '12:00', title: 'Pray With Me', category: 'PRAYER', live: true, image: prayWithMe },
    { time: '12:30', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '13:00', title: 'ROR Dailies', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '13:30', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '14:30', title: 'Rhapsody TV', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '17:00', title: 'Kids Glows', category: 'KIDS', live: false, image: timelessParagon },
    { time: '17:30', title: 'Enter the Healing School', category: 'HEALING', live: false, image: healingStreams },
    { time: '20:00', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '21:00', title: 'TEEVABLAZE - REBROADCAST', category: 'TEENS & YOUTH', live: false, image: teevablaze },
    { time: '21:30', title: 'Documentary', category: 'SPECIALS', live: false, image: documentaryStudio },
    { time: '22:00', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '22:30', title: 'ROR Travels', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '23:00', title: 'Loveworld Expressions', category: 'SPECIALS', live: false, image: loveworldExpr },
    { time: '23:30', title: 'Documentary', category: 'SPECIALS', live: false, image: documentaryStudio },
  ],
  Wednesday: [
    { time: '06:00', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '06:30', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '07:00', title: 'THE TRUMPET LIVE', category: 'TALK SHOWS', live: true, image: theTrumpet },
    { time: '11:00', title: 'ROR Travels', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '11:30', title: 'TEEVABLAZE', category: 'TEENS & YOUTH', live: true, image: teevablaze },
    { time: '12:00', title: 'Pray With Me', category: 'PRAYER', live: true, image: prayWithMe },
    { time: '12:30', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '13:00', title: 'ROR Dailies', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '13:30', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '14:30', title: 'Rhapsody TV', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '16:00', title: 'Dusk Till Dawn', category: 'SPECIALS', live: false, image: documentaryStudio },
    { time: '16:30', title: 'Lovetoons', category: 'KIDS', live: false, image: lovetoons },
    { time: '17:30', title: 'Enter the Healing School', category: 'HEALING', live: false, image: healingStreams },
    { time: '19:30', title: 'Enter the Healing School', category: 'HEALING', live: false, image: healingStreams },
    { time: '20:00', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '21:00', title: 'TEEVABLAZE - REBROADCAST', category: 'TEENS & YOUTH', live: false, image: teevablaze },
    { time: '21:30', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '22:00', title: 'Money Matters', category: 'SPECIALS', live: false, image: moneyMatters },
    { time: '22:30', title: 'ROR Travels', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '23:00', title: 'Loveworld Expressions', category: 'SPECIALS', live: false, image: loveworldExpr },
    { time: '23:30', title: 'Documentary', category: 'SPECIALS', live: false, image: documentaryStudio },
  ],
  Thursday: [
    { time: '06:00', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '06:30', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '07:00', title: 'THE TRUMPET LIVE', category: 'TALK SHOWS', live: true, image: theTrumpet },
    { time: '11:00', title: 'ROR Travels', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '11:30', title: 'TEEVABLAZE', category: 'TEENS & YOUTH', live: true, image: teevablaze },
    { time: '12:00', title: 'Pray With Me', category: 'PRAYER', live: true, image: prayWithMe },
    { time: '12:30', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '13:00', title: 'ROR Dailies', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '13:30', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '14:30', title: 'Rhapsody TV', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '17:00', title: 'Ignite Show', category: 'TEENS & YOUTH', live: false, image: igniteImg },
    { time: '17:30', title: 'Enter the Healing School', category: 'HEALING', live: false, image: healingStreams },
    { time: '20:00', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '20:30', title: 'Word at Work', category: 'TALK SHOWS', live: false, image: wordAtWork },
    { time: '21:00', title: 'TEEVABLAZE - REBROADCAST', category: 'TEENS & YOUTH', live: false, image: teevablaze },
    { time: '21:30', title: 'Documentary', category: 'SPECIALS', live: false, image: documentaryStudio },
    { time: '22:00', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '22:30', title: 'ROR Travels', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '23:00', title: 'Loveworld Expressions', category: 'SPECIALS', live: false, image: loveworldExpr },
    { time: '23:30', title: 'Documentary', category: 'SPECIALS', live: false, image: documentaryStudio },
  ],
  Friday: [
    { time: '06:00', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '06:30', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '07:00', title: 'THE TRUMPET LIVE', category: 'TALK SHOWS', live: true, image: theTrumpet },
    { time: '11:00', title: 'ROR Travels', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '11:30', title: 'TEEVABLAZE', category: 'TEENS & YOUTH', live: true, image: teevablaze },
    { time: '12:00', title: 'Pray With Me', category: 'PRAYER', live: true, image: prayWithMe },
    { time: '12:30', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '13:00', title: 'ROR Dailies', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '13:30', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '14:30', title: 'Rhapsody TV', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '17:00', title: 'Crafting Faith', category: 'TALK SHOWS', live: false, image: craftingFaith },
    { time: '17:30', title: 'GYTV', category: 'TEENS & YOUTH', live: false, image: gytv },
    { time: '19:30', title: 'Enter the Healing School', category: 'HEALING', live: false, image: healingStreams },
    { time: '20:00', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '20:30', title: 'HEALING STREAMS TESTIMONIES LIVE', category: 'HEALING', live: true, image: healingStreams },
    { time: '22:30', title: 'Money Matters', category: 'SPECIALS', live: false, image: moneyMatters },
    { time: '23:00', title: 'Movie Night', category: 'SPECIALS', live: false, image: documentaryStudio },
  ],
  Saturday: [
    { time: '06:00', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '06:30', title: 'ROR Dailies', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '07:00', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '08:00', title: 'Enter the Healing School', category: 'HEALING', live: false, image: healingStreams },
    { time: '08:30', title: 'Documentary', category: 'SPECIALS', live: false, image: documentaryStudio },
    { time: '09:00', title: 'Wholeness', category: 'HEALTH', live: false, image: wholeness },
    { time: '09:30', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '10:00', title: 'Enter the Healing School', category: 'HEALING', live: false, image: healingStreams },
    { time: '10:30', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '11:30', title: 'Lovetoons', category: 'KIDS', live: false, image: lovetoons },
    { time: '12:30', title: 'GYTV', category: 'TEENS & YOUTH', live: false, image: gytv },
    { time: '14:30', title: 'ROR Travels', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '15:00', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '15:30', title: 'ROR Dailies', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '16:00', title: 'Rhapsody TV', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '16:30', title: 'LOVEWORLD EXTRA LIVE', category: 'SPECIALS', live: true, image: loveworldExtra },
    { time: '20:30', title: 'HEALING STREAMS TESTIMONIES LIVE', category: 'HEALING', live: true, image: healingStreams },
    { time: '22:30', title: 'CHRONICLES OF PROPHECY LIVE', category: 'SPECIALS', live: true, image: chronicles },
    { time: '24:30', title: 'Movie Night', category: 'SPECIALS', live: false, image: documentaryStudio },
    { time: '26:30', title: 'Rhapsody TV', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '28:30', title: 'Loveworld Expressions', category: 'SPECIALS', live: false, image: loveworldExpr },
  ],
  Sunday: [
    { time: '06:00', title: 'Worship (LWIndia)', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '06:30', title: 'ROR Dailies', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '07:00', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '08:00', title: 'Enter the Healing School', category: 'HEALING', live: false, image: healingStreams },
    { time: '08:30', title: 'Documentary', category: 'SPECIALS', live: false, image: documentaryStudio },
    { time: '09:00', title: 'Wholeness', category: 'HEALTH', live: false, image: wholeness },
    { time: '09:30', title: 'Worship (LWIndia)', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '10:00', title: 'Enter the Healing School', category: 'HEALING', live: false, image: healingStreams },
    { time: '10:30', title: 'Pastor Chris Teaching', category: 'TEACHING', live: false, image: pastorChris },
    { time: '11:30', title: 'Lovetoons', category: 'KIDS', live: false, image: lovetoons },
    { time: '12:30', title: 'GYTV', category: 'TEENS & YOUTH', live: false, image: gytv },
    { time: '14:30', title: 'ROR Travels', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '15:00', title: 'Praise and Worship', category: 'WORSHIP', live: false, image: praiseWorship },
    { time: '15:30', title: 'ROR Dailies', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '16:00', title: 'Rhapsody TV', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '16:30', title: 'LOVEWORLD EXTRA LIVE', category: 'SPECIALS', live: true, image: loveworldExtra },
    { time: '20:30', title: 'HEALING STREAMS TESTIMONIES LIVE', category: 'HEALING', live: true, image: healingStreams },
    { time: '22:30', title: 'Documentary', category: 'SPECIALS', live: false, image: documentaryStudio },
    { time: '23:00', title: 'Movie Night', category: 'SPECIALS', live: false, image: documentaryStudio },
    { time: '25:00', title: 'Rhapsody TV', category: 'ROR', live: false, image: rhapsodyTv },
    { time: '26:00', title: 'YourLoveworld Praise-A-Thon Rebroadcast', category: 'WORSHIP', live: false, image: praiseWorship },
  ],
};

const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const slotToMins = (str) => {
  const [h, m] = str.split(':').map(Number);
  return h * 60 + m;
};

const getNowNext = () => {
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const ist = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + istOffset);
  const dayName = DAYS[ist.getDay()];
  const currentMins = ist.getHours() * 60 + ist.getMinutes();
  const slots = epg[dayName] || [];
  let currentIdx = 0;
  for (let i = 0; i < slots.length; i++) {
    if (slotToMins(slots[i].time) <= currentMins) currentIdx = i;
    else break;
  }
  const current = slots[currentIdx];
  const next = slots[currentIdx + 1] || null;
  const upcoming = slots.slice(currentIdx + 1, currentIdx + 4);
  return { current, next, nextStartMins: next ? slotToMins(next.time) : null, upcoming };
};

const getChannelStatus = (epgState, matches) => {
  const matchesProgram = (program) => program && matches.some((match) => program.title.toLowerCase().includes(match));
  if (epgState.current?.live && matchesProgram(epgState.current)) return 'live';
  if (epgState.upcoming.some((program) => program.live && matchesProgram(program))) return 'upcoming';
  return null;
};

const LiveTv = ({ onNavigate }) => {
  const videoRef = useRef(null);
  const playerContainerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);
  const [copied, setCopied] = useState(false);
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
      const p = video.play();
      if (p) p.then(() => { setIsPlaying(true); setIsBuffering(false); })
        .catch(() => {
          video.muted = true; setIsMuted(true);
          video.play().then(() => { setIsPlaying(true); setIsBuffering(false); })
            .catch(() => { setIsPlaying(false); setIsBuffering(false); });
        });
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
  const handleShare = () => {
    if (navigator.clipboard) { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2500); }
  };

  const { current } = epgState;
  const channelStatuses = {
    trumpet: getChannelStatus(epgState, ['trumpet']),
    prayer: getChannelStatus(epgState, ['pray with me']),
    healing: getChannelStatus(epgState, ['healing streams']),
    specials: getChannelStatus(epgState, ['yourloveworld', 'loveworld specials'])
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
          {/* Top Live Badge Bar */}
          <div className="live-player-top-bar">
            <div className="live-status-pill">
              <span className="live-pulse-dot"></span>
              <span className="live-text">LIVE</span>
            </div>
            <span className="live-channel-name">LOVEWORLD INDIA LBNTV</span>
          </div>

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

              <span className="live-stream-badge">LIVE</span>
            </div>

            <div className="controls-right">
              <button className="ctrl-btn fullscreen-btn" onClick={toggleFullscreen} aria-label="Fullscreen">
              </button>
              <div className="volume-group">
                <button className="ctrl-btn mute-btn" onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'}>
                  {isMuted || volume === 0
                    ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                    : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>}
                </button>
                <input type="range" min="0" max="1" step="0.05" value={isMuted ? 0 : volume} onChange={handleVolumeChange} className="volume-slider"/>
              </div>
              <span className="live-stream-badge">LIVE</span>
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
                <span className="pulse-dot-red"></span>
                {current && current.live ? ' LIVE Now!' : ' ON AIR'}
              </span>
              <h2 className="live-now-title">{current ? current.title.toUpperCase() : 'LBN BROADCAST'}</h2>
            </div>
            <div className="live-now-actions">
              <button className="live-btn-schedule" onClick={() => onNavigate && onNavigate('epg')}>Full Schedule</button>
              <button className="live-btn-share" onClick={handleShare}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
                <span>{copied ? 'Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>
          <div className="live-next-row">
            <div className="next-tag">Next</div>
            <div className="next-time">06:00 PM</div>
            <div className="next-show-name">Word At Work – Studio Broadcast</div>
            <div className="next-duration">06:30 PM &bull; Interactive Teaching &amp; Worship</div>
          </div>

        </div>
      </section>

      {/* Live Broadcast Channels Grid (Modeled after image 2) */}
      <section className="live-channels-section">
        <div className="live-channels-container">
          <h3 className="live-section-title">BROADCAST CHANNELS &amp; UPCOMING FEEDS</h3>
          
          <div className="live-channels-grid">
            
            <div className="channel-card active">
              <div className="channel-img-wrap">
                <img src={theTrumpet} alt="LoveWorld India Live" className="channel-img" />
                {channelStatuses.trumpet && <span className={`channel-badge ${channelStatuses.trumpet}`}>🔴 {channelStatuses.trumpet.toUpperCase()}</span>}
              </div>
              <div className="channel-info">
                <span className="channel-cat">TALK SHOWS</span>
                <h4 className="channel-title">LOVEWORLD INDIA MAIN FEED</h4>
                <p className="channel-desc">Prophetic insights, live ministry, and regional satellite broadcasts.</p>
              </div>
            </div>

            <div className="channel-card">
              <div className="channel-img-wrap">
                <img src={prayWithMe} alt="Pray With Me Live" className="channel-img" />
                {channelStatuses.prayer && <span className={`channel-badge ${channelStatuses.prayer}`}>🔴 {channelStatuses.prayer.toUpperCase()}</span>}
              </div>
              <div className="channel-info">
                <span className="channel-cat">PRAYER</span>
                <h4 className="channel-title">PRAY WITH ME – INTERCESSION</h4>
                <p className="channel-desc">Global intercessory prayer and spiritual warfare broadcasts.</p>
              </div>
            </div>

            <div className="channel-card">
              <div className="channel-img-wrap">
                <img src={healingStreams} alt="Healing Streams Upcoming" className="channel-img" />
                {channelStatuses.healing && <span className={`channel-badge ${channelStatuses.healing}`}>🔴 {channelStatuses.healing.toUpperCase()}</span>}
              </div>
              <div className="channel-info">
                <span className="channel-cat">HEALING</span>
                <h4 className="channel-title">HEALING STREAMS TESTIMONIES</h4>
                <p className="channel-desc">Miraculous healings and faith testimonies from across nations.</p>
              </div>
            </div>

            <div className="channel-card">
              <div className="channel-img-wrap">
                <img src={praiseAThon} alt="Your Loveworld Praise-A-Thon" className="channel-img" />
                {channelStatuses.specials && <span className={`channel-badge ${channelStatuses.specials}`}>🔴 {channelStatuses.specials.toUpperCase()}</span>}
              </div>
              <div className="channel-info">
                <span className="channel-cat">TEACHING</span>
                <h4 className="channel-title">YOUR LOVEWORLD SPECIALS</h4>
                <p className="channel-desc">Anointed teaching, word revelations, and global praise sessions.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveTv;
