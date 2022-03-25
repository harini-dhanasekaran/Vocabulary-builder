import React, { useState } from 'react';
import FlashCardList from './FlashCardList';
import './assets/tailwind.css';

function App() {
  const [flashCards] = useState(sample_cards);
  return (
    <>
      <div className="w-full h-20 text-emerald-900  bg-emerald-300 font-mono text-xl flex flex-row p-5">
        <img
          src="https://www.seekpng.com/png/detail/945-9455599_parts-of-the-brain-png-easy-simple-brain.png"
          alt="Parts Of The Brain Png - Easy Simple Brain Drawing@seekpng.com"
        />
        <h4 className="text-center ">Tailwind responsive header</h4>
      </div>
      <div>
        <FlashCardList flashCards={flashCards} />
      </div>
    </>
  );
}
const sample_cards = [
  {
    id: 1,
    question: 'lucky',
    answer: 'always gets what he/she wants',
  },
  {
    id: 2,
    question: 'pubersent',
    answer: 'not yet known',
  },
  {
    id: 3,
    question: 'Haruk',
    answer: 'Its me',
  },
  {
    id: 4,
    question: 'GoodDay',
    answer: 'SmashKart',
  },
];

export default App;
