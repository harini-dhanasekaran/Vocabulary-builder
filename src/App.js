import React, { useState } from 'react';
import FlashCardList from './FlashCardList';
import './assets/tailwind.css';

function App() {
  const [flashCards, setFlashCards] = useState(sample_cards);
  return <FlashCardList flashCards={flashCards} />;
}
const sample_cards = [
  {
    id: 1,
    question: 'lucky',
    answer: 'always gets what they want',
  },
  {
    id: 2,
    question: 'pubersent',
    answer: 'not yet known',
  },
];

export default App;
