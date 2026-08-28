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

const Programmes = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedShow, setSelectedShow] = useState(null);

  const filters = ['ALL', 'WORSHIP', 'TALK SHOWS', 'TEENS & KIDS', 'SPECIALS'];

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
      description: 'Ignite explores the real-life intersection of youth culture, adolescence, and faith. Engaging discussions, young panels, and inspiring stories show how faith lights the way through life’s trials.'
    },
    {
      id: 3,
      title: 'LWS CINEMA SHOW',
      category: 'SPECIALS',
      image: LWS,
      schedule: 'Fridays at 9:00 PM',
      duration: '90 mins',
      tagline: 'Thrilling adventure that will keep you on edge.',
      description: 'Following the journeys of characters navigating life\'s most intense crossroads. A gripping storytelling experience that combines cinematic visuals with redemptive, faith-filled narratives.'
    },
    {
      id: 4,
      title: 'LOVEWORLD PRAISE NIGHT',
      category: 'WORSHIP',
      image: global1,
      schedule: 'Live Events',
      duration: '120 mins',
      tagline: 'Praising God in the beauty of holiness.',
      description: 'A global music event celebrating faith, praise, and victorious worship. Featuring live choirs, instruments, and deep sermons on praise.'
    },
    {
      id: 5,
      title: 'GLOBAL COMMUNION SERVICE',
      category: 'SPECIALS',
      image: global2,
      schedule: 'First Sunday of the Month',
      duration: '180 mins',
      tagline: 'Deepening fellowship and grace.',
      description: 'Monthly live services led by Pastor Chris, containing deep spiritual revelations, global prayer directives, and communion rites.'
    },
    {
      id: 6,
      title: 'RHAPATHON',
      category: 'SPECIALS',
      image: global3,
      schedule: 'Quarterly Broadcast',
      duration: '150 mins',
      tagline: 'Celebrating the impact of the Word.',
      description: 'A special broadcasting campaign detailing the global outreach, translation testimonies, and distributions of the daily devotional Rhapsody of Realities.'
    },
    {
      id: 7,
      title: 'HEALING STREAMS Services',
      category: 'SPECIALS',
      image: global4,
      schedule: 'Seasonal Global Events',
      duration: '180 mins',
      tagline: 'Where miracles happen live.',
      description: 'Live healing services broadcasting miracles, divine restorations, and testimonies of healing from across the globe.'
    },
    {
      id: 8,
      title: 'TEENS TALENT HUB',
      category: 'TEENS & KIDS',
      image: img4,
      schedule: 'Saturdays at 11:30 AM',
      duration: '90 mins',
      tagline: 'Unleashing the gifts of grace.',
      description: 'Spotlighting young teenagers using their musical, artistic, and spoken word talents to express faith and build character.'
    },
    {
      id: 9,
      title: 'KIDDIES RHAPSODY SHOW',
      category: 'TEENS & KIDS',
      image: img2,
      schedule: 'Fridays at 3:00 PM',
      duration: '45 mins',
      tagline: 'Growing in grace and scripture wisdom.',
      description: 'Fun animations, illustrations, and memory verses built around the Kiddies Rhapsody devotional, helping children learn faith foundations.'
    },
    {
      id: 10,
      title: 'BIBLE ADVENTURES',
      category: 'TEENS & KIDS',
      image: img3,
      schedule: 'Thursdays at 3:00 PM',
      duration: '60 mins',
      tagline: 'Heroes of faith come to life.',
      description: 'High-quality 3D animated films depicting classical biblical tales of Esther, David, and Daniel, teaching values and character to kids.'
    }
  ];

  const filteredPrograms = activeFilter === 'ALL'
    ? programList
    : programList.filter(prog => prog.category === activeFilter);

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
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="programmes-grid">
          {filteredPrograms.map((prog) => (
            <div 
              key={prog.id} 
              className="programme-card"
              onClick={() => setSelectedShow(prog)}
            >
              <div className="programme-card-img-wrapper">
                <img src={prog.image} alt={prog.title} className="programme-card-img" />
                <div className="programme-card-overlay"></div>
                <span className={`programme-card-category cat-${prog.category.toLowerCase().replace(' & ', '-')}`}>{prog.category}</span>
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
