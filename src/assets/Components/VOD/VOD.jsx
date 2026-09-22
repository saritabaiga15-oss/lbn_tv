import React, { useState, useRef, useEffect } from 'react';
import './VOD.css';

// Poster & Banner Images
import trumpetImg from '../../images/Trumpet.png';
import timelessImg from '../../images/timeless_paragon_new.jpg';
import wordAtWorkImg from '../../images/TheWordatWork.png';
import wholenessImg from '../../images/Wholeness (1).png';
import igniteImg from '../../images/YOUTHIgnite.png';
import craftingFaithImg from '../../images/Crafting Faith.png';
import moneyMattersImg from '../../images/MoneyMatter.jpeg';
import teevablazeImg from '../../images/TEEVABLAZE .png';
import healthyLivingImg from '../../images/healthy_living.jpg';
import ethsImg from '../../images/ETHS.png';
import justBelieveImg from '../../images/Just_believe_banner .png';
import voiceOfPraiseImg from '../../images/voice_of_praise.jpg';
import praiseNightImg from '../../images/praise_night_27.jpg';
import healingStreamsImg from '../../images/healing_streams.png';
import pastorChrisImg from '../../images/pastor_chris_teaching.png';
import rhapsodyTvImg from '../../images/rhapsody_tv.png';
import loveworldExtraImg from '../../images/loveworld_extra.png';
import loveToonsImg from '../../images/lovetoons.png';

// 2:3 Portrait Key-Art Posters
import justBelievePoster from '../../images/posters/just_believe_portrait.jpg';
import trumpetPoster from '../../images/posters/trumpet_portrait.jpg';
import wordAtWorkPoster from '../../images/posters/word_at_work_portrait.jpg';
import timelessPoster from '../../images/posters/timeless_paragon_portrait.jpg';
import wholenessPoster from '../../images/posters/wholeness_portrait.jpg';
import ignitePoster from '../../images/posters/ignite_portrait.jpg';
import craftingFaithPoster from '../../images/posters/crafting_faith_portrait.jpg';
import moneyMattersPoster from '../../images/posters/money_matters_portrait.jpg';
import teevablazePoster from '../../images/posters/teevablaze_portrait.jpg';
import healthyLivingPoster from '../../images/posters/healthy_living_portrait.jpg';
import ethsPoster from '../../images/posters/eths_portrait.jpg';
import voiceOfPraisePoster from '../../images/posters/voice_of_praise_portrait.jpg';

