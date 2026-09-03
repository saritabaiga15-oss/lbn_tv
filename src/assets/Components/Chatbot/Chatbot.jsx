import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, text: "We love the work you are doing. Keep inspiring communities." },
  ]);
  const [comment, setComment] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  function toggleChat() {
    setOpen((prev) => !prev);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = comment.trim();
    if (!text) return;

    setComments((prev) => [
      { id: Date.now(), text },
      ...prev,
    ]);
    setComment("");
  }

  return (
    <>
      <button
        id="fc-launcher"
        className={open ? "open" : ""}
        aria-label="Open comment form"
        aria-expanded={open}
        onClick={toggleChat}
      >
        <span className="fc-launcher-label">Comment</span>
        <svg
          className="fc-icon-chat"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        <svg
          className="fc-icon-close"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div
        id="fc-panel"
        className={open ? "open" : ""}
        role="dialog"
        aria-label="Comment form"
        aria-hidden={!open}
      >
        <div id="fc-header">
          <div className="fc-brand-row">
            <span className="fc-brand-mark">LBN</span>
            <span className="fc-eyebrow">COMMENTS</span>
          </div>
          <div className="fc-title">Leave a comment</div>
          <div className="fc-subtitle">
            <span className="fc-dot" />
            Share your feedback with us
          </div>
        </div>

        <div id="fc-messages">
          {comments.length === 0 ? (
            <div className="fc-empty">No comments yet. Be the first to share your thoughts.</div>
          ) : (
            comments.map((item) => (
              <div key={item.id} className="fc-comment-item">
                <span className="fc-avatar">L</span>
                <div className="fc-comment-body">
                  <strong>Listener</strong>
                  <p>{item.text}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <form id="fc-input-row" onSubmit={handleSubmit}>
          <textarea
            id="fc-input"
            ref={inputRef}
            rows="3"
            placeholder="Write your comment…"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button id="fc-send" type="submit" aria-label="Send comment">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
