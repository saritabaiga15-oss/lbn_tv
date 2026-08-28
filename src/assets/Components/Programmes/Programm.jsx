import React, { useState } from 'react';
import './Programm.css';
import LWS from '../../images/LWS.jpeg';
import img2 from '../../images/image2.png';
import img3 from '../../images/image3.png';
import img4 from '../../images/image4.png';
import global1 from '../../images/global1.png';
import global2 from '../../images/global2.jpeg';
import global3 from '../../images/global3.png';
import global4 from '../../images/global4.png';
import herbalHealing from '../../images/herbal_healing.jpg';
import moneyMatters from '../../images/money_matters.jpg';
import craftingBeads from '../../images/crafting_beads.jpg';

const Programmes = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedShow, setSelectedShow] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filters = ['ALL', 'WORSHIP', 'TALK SHOWS', 'HEALTH', 'TEENS & YOUTH', 'KIDS', 'SPECIALS'];

  const programList = [
    {
      id: 1,
      title: 'SONG OF PRAISE',
      category: 'WORSHIP',
      image: img2,
      schedule: 'Saturdays at 7:00 PM',
      duration: '45 mins',
      tagline: 'Behind every song, there’s a story worth singing.',
      description: 'Discover the personal experiences, scripture connects, and deep stories that shape these melodies of worship. Host and artists share raw testimonies that will enrich your soul.'
    },
    {
      id: 2,
      title: 'IGNITE SHOW',
      category: 'TALK SHOWS',
      image: img3,
      schedule: 'Sundays at 6:00 PM',
      duration: '60 mins',
      tagline: 'Always keep the hope alive.',
      description: 'Ignite explores the real-life intersection of culture, lifestyle, and faith. Engaging discussions, young panels, and inspiring stories show how faith lights the way through life’s trials.'
    },
    {
      id: 3,
      title: 'HERBAL HEALING GARDEN',
      category: 'HEALTH',
      image: herbalHealing,
      schedule: 'Tuesdays & Thursdays at 4:00 PM',
      duration: '45 mins',
      tagline: 'Holistic wellness rooted in scripture and nature.',
      description: 'Explore natural wellness, nutrition, and holistic wellbeing from a faith-based perspective. Learn how biblical principles combine with healthy lifestyle choices to promote divine health.'
    },
    {
      id: 4,
      title: 'DIVINE HEALTH REALITIES',
      category: 'HEALTH',
      image: global4,
      schedule: 'Daily at 8:00 AM',
      duration: '30 mins',
      tagline: 'Walking in divine health and wholeness every day.',
      description: 'Daily faith-building broadcasts focused on healing confessions, wellness revelations, and living a vibrant, healthy life through the Word of God.'
    },
    {
      id: 5,
      title: 'TEENS TALENT HUB',
      category: 'TEENS & YOUTH',
      image: img4,
      schedule: 'Saturdays at 11:30 AM',
      duration: '90 mins',
      tagline: 'Unleashing the gifts of grace.',
      description: 'Spotlighting teenagers and youth expressing their faith through music, creative arts, and spoken word to build character and purpose.'
    },
    {
      id: 6,
      title: 'YOUTH IGNITE BROADCAST',
      category: 'TEENS & YOUTH',
      image: img3,
      schedule: 'Sundays at 5:00 PM',
      duration: '60 mins',
      tagline: 'Igniting purpose and passion in the next generation.',
      description: 'Interactive panels, inspiring stories, and real discussions guiding teens and young adults through faith, relationships, and modern challenges.'
    },
    {
      id: 7,
      title: 'KIDDIES RHAPSODY SHOW',
      category: 'KIDS',
      image: img2,
      schedule: 'Fridays at 3:00 PM',
      duration: '45 mins',
      tagline: 'Growing in grace and scripture wisdom.',
      description: 'Fun animations, illustrations, and memory verses built around the Kiddies Rhapsody devotional, helping children learn faith foundations.'
    },
    {
      id: 8,
      title: 'BIBLE ADVENTURES 3D',
      category: 'KIDS',
      image: img3,
      schedule: 'Thursdays at 3:00 PM',
      duration: '60 mins',
      tagline: 'Heroes of faith come to life.',
      description: 'High-quality 3D animated films depicting classical biblical tales of Esther, David, and Daniel, teaching values and character to kids.'
    },
    {
      id: 9,
      title: 'CRAFTING FAITH FOR KIDS',
      category: 'KIDS',
      image: craftingBeads,
      schedule: 'Wednesdays at 4:00 PM',
      duration: '30 mins',
      tagline: 'Creative faith through hands-on fun.',
      description: 'Inspiring craft workshops where kids create faith-inspired art projects while learning scripture stories in fun, memorable ways.'
    },
    {
      id: 10,
      title: 'LWS CINEMA SHOW',
      category: 'SPECIALS',
      image: LWS,
      schedule: 'Fridays at 9:00 PM',
      duration: '90 mins',
      tagline: 'Thrilling adventure that will keep you on edge.',
      description: 'Following the journeys of characters navigating life\'s most intense crossroads. A gripping storytelling experience that combines cinematic visuals with redemptive, faith-filled narratives.'
    },
    {
      id: 11,
      title: 'LOVEWORLD PRAISE NIGHT',
      category: 'WORSHIP',
      image: global1,
      schedule: 'Live Events',
      duration: '120 mins',
      tagline: 'Praising God in the beauty of holiness.',
      description: 'A global music event celebrating faith, praise, and victorious worship. Featuring live choirs, instruments, and deep sermons on praise.'
    },
    {
      id: 12,
      title: 'GLOBAL COMMUNION SERVICE',
      category: 'SPECIALS',
      image: global2,
      schedule: 'First Sunday of the Month',
      duration: '180 mins',
      tagline: 'Deepening fellowship and grace.',
      description: 'Monthly live services led by Pastor Chris, containing deep spiritual revelations, global prayer directives, and communion rites.'
    },
    {
      id: 13,
      title: 'RHAPATHON GLOBAL BROADCAST',
      category: 'SPECIALS',
      image: global3,
      schedule: 'Quarterly Broadcast',
      duration: '150 mins',
      tagline: 'Celebrating the impact of the Word.',
      description: 'A special broadcasting campaign detailing the global outreach, translation testimonies, and distributions of the daily devotional Rhapsody of Realities.'
    },
    {
      id: 14,
      title: 'MONEY MATTERS',
      category: 'TALK SHOWS',
      image: moneyMatters,
      schedule: 'Mondays at 7:00 PM',
      duration: '45 mins',
      tagline: 'Biblical wisdom for financial growth.',
      description: 'Practical insights and spiritual guidance on stewardship, financial intelligence, and prosperity according to biblical principles.'
    }
  ];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  const filteredPrograms = activeFilter === 'ALL'
    ? programList
    : programList.filter(prog => prog.category === activeFilter);

  // Keep two rows (3 columns * 2 rows = 6 items) initially
  const displayedPrograms = showAll ? filteredPrograms : filteredPrograms.slice(0, 6);

  const getCategoryClass = (category) => {
    return 'cat-' + category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };

  return (
    <section id="programmes" className="programmes-section">
      <div className="programmes-container">
        <div className="programmes-header">
          <span className="programmes-label">NETWORK GUIDE</span>
          <h2 className="programmes-title">OUR PROGRAMMES</h2>
          <p className="programmes-desc">
            Explore our rich collection of Christian programming. Filter by category to find your favorite shows and schedules.
          </p>
        </div>

        {/* Filter categories tabs */}
        <div className="programmes-filters-wrapper">
          <div className="programmes-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid: 2 rows (6 cards) initially */}
        <div className="programmes-grid">
          {displayedPrograms.map((prog) => (
            <div 
              key={prog.id} 
              className="programme-card"
              onClick={() => setSelectedShow(prog)}
            >
              <div className="programme-card-img-wrapper">
                <img src={prog.image} alt={prog.title} className="programme-card-img" />
                <div className="programme-card-overlay"></div>
                <span className={`programme-card-category ${getCategoryClass(prog.category)}`}>
                  {prog.category}
                </span>
              </div>
              <div className="programme-card-content">
                <span className="programme-card-schedule">{prog.schedule}</span>
                <h3 className="programme-card-title">{prog.title}</h3>
                <p className="programme-card-tagline">"{prog.tagline}"</p>
                <button className="programme-card-btn">VIEW DETAILS</button>
              </div>
            </div>
          ))}
        </div>

        {/* See More / See Less Button */}
        {filteredPrograms.length > 6 && (
          <div className="programmes-more-container">
            <button
              className="programmes-see-more-btn"
              onClick={() => setShowAll((prev) => !prev)}
            >
              <span>{showAll ? 'SEE LESS' : 'SEE MORE'}</span>
              <svg
                className={`see-more-arrow ${showAll ? 'expanded' : ''}`}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Details Modal */}
      {selectedShow && (
        <div className="programmes-modal" onClick={() => setSelectedShow(null)}>
          <div className="programmes-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="programmes-modal-close" onClick={() => setSelectedShow(null)}>&times;</button>
            <div className="programmes-modal-grid">
              <div className="programmes-modal-img-col" style={{ backgroundImage: `url("${selectedShow.image}")` }}>
                <div className="programmes-modal-img-overlay"></div>
              </div>
              <div className="programmes-modal-info-col">
                <span className="programmes-modal-schedule-tag">{selectedShow.schedule} &bull; {selectedShow.duration}</span>
                <h2 className="programmes-modal-show-title">{selectedShow.title}</h2>
                <h4 className="programmes-modal-show-subtitle">{selectedShow.category} CATEGORY</h4>
                <p className="programmes-modal-show-tagline">"{selectedShow.tagline}"</p>
                <p className="programmes-modal-show-desc">{selectedShow.description}</p>
                
                <div className="programmes-modal-actions-container">
                  <button className="programmes-modal-action-watch" onClick={() => setSelectedShow(null)}>
                    WATCH LATEST
                  </button>
                  <button className="programmes-modal-action-back" onClick={() => setSelectedShow(null)}>
                    BACK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Programmes;