const PROMO_VIDEOS = [
  {
    id: 'just-believe',
    title: 'JUST BELIEVE',
    subtitle: 'Faith That Inspires Hope',
    category: 'TALK SHOWS',
    badge: 'LBN ORIGINAL',
    rating: '9.8',
    stars: 5,
    year: '2024',
    duration: 'Season 1',
    quality: '4K ULTRA HD',
    poster: justBelievePoster,
    banner: justBelieveImg,
    video: '/Videos/JustBelieve.mp4',
    tagline: 'Faith that inspires hope, possibilities, and purposeful action.',
    description: 'An uplifting cinematic series encouraging believers worldwide to trust God, ignite mountain-moving faith, and walk boldly in the miraculous possibilities ahead.',
    schedule: 'Weekly on LBN TV',
    scenes: [
      { id: 'jb-1', title: 'Prophetic Declarations', img: trumpetImg, time: '2:15' },
      { id: 'jb-2', title: 'Studio Reflections', img: wordAtWorkImg, time: '1:45' },
      { id: 'jb-3', title: 'Creative Miracles', img: craftingFaithImg, time: '3:10' }
    ]
  },
  {
    id: 'trumpet',
    title: 'THE TRUMPET',
    subtitle: 'Vijay Bansode Live',
    category: 'TALK SHOWS',
    badge: 'TRENDING',
    rating: '9.6',
    stars: 5,
    year: '2024',
    duration: '60 mins',
    quality: '4K ULTRA HD',
    poster: trumpetPoster,
    banner: trumpetImg,
    video: '/Videos/THE_TRUMPET_NEW.mp4',
    tagline: 'Prophetic conversations, truth, and faith.',
    description: 'Inspiring insights and prophetic conversations on faith, ministry, and current world events hosted by Vijay Bansode with anointed guest speakers.',
    schedule: 'Tue to Fri at 11:00 AM',
    scenes: [
      { id: 'tr-1', title: 'Prophetic Unveiling', img: trumpetImg, time: '1:40' },
      { id: 'tr-2', title: 'Word in Action', img: wordAtWorkImg, time: '2:20' },
      { id: 'tr-3', title: 'Live Testimonies', img: ethsImg, time: '1:55' }
    ]
  },
  {
    id: 'word-at-work',
    title: 'THE WORD AT WORK',
    subtitle: 'Studio Broadcast Series',
    category: 'TALK SHOWS',
    badge: 'POPULAR',
    rating: '9.4',
    stars: 5,
    year: '2024',
    duration: '60 mins',
    quality: 'HD',
    poster: wordAtWorkPoster,
    banner: wordAtWorkImg,
    video: '/Videos/TheWordAtWork.mp4',
    tagline: 'Inspired, equipped, and empowered by the Word.',
    description: 'Dynamic panel discussions exploring God’s Word in practical daily action, equipping believers with life-transforming revelations and spiritual mastery.',
    schedule: 'Thursdays at 8:30 PM',
    scenes: [
      { id: 'ww-1', title: 'Panel Discussion', img: wordAtWorkImg, time: '2:05' },
      { id: 'ww-2', title: 'Biblical Insights', img: moneyMattersImg, time: '1:30' },
      { id: 'ww-3', title: 'Deep Expositions', img: trumpetImg, time: '2:40' }
    ]
  },
  {
    id: 'timeless-paragon',
    title: 'TIMELESS PARAGON',
    subtitle: 'Kids Faith Adventures',
    category: 'KIDS',
    badge: 'KIDS FAVORITE',
    rating: '9.5',
    stars: 5,
    year: '2024',
    duration: '45 mins',
    quality: '4K ULTRA HD',
    poster: timelessPoster,
    banner: timelessImg,
    video: '/Videos/TIMELESS.mp4',
    tagline: 'Empowering children with scripture wisdom.',
    description: 'Joyful, engaging episodes empowering young minds with scripture wisdom, character-building stories, moral virtues, and timeless faith adventures.',
    schedule: 'Saturdays at 10:00 AM',
    scenes: [
      { id: 'tp-1', title: 'Scripture Quest', img: timelessImg, time: '1:50' },
      { id: 'tp-2', title: 'Animated Bible Heroes', img: loveToonsImg, time: '2:15' },
      { id: 'tp-3', title: 'Sing-Along Praise', img: voiceOfPraiseImg, time: '1:40' }
    ]
  },
  {
    id: 'wholeness',
    title: 'WHOLENESS',
    subtitle: 'With Dr. Prashanti',
    category: 'HEALTH',
    badge: 'FEATURED',
    rating: '9.3',
    stars: 4,
    year: '2024',
    duration: '30 mins',
    quality: 'HD',
    poster: wholenessPoster,
    banner: wholenessImg,
    video: '/Videos/WholenessWithDrPrashanti.mp4',
    tagline: 'Mind. Body. Divine Purpose.',
    description: 'Inspiring health, holistic vitality, and spiritual wellness from a medical and faith-filled perspective with Dr. Prashanti, equipping you to thrive.',
    schedule: 'Tuesdays at 9:30 AM',
    scenes: [
      { id: 'wh-1', title: 'Mind & Body Balance', img: wholenessImg, time: '1:35' },
      { id: 'wh-2', title: 'Nutrition & Vitality', img: healthyLivingImg, time: '2:10' },
      { id: 'wh-3', title: 'Healing Streams Insight', img: healingStreamsImg, time: '1:45' }
    ]
  },
  {
    id: 'ignite',
    title: 'IGNITE SHOW',
    subtitle: 'Youth Culture & Faith',
    category: 'TEENS & YOUTH',
    badge: 'HOT',
    rating: '9.5',
    stars: 5,
    year: '2024',
    duration: '60 mins',
    quality: '4K ULTRA HD',
    poster: ignitePoster,
    banner: igniteImg,
    video: '/Videos/Ignite.mp4',
    tagline: 'We Burn. Faith lights the way through life.',
    description: 'Ignite explores the real-life intersection of modern youth culture, music, purpose, and vibrant faith. Candid discussions and unstoppable young leaders.',
    schedule: 'Sundays at 3:00 PM',
    scenes: [
      { id: 'ig-1', title: 'Youth Uncensored', img: igniteImg, time: '2:30' },
      { id: 'ig-2', title: 'Live Concert Vibe', img: teevablazeImg, time: '1:50' },
      { id: 'ig-3', title: 'Testimonies of Fire', img: ethsImg, time: '2:00' }
    ]
  },
  {
    id: 'crafting-faith',
    title: 'CRAFTING FAITH',
    subtitle: 'Art, Craft & Devotion',
    category: 'TALK SHOWS',
    badge: 'NEW',
    rating: '9.2',
    stars: 4,
    year: '2024',
    duration: '30 mins',
    quality: 'HD',
    poster: craftingFaithPoster,
    banner: craftingFaithImg,
    video: '/CRAFTING%20FAITH.mp4',
    tagline: 'Create · Believe · Inspire — faith through art.',
    description: 'Inspiring studio workshops where creativity and devotion unite. Discover spiritual insights through hands-on artistic crafting and uplifting stories.',
    schedule: 'Wednesdays at 4:00 PM',
    scenes: [
      { id: 'cf-1', title: 'The Potter’s Hands', img: craftingFaithImg, time: '1:45' },
      { id: 'cf-2', title: 'Creative Studio', img: wordAtWorkImg, time: '2:15' },
      { id: 'cf-3', title: 'Faith in Color', img: timelessImg, time: '1:30' }
    ]
  },
  {
    id: 'money-matters',
    title: 'MONEY MATTERS',
    subtitle: 'Kingdom Wealth & Stewardship',
    category: 'TALK SHOWS',
    badge: 'ESSENTIAL',
    rating: '9.4',
    stars: 5,
    year: '2024',
    duration: '45 mins',
    quality: 'HD',
    poster: moneyMattersPoster,
    banner: moneyMattersImg,
    video: '/Videos/MoneyMatters.mp4',
    tagline: 'Biblical wisdom for supernatural financial growth.',
    description: 'Actionable financial intelligence and spiritual principles on wealth creation, investing, debt-free living, and Kingdom stewardship for modern families.',
    schedule: 'Mondays at 7:00 PM',
    scenes: [
      { id: 'mm-1', title: 'Principles of Increase', img: moneyMattersImg, time: '2:00' },
      { id: 'mm-2', title: 'Stewardship Mastery', img: wordAtWorkImg, time: '1:40' },
      { id: 'mm-3', title: 'Kingdom Economics', img: trumpetImg, time: '2:25' }
    ]
  },
  {
    id: 'teevablaze',
    title: 'TEEVABLAZE',
    subtitle: 'Electrifying Teen Experience',
    category: 'TEENS & YOUTH',
    badge: 'TRENDING',
    rating: '9.6',
    stars: 5,
    year: '2024',
    duration: '30 mins',
    quality: '4K ULTRA HD',
    poster: teevablazePoster,
    banner: teevablazeImg,
    video: '/Videos/Teevablaze.mp4',
    tagline: 'Igniting the youth with vibrant faith and purpose.',
    description: 'An electrifying broadcast celebrating young achievers, creative talents, high-energy discussions, and faith-fueled momentum for teens and young adults.',
    schedule: 'Mon to Fri at 11:30 AM',
    scenes: [
      { id: 'tb-1', title: 'Blaze Highlights', img: teevablazeImg, time: '1:40' },
      { id: 'tb-2', title: 'Young Pioneers', img: igniteImg, time: '2:10' },
      { id: 'tb-3', title: 'Campus Revolution', img: ethsImg, time: '1:50' }
    ]
  },
  {
    id: 'healthy-living',
    title: 'HEALTHY LIVING',
    subtitle: 'Divine Vitality & Wellness',
    category: 'HEALTH',
    badge: 'POPULAR',
    rating: '9.1',
    stars: 4,
    year: '2024',
    duration: '30 mins',
    quality: 'HD',
    poster: healthyLivingPoster,
    banner: healthyLivingImg,
    video: '/Videos/HL INTRO.mp4',
    tagline: 'Faith, nutrition, and total wellness.',
    description: 'Practical guidance on nutrition, fitness, stress relief, and divine health revelations, inspiring viewers to thrive in spirit, soul, and physical body.',
    schedule: 'Weekly on LBN TV',
    scenes: [
      { id: 'hl-1', title: 'Holistic Nutrition', img: healthyLivingImg, time: '1:30' },
      { id: 'hl-2', title: 'Divine Health Truths', img: wholenessImg, time: '2:00' },
      { id: 'hl-3', title: 'Healing Testimonies', img: healingStreamsImg, time: '2:20' }
    ]
  },
  {
    id: 'loveworld-special',
    title: 'LOVEWORLD INDIA SPECIAL',
    subtitle: 'Prophetic Global Outreach',
    category: 'SPECIALS',
    badge: 'LBN EXCLUSIVE',
    rating: '9.9',
    stars: 5,
    year: '2024',
    duration: 'Special Edition',
    quality: '4K ULTRA HD',
    poster: ethsPoster,
    banner: ethsImg,
    video: '/Videos/ENOCH_PROMO_FINAL.mp4',
    tagline: 'A glorious celebration of truth, revival, and miracles.',
    description: 'Special landmark broadcast capturing miraculous testimonies, global outreach milestones, and the unstoppable expansion of the Gospel across India and beyond.',
    schedule: 'Prime Time Special',
    scenes: [
      { id: 'ls-1', title: 'Revival Fire', img: ethsImg, time: '2:45' },
      { id: 'ls-2', title: 'Healing School Miracles', img: healingStreamsImg, time: '3:00' },
      { id: 'ls-3', title: 'Higher Life Conference', img: praiseNightImg, time: '2:15' }
    ]
  },
  {
    id: 'voice-of-praise',
    title: 'VOICE OF PRAISE',
    subtitle: 'Atmosphere of Adoration',
    category: 'WORSHIP',
    badge: 'SOUL STIRRING',
    rating: '9.7',
    stars: 5,
    year: '2024',
    duration: '45 mins',
    quality: 'HD',
    poster: voiceOfPraisePoster,
    banner: voiceOfPraiseImg,
    video: '/Videos/TIMELESS.mp4', // fallback promo
    tagline: 'Where worship meets the heart in heavenly harmony.',
    description: 'Soul-stirring worship and praise with anointed psalmists and musicians lifting pure adoration that ushers in the tangible presence of God.',
    schedule: 'Sundays at 6:00 PM',
    scenes: [
      { id: 'vp-1', title: 'Heavenly Adoration', img: voiceOfPraiseImg, time: '3:20' },
      { id: 'vp-2', title: 'Praise Night Special', img: praiseNightImg, time: '2:40' },
      { id: 'vp-3', title: 'Symphony of Grace', img: loveworldExtraImg, time: '2:00' }
    ]
  }
];

