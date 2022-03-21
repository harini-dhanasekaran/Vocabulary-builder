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
  }
];

export default App;
