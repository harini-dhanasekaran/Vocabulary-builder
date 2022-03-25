import React, { useState } from 'react';

export default function FlashCard({ flashCard }) {
  const [flip, setFlip] = useState(false);
  return (
    <div className="flex bg-slate-100 flex-col rounded-lg shadow-md m-6 w-1/4 h-40 justify-center [align-items:center] ">
      <div className="text-center p-3">
        <div className="text-center m-3">{flashCard.question}</div>
        <button
          className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-2 px-4 border-b-4 border-emerald-600 hover:border-emerald-600 rounded"
          onClick={() => setFlip(!flip)}
        >
          answer
        </button>
        <div className={`p-3 ${flip ? 'visible' : 'invisible'}`}>
          {flashCard.answer}
        </div>
      </div>
    </div>
  );
}