const SECONDARY_FEATURED = {
  id: 'trumpet-season',
  title: 'THE TRUMPET : NEW SEASON',
  subtitle: 'Season 2 · Prophetic Voice',
  rating: '9.6',
  stars: 5,
  year: '2024',
  duration: 'Full Broadcast Series',
  quality: '4K ULTRA HD',
  tagline: 'Uncompromising Truth. Prophetic Revelation.',
  description: 'Vijay Bansode returns with extraordinary guest ministers, probing global events through the infallible lens of biblical prophecy and empowering believers to stand unshakable in victory.',
  poster: trumpetPoster,
  banner: trumpetImg,
  video: '/Videos/THE_TRUMPET_NEW.mp4',
  stills: [
    { title: 'Prophecy in Action', img: wordAtWorkImg },
    { title: 'Global Outlook', img: ethsImg },
    { title: 'Studio Panel Live', img: craftingFaithImg }
  ]
};

const CATEGORIES = [
  { id: 'ALL', label: 'All Promos' },
  { id: 'TALK SHOWS', label: 'Talk Shows' },
  { id: 'TEENS & YOUTH', label: 'Youth & Teens' },
  { id: 'HEALTH', label: 'Health & Wellness' },
  { id: 'KIDS', label: 'Kids & Family' },
  { id: 'WORSHIP', label: 'Worship & Praise' },
  { id: 'SPECIALS', label: 'LBN Specials' }
];

