import React, { useRef, useState, useEffect, useCallback } from 'react';
import './ScrollRow.css';

const ScrollRow = ({ children, className = '', scrollAmount = 400 }) => {
  const rowRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (!rowRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);
  }, []);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    checkScroll();
    const t1 = setTimeout(checkScroll, 100);
    const t2 = setTimeout(checkScroll, 400);
    const t3 = setTimeout(checkScroll, 1000);

    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll, children]);

  const handleScroll = (direction) => {
    if (!rowRef.current) return;
    const distance =
      direction === 'left'
        ? -Math.max(rowRef.current.clientWidth * 0.75, 320)
        : Math.max(rowRef.current.clientWidth * 0.75, 320);

    rowRef.current.scrollBy({
      left: distance,
      behavior: 'smooth'
    });

    setTimeout(checkScroll, 350);
  };

  return (
    <div className="ott-scroll-wrapper">
      {canScrollLeft && (
        <button
          type="button"
          className="ott-scroll-btn ott-scroll-prev"
          onClick={() => handleScroll('left')}
          aria-label="Scroll left"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      )}

      <div className={`ott-scroll-track ${className}`} ref={rowRef}>
        {children}
      </div>

      {canScrollRight && (
        <button
          type="button"
          className="ott-scroll-btn ott-scroll-next"
          onClick={() => handleScroll('right')}
          aria-label="Scroll right"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollRow;
