import React from 'react';
import FlashCard from './FlashCard';

export default function FlashCardList({ flashCards }) {
  return (
      <div className="flex flex-wrap justify-center">
        {flashCards.map((flashCard) => {
          return <FlashCard flashCard={flashCard} key={flashCard.id} />;
        })}
      </div>
  );
}