const VOD = () => {
  const [selectedHero, setSelectedHero] = useState(PROMO_VIDEOS[0]); // Default to Just Believe / featured
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalVideo, setActiveModalVideo] = useState(null);
  const [watchlist, setWatchlist] = useState(['just-believe', 'trumpet']);
  const [activeTabSub, setActiveTabSub] = useState('all');

  const popularRowRef = useRef(null);
  const trendingRowRef = useRef(null);
  const watchlistRowRef = useRef(null);
  const videoPlayerRef = useRef(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeModalVideo) {
        closeVideoModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalVideo]);

  const openVideoModal = (videoItem) => {
    setActiveModalVideo(videoItem);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.pause();
    }
    setActiveModalVideo(null);
    document.body.style.overflow = '';
  };

  const toggleWatchlist = (id, e) => {
    if (e) e.stopPropagation();
    setWatchlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const scrollRow = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const watchlistPromos = PROMO_VIDEOS.filter((item) => watchlist.includes(item.id));

  const categoriesList = [
    { id: 'ALL', label: 'All Promos' },
    { id: 'WATCHLIST', label: `My Watchlist (${watchlist.length})` },
    ...CATEGORIES.slice(1)
  ];

  const controlsRef = useRef(null);

  // Filtered promos based on active category & search query
  const filteredPromos = PROMO_VIDEOS.filter((item) => {
    const matchesCategory =
      activeCategory === 'ALL'
        ? true
        : activeCategory === 'WATCHLIST'
        ? watchlist.includes(item.id)
        : item.category === activeCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const mostPopularList = PROMO_VIDEOS.slice(0, 6);
  const trendingList = PROMO_VIDEOS.slice(4);

  return (
    <div className="vod-page">
      {/* ══════════════════════════════════════════════════════════════════
          1. TOP HERO BANNER (Ott Streaming Style matching Black Adam mockup)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="vod-hero-stage">
        {/* Background Series Photo with Cinematic Gradient Masks */}
        <div className="vod-hero-backdrop-layer">
          <img
            src={selectedHero.banner}
            alt={selectedHero.title}
            className="vod-hero-backdrop-img"
          />
          <div className="vod-hero-overlay-dark" />
          <div className="vod-hero-overlay-radial" />
          <div className="vod-hero-vignette-bottom" />
        </div>

        {/* Hero Content Grid */}
        <div className="vod-hero-inner">
          {/* Left Column: Title, Metadata, Synopsis, Buttons */}
          <div className="vod-hero-meta-col">
            <div className="vod-hero-tag-row">
              <span className="vod-badge-gold">{selectedHero.badge}</span>
              <span className="vod-badge-category">{selectedHero.category}</span>
              <span className="vod-badge-quality">{selectedHero.quality}</span>
            </div>

            <h1 className="vod-hero-title">{selectedHero.title}</h1>

            {/* Ratings & Meta info */}
            <div className="vod-hero-rating-strip">
              <div className="vod-stars">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`star-icon ${i < selectedHero.stars ? 'filled' : ''}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="vod-score-badge">
                <span className="vod-score-label">LBN</span> {selectedHero.rating}
              </span>
              <span className="vod-meta-dot">•</span>
              <span className="vod-meta-item">{selectedHero.year}</span>
              <span className="vod-meta-dot">•</span>
              <span className="vod-meta-item">{selectedHero.schedule}</span>
            </div>

            <div className="vod-hero-desc-container">
              <p className="vod-hero-logline">{selectedHero.tagline}</p>
              <p className="vod-hero-synopsis">{selectedHero.description}</p>
            </div>

            {/* Action Buttons: PLAY PROMO & + MY LIST */}
            <div className="vod-hero-cta-group">
              <button
                className="vod-play-primary-btn"
                onClick={() => openVideoModal(selectedHero)}
                id="hero-play-button"
                aria-label={`Play promo for ${selectedHero.title}`}
              >
                <span className="btn-play-triangle">▶</span>
                <span className="btn-text">PLAY PROMO</span>
              </button>

              <button
                className={`vod-watchlist-btn ${watchlist.includes(selectedHero.id) ? 'active' : ''}`}
                onClick={(e) => toggleWatchlist(selectedHero.id, e)}
                title={watchlist.includes(selectedHero.id) ? 'Remove from My List' : 'Add to My List'}
                aria-label="Add to Watchlist"
              >
                {watchlist.includes(selectedHero.id) ? (
                  <>
                    <span className="icon-check">✓</span>
                    <span className="tooltip-text">In My List</span>
                  </>
                ) : (
                  <>
                    <span className="icon-plus">＋</span>
                    <span className="tooltip-text">Add to List</span>
                  </>
                )}
              </button>

              <div className="vod-audio-indicator">
                <span className="audio-wave-bar bar-1"></span>
                <span className="audio-wave-bar bar-2"></span>
                <span className="audio-wave-bar bar-3"></span>
                <span className="audio-label">PROMO AVAILABLE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked 3 Preview Thumbnails (Matches reference screenshot) */}
          <div className="vod-hero-thumbs-col">
            <div className="vod-thumbs-header">
              <span className="vod-thumbs-kicker">FEATURED PREVIEWS</span>
              <span className="vod-thumbs-note">Click to Switch Banner</span>
            </div>
            <div className="vod-thumbs-stack">
              {PROMO_VIDEOS.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className={`vod-thumb-card ${selectedHero.id === item.id ? 'active' : ''}`}
                  onClick={() => setSelectedHero(item)}
                >
                  <div className="vod-thumb-image-wrap">
                    <img src={item.banner} alt={item.title} className="vod-thumb-img" />
                    <button
                      className="vod-thumb-play-circle"
                      onClick={(e) => {
                        e.stopPropagation();
                        openVideoModal(item);
                      }}
                      title="Play Promo"
                    >
                      ▶
                    </button>
                    <span className="vod-thumb-badge">{item.category}</span>
                  </div>
                  <div className="vod-thumb-info">
                    <h4 className="vod-thumb-title">{item.title}</h4>
                    <p className="vod-thumb-sub">{item.subtitle}</p>
                    <span className="vod-thumb-meta">⭐ {item.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. FILTER & SEARCH CONTROLS
          ══════════════════════════════════════════════════════════════════ */}
      <section className="vod-controls-strip" ref={controlsRef}>
        <div className="vod-controls-inner">
          <div className="vod-category-pills">
            {categoriesList.map((cat) => (
              <button
                key={cat.id}
                className={`vod-filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="vod-search-wrapper">
            <span className="vod-search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search promo videos, shows, hosts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="vod-search-input"
            />
            {searchQuery && (
              <button
                className="vod-search-clear"
                onClick={() => setSearchQuery('')}
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CONTENT DISPLAY:
          If a category filter or search query is active:
            Show the filtered collection grid immediately right below the filter controls!
          Otherwise (activeCategory === 'ALL' and no search):
            Show the full curated streaming experience (Watchlist row, Most Popular,
            Trending, Spotlight Banner, and Explore All Promos grid).
          ══════════════════════════════════════════════════════════════════ */}
      {activeCategory !== 'ALL' || searchQuery ? (
        <section className="vod-full-grid-section vod-filtered-view-section">
          <div className="vod-shelf-header">
            <div className="vod-shelf-title-wrap">
              <h2 className="vod-shelf-heading">
                {searchQuery
                  ? `Search Results for "${searchQuery}"`
                  : activeCategory === 'WATCHLIST'
                  ? 'My Saved Watchlist'
                  : `${categoriesList.find((c) => c.id === activeCategory)?.label || activeCategory} Collection`}
              </h2>
              <span className="vod-shelf-badge vod-badge-accent">
                {filteredPromos.length} {filteredPromos.length === 1 ? 'PROMO AVAILABLE' : 'PROMOS AVAILABLE'}
              </span>
            </div>

            <button
              className="vod-clear-filter-btn"
              onClick={() => {
                setActiveCategory('ALL');
                setSearchQuery('');
              }}
            >
              Show All Categories ✕
            </button>
          </div>

          {filteredPromos.length > 0 ? (
            <div className="vod-catalog-grid">
              {filteredPromos.map((item) => (
                <div
                  key={item.id}
                  className="vod-poster-card"
                  onClick={() => openVideoModal(item)}
                >
                  <div className="vod-poster-media">
                    <img src={item.poster} alt={item.title} className="vod-poster-img" />
                    <div className="vod-poster-gradient-mask" />
                    <span className="vod-poster-badge">{item.category}</span>
                    <span className="vod-poster-quality">{item.quality}</span>

                    <div className="vod-poster-hover-overlay">
                      <div className="vod-play-glow-btn">
                        <span className="play-triangle">▶</span>
                      </div>
                      <span className="vod-hover-prompt">Watch Promo</span>
                    </div>
                  </div>

                  <div className="vod-poster-caption">
                    <h3 className="vod-poster-title">{item.title}</h3>
                    <p className="vod-poster-sub">
                      {item.year} • {item.schedule}
                    </p>
                    <div className="vod-poster-footer">
                      <span className="vod-poster-rating">★ {item.rating}</span>
                      <button
                        className={`vod-poster-save-btn ${watchlist.includes(item.id) ? 'saved' : ''}`}
                        onClick={(e) => toggleWatchlist(item.id, e)}
                        title={watchlist.includes(item.id) ? 'Remove from Watchlist' : 'Add to Watchlist'}
                      >
                        {watchlist.includes(item.id) ? '✓' : '＋'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="vod-no-filter-results">
              <div className="vod-empty-icon-wrap">
                <span className="vod-empty-icon">🔍</span>
              </div>
              <div className="vod-empty-content">
                <h4 className="vod-empty-title">No Promos Found</h4>
                <p className="vod-empty-desc">
                  {searchQuery
                    ? `No promos matched your search "${searchQuery}".`
                    : activeCategory === 'WATCHLIST'
                    ? 'Your watchlist is currently empty. Click ＋ on any promo card to save it.'
                    : `No promos found in the ${activeCategory} category.`}
                </p>
                <button
                  className="vod-play-primary-btn"
                  style={{ marginTop: '14px', width: 'fit-content' }}
                  onClick={() => {
                    setActiveCategory('ALL');
                    setSearchQuery('');
                  }}
                >
                  <span className="btn-text">View All Promos</span>
                </button>
              </div>
            </div>
          )}
        </section>
      ) : (
        <>
          {/* ══════════════════════════════════════════════════════════════════
              3. MY WATCHLIST (Dedicated Shelf)
              ══════════════════════════════════════════════════════════════════ */}
          <section className="vod-shelf-section vod-watchlist-shelf" id="vod-watchlist-section">
            <div className="vod-shelf-header">
              <div className="vod-shelf-title-wrap">
                <h2 className="vod-shelf-heading">My Watchlist</h2>
                <span className="vod-shelf-badge vod-badge-accent">
                  {watchlistPromos.length} {watchlistPromos.length === 1 ? 'PROMO SAVED' : 'PROMOS SAVED'}
                </span>
              </div>
              {watchlistPromos.length > 0 && (
                <div className="vod-shelf-nav">
                  <button
                    className="vod-arrow-btn"
                    onClick={() => scrollRow(watchlistRowRef, 'left')}
                    aria-label="Scroll left"
                  >
                    ‹
                  </button>
                  <button
                    className="vod-arrow-btn"
                    onClick={() => scrollRow(watchlistRowRef, 'right')}
                    aria-label="Scroll right"
                  >
                    ›
                  </button>
                  <span className="vod-view-all-link" onClick={() => setActiveCategory('WATCHLIST')}>
                    View all <span>›</span>
                  </span>
                </div>
              )}
            </div>

            {watchlistPromos.length > 0 ? (
              <div className="vod-cards-carousel" ref={watchlistRowRef}>
                {watchlistPromos.map((item) => (
                  <div
                    key={item.id}
                    className="vod-poster-card"
                    onClick={() => openVideoModal(item)}
                  >
                    <div className="vod-poster-media">
                      <img src={item.poster} alt={item.title} className="vod-poster-img" />
                      <div className="vod-poster-gradient-mask" />
                      <span className="vod-poster-badge">{item.category}</span>
                      <span className="vod-poster-quality">{item.quality}</span>

                      <div className="vod-poster-hover-overlay">
                        <div className="vod-play-glow-btn">
                          <span className="play-triangle">▶</span>
                        </div>
                        <span className="vod-hover-prompt">Watch Promo</span>
                      </div>
                    </div>

                    <div className="vod-poster-caption">
                      <h3 className="vod-poster-title">{item.title}</h3>
                      <p className="vod-poster-sub">
                        {item.year} • {item.schedule}
                      </p>
                      <div className="vod-poster-footer">
                        <span className="vod-poster-rating">★ {item.rating}</span>
                        <button
                          className="vod-poster-save-btn saved"
                          onClick={(e) => toggleWatchlist(item.id, e)}
                          title="Remove from Watchlist"
                        >
                          ✓
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="vod-watchlist-empty">
                <div className="vod-empty-icon-wrap">
                  <span className="vod-empty-icon">🔖</span>
                </div>
                <div className="vod-empty-content">
                  <h4 className="vod-empty-title">Your Watchlist is Empty</h4>
                  <p className="vod-empty-desc">
                    Browse our collection and click the <strong>＋</strong> button on any promo card to save it here for instant access.
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              4. ROW 1: MOST POPULAR (Horizontal Carousel with Poster Cards)
              ══════════════════════════════════════════════════════════════════ */}
          <section className="vod-shelf-section">
            <div className="vod-shelf-header">
              <div className="vod-shelf-title-wrap">
                <h2 className="vod-shelf-heading">Most Popular</h2>
                <span className="vod-shelf-badge">HOT RELEASES</span>
              </div>
              <div className="vod-shelf-nav">
                <button
                  className="vod-arrow-btn"
                  onClick={() => scrollRow(popularRowRef, 'left')}
                  aria-label="Scroll left"
                >
                  ‹
                </button>
                <button
                  className="vod-arrow-btn"
                  onClick={() => scrollRow(popularRowRef, 'right')}
                  aria-label="Scroll right"
                >
                  ›
                </button>
                <span className="vod-view-all-link" onClick={() => setActiveCategory('ALL')}>
                  View all <span>›</span>
                </span>
              </div>
            </div>

            <div className="vod-cards-carousel" ref={popularRowRef}>
              {mostPopularList.map((item) => (
                <div
                  key={item.id}
                  className="vod-poster-card"
                  onClick={() => openVideoModal(item)}
                >
                  <div className="vod-poster-media">
                    <img src={item.poster} alt={item.title} className="vod-poster-img" />
                    <div className="vod-poster-gradient-mask" />
                    <span className="vod-poster-badge">{item.category}</span>
                    <span className="vod-poster-quality">{item.quality}</span>

                    <div className="vod-poster-hover-overlay">
                      <div className="vod-play-glow-btn">
                        <span className="play-triangle">▶</span>
                      </div>
                      <span className="vod-hover-prompt">Watch Promo</span>
                    </div>
                  </div>

                  <div className="vod-poster-caption">
                    <h3 className="vod-poster-title">{item.title}</h3>
                    <p className="vod-poster-sub">
                      {item.year} • {item.schedule}
                    </p>
                    <div className="vod-poster-footer">
                      <span className="vod-poster-rating">★ {item.rating}</span>
                      <button
                        className={`vod-poster-save-btn ${watchlist.includes(item.id) ? 'saved' : ''}`}
                        onClick={(e) => toggleWatchlist(item.id, e)}
                        title="Add to Watchlist"
                      >
                        {watchlist.includes(item.id) ? '✓' : '＋'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              5. ROW 2: TRENDING NOW / YOUTH & SPECIALS
              ══════════════════════════════════════════════════════════════════ */}
          <section className="vod-shelf-section">
            <div className="vod-shelf-header">
              <div className="vod-shelf-title-wrap">
                <h2 className="vod-shelf-heading">Trending Promos & Highlights</h2>
                <span className="vod-shelf-badge">STREAMING NOW</span>
              </div>
              <div className="vod-shelf-nav">
                <button
                  className="vod-arrow-btn"
                  onClick={() => scrollRow(trendingRowRef, 'left')}
                  aria-label="Scroll left"
                >
                  ‹
                </button>
                <button
                  className="vod-arrow-btn"
                  onClick={() => scrollRow(trendingRowRef, 'right')}
                  aria-label="Scroll right"
                >
                  ›
                </button>
                <span className="vod-view-all-link" onClick={() => setActiveCategory('ALL')}>
                  View all <span>›</span>
                </span>
              </div>
            </div>

            <div className="vod-cards-carousel" ref={trendingRowRef}>
              {trendingList.map((item) => (
                <div
                  key={item.id}
                  className="vod-poster-card"
                  onClick={() => openVideoModal(item)}
                >
                  <div className="vod-poster-media">
                    <img src={item.poster} alt={item.title} className="vod-poster-img" />
                    <div className="vod-poster-gradient-mask" />
                    <span className="vod-poster-badge">{item.category}</span>
                    <span className="vod-poster-quality">{item.quality}</span>

                    <div className="vod-poster-hover-overlay">
                      <div className="vod-play-glow-btn">
                        <span className="play-triangle">▶</span>
                      </div>
                      <span className="vod-hover-prompt">Watch Promo</span>
                    </div>
                  </div>

                  <div className="vod-poster-caption">
                    <h3 className="vod-poster-title">{item.title}</h3>
                    <p className="vod-poster-sub">
                      {item.year} • {item.schedule}
                    </p>
                    <div className="vod-poster-footer">
                      <span className="vod-poster-rating">★ {item.rating}</span>
                      <button
                        className={`vod-poster-save-btn ${watchlist.includes(item.id) ? 'saved' : ''}`}
                        onClick={(e) => toggleWatchlist(item.id, e)}
                        title="Add to Watchlist"
                      >
                        {watchlist.includes(item.id) ? '✓' : '＋'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              6. LOWER FEATURED BANNER: "Popular TV Series"
              ══════════════════════════════════════════════════════════════════ */}
          <section className="vod-lower-feature-section">
            <div className="vod-lower-feature-header">
              <h2 className="vod-feature-spotlight-title">Popular TV Series</h2>
              <div className="vod-feature-divider" />
            </div>

            <div className="vod-featured-series-banner">
              {/* Background image & gradient */}
              <div className="vod-series-banner-backdrop">
                <img
                  src={SECONDARY_FEATURED.banner}
                  alt={SECONDARY_FEATURED.title}
                  className="vod-series-banner-img"
                />
                <div className="vod-series-banner-mask" />
              </div>

              <div className="vod-series-banner-content">
                <div className="vod-series-meta-col">
                  <span className="vod-series-flag">LBN FLAGSHIP BROADCAST</span>
                  <h3 className="vod-series-title">{SECONDARY_FEATURED.title}</h3>

                  <div className="vod-hero-rating-strip">
                    <div className="vod-stars">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`star-icon ${i < SECONDARY_FEATURED.stars ? 'filled' : ''}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="vod-score-badge">
                      <span className="vod-score-label">LBN</span> {SECONDARY_FEATURED.rating}
                    </span>
                    <span className="vod-meta-dot">•</span>
                    <span className="vod-meta-item">{SECONDARY_FEATURED.year}</span>
                    <span className="vod-meta-dot">•</span>
                    <span className="vod-meta-item">{SECONDARY_FEATURED.quality}</span>
                  </div>

                  <p className="vod-series-tagline">{SECONDARY_FEATURED.tagline}</p>
                  <p className="vod-series-desc">{SECONDARY_FEATURED.description}</p>

                  <div className="vod-series-actions">
                    <button
                      className="vod-play-primary-btn"
                      onClick={() =>
                        openVideoModal({
                          id: SECONDARY_FEATURED.id,
                          title: SECONDARY_FEATURED.title,
                          subtitle: SECONDARY_FEATURED.subtitle,
                          video: SECONDARY_FEATURED.video,
                          description: SECONDARY_FEATURED.description,
                          category: 'TALK SHOWS',
                          rating: SECONDARY_FEATURED.rating
                        })
                      }
                    >
                      <span className="btn-play-triangle">▶</span>
                      <span className="btn-text">PLAY PROMO</span>
                    </button>

                    <button
                      className={`vod-watchlist-btn ${watchlist.includes(SECONDARY_FEATURED.id) ? 'active' : ''}`}
                      onClick={(e) => toggleWatchlist(SECONDARY_FEATURED.id, e)}
                    >
                      {watchlist.includes(SECONDARY_FEATURED.id) ? '✓' : '＋'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              7. FULL CATALOG GRID (Curated Showcase View)
              ══════════════════════════════════════════════════════════════════ */}
          <section className="vod-full-grid-section">
            <div className="vod-shelf-header">
              <div className="vod-shelf-title-wrap">
                <h2 className="vod-shelf-heading">Explore All Promos</h2>
                <span className="vod-shelf-badge">{filteredPromos.length} VIDEOS AVAILABLE</span>
              </div>
            </div>

            <div className="vod-catalog-grid">
              {filteredPromos.map((item) => (
                <div
                  key={item.id}
                  className="vod-poster-card"
                  onClick={() => openVideoModal(item)}
                >
                  <div className="vod-poster-media">
                    <img src={item.poster} alt={item.title} className="vod-poster-img" />
                    <div className="vod-poster-gradient-mask" />
                    <span className="vod-poster-badge">{item.category}</span>
                    <span className="vod-poster-quality">{item.quality}</span>

                    <div className="vod-poster-hover-overlay">
                      <div className="vod-play-glow-btn">
                        <span className="play-triangle">▶</span>
                      </div>
                      <span className="vod-hover-prompt">Watch Promo</span>
                    </div>
                  </div>

                  <div className="vod-poster-caption">
                    <h3 className="vod-poster-title">{item.title}</h3>
                    <p className="vod-poster-sub">
                      {item.year} • {item.schedule}
                    </p>
                    <div className="vod-poster-footer">
                      <span className="vod-poster-rating">★ {item.rating}</span>
                      <button
                        className={`vod-poster-save-btn ${watchlist.includes(item.id) ? 'saved' : ''}`}
                        onClick={(e) => toggleWatchlist(item.id, e)}
                        title="Add to Watchlist"
                      >
                        {watchlist.includes(item.id) ? '✓' : '＋'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          7. CINEMATIC VIDEO PLAYER MODAL (Plays actual MP4 promo)
          ══════════════════════════════════════════════════════════════════ */}
      {activeModalVideo && (
        <div className="vod-modal-backdrop" onClick={closeVideoModal}>
          <div
            className="vod-modal-container"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header Bar */}
            <div className="vod-modal-header">
              <button
                className="vod-modal-header-back-btn"
                onClick={closeVideoModal}
                aria-label="Go back"
                title="Go back"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span>BACK</span>
              </button>
              <div className="vod-modal-title-group">
                <span className="vod-modal-category-badge">
                  {activeModalVideo.category || 'PROMO'}
                </span>
                <h3 className="vod-modal-title">{activeModalVideo.title}</h3>
                {activeModalVideo.subtitle && (
                  <span className="vod-modal-sub">· {activeModalVideo.subtitle}</span>
                )}
              </div>
              <button
                className="vod-modal-close-btn"
                onClick={closeVideoModal}
                aria-label="Close player"
              >
                ✕
              </button>
            </div>

            {/* Video Frame */}
            <div className="vod-modal-video-wrapper">
              <video
                ref={(el) => {
                  videoPlayerRef.current = el;
                  if (el) {
                    el.muted = false;
                    el.volume = 1.0;
                    el.play().catch((err) => {
                      console.warn('VOD autoplay audio fallback:', err);
                      el.muted = true;
                      el.play().then(() => {
                        const unmute = () => { if (videoPlayerRef.current) videoPlayerRef.current.muted = false; };
                        window.addEventListener('click', unmute, { once: true });
                        window.addEventListener('touchstart', unmute, { once: true });
                      }).catch(() => {});
                    });
                  }
                }}
                src={activeModalVideo.video}
                className="vod-modal-video-element"
                controls
                autoPlay
                playsInline
                preload="auto"
                controlsList="nodownload"
                onLoadedData={(e) => {
                  const v = e.currentTarget;
                  v.muted = false;
                  v.volume = 1.0;
                  v.play().catch(() => {});
                }}
                onCanPlay={(e) => {
                  const v = e.currentTarget;
                  v.muted = false;
                  v.volume = 1.0;
                  v.play().catch(() => {});
                }}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Modal Info Footer */}
            <div className="vod-modal-footer">
              <div className="vod-modal-info">
                <p className="vod-modal-desc">
                  {activeModalVideo.description || activeModalVideo.tagline}
                </p>
                <div className="vod-modal-meta-row">
                  {activeModalVideo.schedule && (
                    <span className="vod-modal-schedule">
                      📅 Broadcast: <strong>{activeModalVideo.schedule}</strong>
                    </span>
                  )}
                  {activeModalVideo.rating && (
                    <span className="vod-modal-score">
                      ⭐ Rating: <strong>{activeModalVideo.rating} / 10</strong>
                    </span>
                  )}
                </div>
              </div>
              <div className="vod-modal-actions">
                <button
                  className={`vod-modal-add-btn ${watchlist.includes(activeModalVideo.id) ? 'saved' : ''}`}
                  onClick={() => toggleWatchlist(activeModalVideo.id)}
                >
                  {watchlist.includes(activeModalVideo.id) ? '✓ Saved in List' : '＋ Add to List'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VOD;
