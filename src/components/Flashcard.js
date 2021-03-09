import React, { useState } from "react";
import '../app.css';

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        {flashcard.question}
        <div className="options">
          {flashcard.options.map((option) => {
            return <div className="flashcard-option">{option}</div>;
          })}
        </div>
      </div>
      <div className="back">{flashcard.answer}</div>
    </div>
  );
}
