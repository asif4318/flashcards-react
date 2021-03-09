import React, { useState } from "react"; 
import FlashcardsList from "./components/FlashcardList";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  
  return (
    <FlashcardsList flashcards={flashcards} />
  );
}

export default App;

const SAMPLE_FLASHCARDS = [
  {
    id: "1",
    question: "What is 2 + 2?",
    answer: "4",
    options: [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4',
    ]
  },
  {
    id: "2",
    question: "What is 3 + 3?",
    answer: "6",
    options: [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4',
    ]
  },
]