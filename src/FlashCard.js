import React, { useState } from 'react';

export default function FlashCard({ flashCard }) {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className={`relative flex bg-slate-100 flex-col rounded-lg shadow-md m-6 w-56 h-32 justify-center [align-items:center] ${
        flip ? 'flip' : ''
      }`}
      onClick={() => setFlip(!flip)}
    >
      <div className="text-center p-3 absolute">
        <div className="front">
          {flashCard.question}
        </div>
        <div className="back">
          {flashCard.answer}
        </div>
      </div>
    </div>
  );
}
