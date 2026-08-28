import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      question: 'What is LoveWorld India Broadcasting Network?',
      answer: 'LoveWorld India Broadcasting Network is a Christian media network dedicated to spreading the Gospel through inspiring and faith-filled programmes.'
    },
    {
      id: 2,
      question: 'What programmes can I watch on LBN?',
      answer: 'LBN offers inspiring content including teachings, worship, prayer, family, lifestyle, youth, and children\'s programmes.'
    },
    {
      id: 3,
      question: 'Can I watch LBN online?',
      answer: 'Yes, you can watch LBN programmes online anytime and from anywhere.'
    },
    {
      id: 4,
      question: 'Does LBN have programmes for children and youth?',
      answer: 'Yes, LBN provides engaging and purpose-driven content specially created for children and young people.'
    },
    {
      id: 5,
      question: 'How can I support LoveWorld India Broadcasting Network?',
      answer: 'You can support LBN by partnering with the network and helping advance its mission of spreading the Gospel through broadcasting.'
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
