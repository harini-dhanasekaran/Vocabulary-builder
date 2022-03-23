import React, { useState } from 'react';

export default function FlashCard({ flashCard }) {
  const [flip, setFlip] = useState(false);
  return (
    <div className="relative flex bg-slate-100 flex-col rounded-lg shadow-md m-6 w-56 h-32 justify-center [align-items:center] ">
      <div className="text-center p-3 absolute">
        <div>{flashCard.question}</div>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={() => setFlip(!flip)}
        >
          answer
        </button>
        <div className={`${flip ? 'visible' : 'invisible'}`}>
          {flashCard.answer}
        </div>
      </div>
    </div>
  );
}
