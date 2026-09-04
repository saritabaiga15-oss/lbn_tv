import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      question: 'What is Loveworld India Broadcasting Network?',
      answer:
        'Loveworld India Broadcasting Network is a Christian media network dedicated to promoting life and love.'
    },
    {
      id: 2,
      question: 'What programmes can I watch on LBN?',
      answer:
        "LBN offers inspiring content including teachings, worship, prayer, family, lifestyle, youth, and children's programmes."
    },
    {
      id: 3,
      question: 'Can I watch LBN online?',
      answer:
        'Yes, you can watch LBN programmes online anytime and from anywhere.'
    },
    {
      id: 4,
      question: 'Does LBN have programmes for children and youth?',
      answer:
        'Yes, LBN provides engaging and purpose-driven content specially created for children and young people.'
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
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
                  <span className="faq-question-text">
                    {item.question}
                  </span>
                  <div className="faq-icon-wrapper">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
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