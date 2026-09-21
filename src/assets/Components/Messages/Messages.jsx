import React from 'react';
import './Messages.css';
import monthlyMsg from '../../images/Growth.PNG';


const messages = [
  {
    id: 1,
    image: monthlyMsg,
    title: "September  The Month of Growth",
    subtitle: "Message Of The Month By Pastor Chris",
    badge: "MESSAGE OF THE MONTH",
  },
];

const Messages = () => {
  return (
    <section className="messages-section">
      <div className="messages-container">
        <div className="messages-header">
          <span className="messages-label">FEATURED MESSAGES</span>
          <h2 className="messages-title">MESSAGES</h2>
          <p className="messages-desc">
            Experience life transforming messages from Pastor Chris anointed words that build your faith, renew your thinking, ignite your God given purpose, and inspire you to live out God’s plan          </p>
        </div>

        <div className="messages-grid">
          {messages.map((msg) => (
            <div key={msg.id} className="message-card">
              <div className="message-img-wrapper">
                <img src={msg.image} alt={msg.title} className="message-img" />
                <div className="message-card-overlay">
                  <span className="message-badge">{msg.badge}</span>
                  <div className="message-card-text">
                    <h3 className="message-card-title">{msg.title}</h3>
                    <p className="message-card-subtitle">{msg.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Messages;
