import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      question: 'What is LBNTV?',
      answer: 'LoveWorld India Broadcasting Network (LBNTV) is a premier Christian media and broadcasting organization dedicated to delivering value-based, inspirational programming across India, Asia, and the world. We offer spiritual guidance, hope, and worship slots 24/7.'
    },
    {
      id: 2,
      question: 'Is LBNTV free to watch?',
      answer: 'Yes! LBNTV is a free-to-air broadcasting network. All our live streams, daily programs, and global live events are completely free of charge. There are no subscriptions, memberships, or hidden fees required to stream our programs.'
    },
    {
      id: 3,
      question: 'Where can I watch LBNTV?',
      answer: 'You can watch LBNTV live on our website using the "WATCH LIVE" option. You can also stream our feeds on our mobile apps (available on iOS and Android), major satellite networks, and regional cable networks across multiple states in India.'
    },
    {
      id: 4,
      question: 'What kinds of programs are broadcast on LBNTV?',
      answer: 'Our broadcast schedule includes a rich variety of faith-building segments: live communion services, worship programs (like Song of Praise and Praise Nights), regional ministry teachings, suspenseful cinematic drama series (like Logan), and dedicated blocks for teenagers (Ignite Show) and children.'
    },
    {
      id: 5,
      question: 'How can I support LBNTV?',
      answer: 'You can support LBNTV through prayers, volunteering at our New Delhi and regional studios, sharing our live broadcast links with your family, or giving voluntary partner donations to help us expand satellite transponder feeds and regional language translations.'
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        
        {/* Header */}
        <div className="faq-header">
          <span className="faq-label">QUESTIONS & ANSWERS</span>
          <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        {/* Accordion list */}
        <div className="faq-accordion">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={item.id} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-icon-wrapper">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="faq-svg-icon">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                
                <div className="faq-answer-wrapper">
                  <div className="faq-answer-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
