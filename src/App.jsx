import flashcards from "./data";
import { useState } from "react";
import AnswerOption from "./components/AnswerOption";

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null)

  const currentCard = flashcards[cardIndex];

  const [score, setScore] = useState(0);

  function handleAnswer(selectedAnswer){

    if(selectedOption !== null){
      return
    }

    setSelectedOption(selectedAnswer);
    
    if(selectedAnswer === currentCard.back){
      setScore((currentScore) => currentScore + 1);
    } else {
      setScore(0);
    }

    window.setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * flashcards.length);
      setCardIndex(randomIndex);
      setSelectedOption(null);
    }, 2000);
  }

  return (
    <main className="App">
      <header>
        <h1>IFE'S QUIZ</h1>

        <span>
          Score <strong>{score}</strong>
        </span>
      </header>

      <div className="flashcard">
        <h2>{currentCard.front}</h2>
      </div>

      <div className="answers">
        {currentCard.options.map((option) => (
          <AnswerOption 
          key={option}
          option={option}
          onAnswer={handleAnswer}
          correctAnswer={currentCard.back}
          selectedOption={selectedOption}
           
          />
        ))}
      </div>

      <p className="game-hint">
        Every correct answer increases your score. One wrong answer resets your
        score.
      </p>
    </main>
  );
}

export default App;
