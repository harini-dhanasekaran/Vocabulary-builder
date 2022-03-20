import React, { useState } from 'react';

export default function FlashCard({ flashCard }) {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg card ${
        flip ? 'flip' : ''
      }`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">{flashCard.question}</div>
      <div className="back">{flashCard.answer}</div>
    </div>
  );
}
