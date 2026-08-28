import React, { useState } from 'react';
import './Schedule.css';
import LWS from '../../images/LWS.jpeg';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';
import image4 from '../../images/image4.png';
import global1 from '../../images/global1.png';
import global2 from '../../images/global2.jpeg';
import global3 from '../../images/global3.png';
import global4 from '../../images/global4.png';

const Schedule = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [selectedDay, setSelectedDay] = useState('Friday');
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [reminderSet, setReminderSet] = useState({});

  const scheduleData = {
    Monday: [
      { time: '06:00 AM', title: 'Morning Devotional & Prayer', category: 'WORSHIP', duration: '60m', host: 'Pastor Chris', live: false, image: global2 },
      { time: '09:30 AM', title: 'Scripture Foundations', category: 'TEENS & KIDS', duration: '45m', host: 'LoveWorld Kids', live: false, image: image3 },
      { time: '02:00 PM', title: 'Youth Connect Talk Show', category: 'TALK SHOWS', duration: '90m', host: 'LBN Youth Team', live: false, image: image3 },
      { time: '06:30 PM', title: 'Global News & Perspectives', category: 'SPECIALS', duration: '30m', host: 'LBN News Desk', live: false, image: global3 },
      { time: '08:00 PM', title: 'Evening Praise & Worship', category: 'WORSHIP', duration: '120m', host: 'LoveWorld Singers', live: true, image: global1 }
    ],
    Tuesday: [
      { time: '06:00 AM', title: 'Morning Faith Confessions', category: 'WORSHIP', duration: '60m', host: 'LBN Ministers', live: false, image: image2 },
      { time: '11:00 AM', title: 'Rhapsody Today', category: 'SPECIALS', duration: '60m', host: 'Pastor Chris', live: false, image: global3 },
      { time: '03:30 PM', title: 'Teen Voice & Talent', category: 'TEENS & KIDS', duration: '60m', host: 'Teens Hub', live: false, image: image4 },
      { time: '06:00 PM', title: 'Youth Connect Special', category: 'TALK SHOWS', duration: '90m', host: 'LBN Youth Team', live: false, image: image3 },
      { time: '09:00 PM', title: 'Late Night Worship Experience', category: 'WORSHIP', duration: '90m', host: 'LoveWorld Singers', live: false, image: global1 }
    ],
    Wednesday: [
      { time: '06:00 AM', title: 'Divine Health Realities', category: 'WORSHIP', duration: '60m', host: 'Healing School', live: false, image: global4 },
      { time: '10:00 AM', title: 'Kingdom Insights', category: 'TALK SHOWS', duration: '60m', host: 'LBN Panel', live: false, image: image3 },
      { time: '03:00 PM', title: 'Joyful Kids Choir & Lessons', category: 'TEENS & KIDS', duration: '45m', host: 'Kids Ministry', live: false, image: image4 },
      { time: '07:00 PM', title: 'Midweek Special Service', category: 'WORSHIP', duration: '120m', host: 'Pastor Chris', live: true, image: global2 },
      { time: '09:30 PM', title: 'Worship Highlights', category: 'WORSHIP', duration: '60m', host: 'LBN Studio', live: false, image: image2 }
    ],
    Thursday: [
      { time: '06:00 AM', title: 'Morning Glory Broadcast', category: 'WORSHIP', duration: '60m', host: 'LBN Ministers', live: false, image: global1 },
      { time: '12:00 PM', title: 'Faith & Culture Today', category: 'TALK SHOWS', duration: '60m', host: 'Ignite Panel', live: false, image: image3 },
      { time: '03:00 PM', title: '3D Bible Adventures', category: 'TEENS & KIDS', duration: '60m', host: 'Kids Animated Hub', live: false, image: image3 },
      { time: '07:30 PM', title: 'Rhapathon Inspiring Stories', category: 'SPECIALS', duration: '90m', host: 'LBN Global', live: false, image: global3 },
      { time: '09:30 PM', title: 'Night of Miracles & Healing', category: 'SPECIALS', duration: '120m', host: 'Healing School', live: false, image: global4 }
    ],
    Friday: [
      { time: '06:00 AM', title: 'Morning Devotional & Declarations', category: 'WORSHIP', duration: '60m', host: 'Pastor Chris', live: false, image: global2 },
      { time: '03:00 PM', title: 'Kiddies Rhapsody Show', category: 'TEENS & KIDS', duration: '45m', host: 'LoveWorld Kids', live: false, image: image2 },
      { time: '06:00 PM', title: 'Global Prayer & Prophetic Hour', category: 'WORSHIP', duration: '90m', host: 'LBN Global', live: true, image: global1 },
      { time: '09:00 PM', title: 'LWS Cinema Special', category: 'SPECIALS', duration: '90m', host: 'LoveWorld Studio (LWS)', live: false, image: LWS },
      { time: '11:00 PM', title: 'Overnight Praise Stream', category: 'WORSHIP', duration: '180m', host: 'LoveWorld Singers', live: false, image: global3 }
    ],
    Saturday: [
      { time: '07:00 AM', title: 'Weekend Praise & Inspiration', category: 'WORSHIP', duration: '90m', host: 'LBN Choir', live: false, image: image2 },
      { time: '11:30 AM', title: 'Teens Talent Hub Live', category: 'TEENS & KIDS', duration: '90m', host: 'Teens Hub', live: false, image: image4 },
      { time: '04:00 PM', title: 'Healing Streams Highlights', category: 'SPECIALS', duration: '120m', host: 'Healing School', live: false, image: global4 },
      { time: '07:00 PM', title: 'Song of Praise (New Episode)', category: 'WORSHIP', duration: '45m', host: 'LoveWorld Studio (LWS)', live: true, image: image2 },
      { time: '09:00 PM', title: 'Praise Night Concert', category: 'WORSHIP', duration: '150m', host: 'Pastor Chris & Singers', live: false, image: global1 }
    ],
    Sunday: [
      { time: '07:00 AM', title: 'Sunday Morning Worship Stream', category: 'WORSHIP', duration: '120m', host: 'LoveWorld India', live: true, image: global2 },
      { time: '11:00 AM', title: 'Global Sunday Message', category: 'WORSHIP', duration: '150m', host: 'Pastor Chris', live: false, image: global3 },
      { time: '04:00 PM', title: 'Kiddies & Youth Sunday Special', category: 'TEENS & KIDS', duration: '90m', host: 'Kids & Youth Hub', live: false, image: image3 },
      { time: '06:00 PM', title: 'Ignite Talk Show (New Episode)', category: 'TALK SHOWS', duration: '60m', host: 'Ignite Panel', live: false, image: image3 },
      { time: '08:00 PM', title: 'Global Communion Service Highlights', category: 'SPECIALS', duration: '120m', host: 'LBN Global', live: false, image: global2 }
    ]
  };

  const toggleReminder = (id) => {
    setReminderSet(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const currentList = scheduleData[selectedDay] || [];
  const filteredList = activeCategory === 'ALL'
    ? currentList
    : currentList.filter(item => item.category === activeCategory);

  return (
    <section id="epg" className="epg-section">
      <div className="epg-container">
        
        {/* Header */}
        <div className="epg-header">
          <span className="epg-badge">ELECTRONIC PROGRAMME GUIDE</span>
          <h2 className="epg-title">WEEKLY BROADCAST SCHEDULE</h2>
          <p className="epg-subtitle">
            Never miss your favorite broadcasts. Plan your viewing, configure reminders, and stay tuned to live satellite feeds.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="epg-days-bar">
          {days.map((day) => (
            <button
              key={day}
              className={`epg-day-btn ${selectedDay === day ? 'active' : ''}`}
              onClick={() => setSelectedDay(day)}
            >
              <span className="day-name">{day.substring(0, 3).toUpperCase()}</span>
              <span className="day-full">{day}</span>
            </button>
          ))}
        </div>

        {/* Filter Categories */}
        <div className="epg-filters-bar">
          {['ALL', 'WORSHIP', 'TALK SHOWS', 'TEENS & KIDS', 'SPECIALS'].map((cat) => (
            <button
              key={cat}
              className={`epg-filter-chip ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Schedule Slots Timeline */}
        <div className="epg-timeline">
          {filteredList.map((slot, index) => {
            const slotId = `${selectedDay}-${index}`;
            const isReminder = reminderSet[slotId];

            return (
              <div key={index} className={`epg-slot-card ${slot.live ? 'is-live' : ''}`}>
                <div className="epg-slot-time-col">
                  <span className="slot-time">{slot.time}</span>
                  <span className="slot-duration">{slot.duration}</span>
                </div>

                <div className="epg-slot-img-col" style={{ backgroundImage: `url("${slot.image}")` }}>
                  {slot.live && <span className="live-pill">&bull; LIVE NOW</span>}
                </div>

                <div className="epg-slot-info-col">
                  <div className="epg-slot-meta">
                    <span className="slot-category">{slot.category}</span>
                    <span className="slot-host">Hosted by {slot.host}</span>
                  </div>
                  <h3 className="slot-title">{slot.title}</h3>
                </div>

                <div className="epg-slot-action-col">
                  <button
                    className={`reminder-btn ${isReminder ? 'set' : ''}`}
                    onClick={() => toggleReminder(slotId)}
                  >
                    {isReminder ? '✓ REMINDER SET' : '+ SET REMINDER'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Schedule;
