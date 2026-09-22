import React from 'react';
import './Messages.css';
import monthlyMsg from '../../images/Growth.PNG';
import yearlyMsg from '../../images/Manifestation_banner.png';

const messages = [
  {
    id: 1,
    image: monthlyMsg,
    title: "September – The Month of Growth",
    badge: "MESSAGE OF THE MONTH",
    objectPosition: "center 8%",
  },
  {
    id: 2,
    image: yearlyMsg,
    title: "2026 The Year Of Manifestation",
    badge: "MESSAGE OF THE YEAR",
    objectPosition: "center center",
  }
];

const Messages = () => {
  return (
    <section className="messages-section">
      <div className="messages-container">
        <div className="messages-header">
          <span className="messages-label">FEATURED MESSAGES</span>
          <h2 className="messages-title">MESSAGES</h2>
          <p className="messages-desc">
            Experience life transforming messages from Pastor Chris anointed words that build your faith, renew your thinking, ignite your God given purpose, and inspire you to live out God’s plan
          </p>
        </div>

        {/* 2-Column Showcase Grid (Exact same as Upcoming Global Programs) */}
        <div className="messages-grid">
          {messages.map((msg) => (
            <div key={msg.id} className="message-card">
              <div className="message-img-wrapper">
                <img
                  src={msg.image}
                  alt={msg.title}
                  className="message-img"
                  style={{ objectPosition: msg.objectPosition }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Messages;
