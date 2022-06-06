import { useState } from "react";
import "./App.css";

const questions = [
  {
    questionText: "Qual o idiomafalado no Brasil?",
    answerOptions: [
      { answerText: "Português", isCorrect: true },
      { answerText: "Inglês", isCorrect: false },
      { answerText: "Francês", isCorrect: false },
      { answerText: "Alemão", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    answerOptions: [
      { answerText: "Japão e Serra Leoa", isCorrect: true },
      { answerText: "Austrália e Afeganistã", isCorrect: false },
      { answerText: "Itália e Chade", isCorrect: false },
      { answerText: "Brasil e Congo", isCorrect: false },
    ],
  },
  {
    questionText: "Qual empresa criou o Iphone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "Como aprender a programar?",
    answerOptions: [
      { answerText: "Praticando o que se aprende", isCorrect: true },
      { answerText: "Vendo vídeo", isCorrect: false },
      { answerText: "Lendo", isCorrect: false },
      { answerText: "Dormindo", isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="app">
      {showScore ? (
        <div class = "text-center">
        
          <h5> Points : {score*5 - (currentQuestion -score)*4}</h5>
          <div class = "container">
           <div class = "row">
             <div class = "col-md-5">
               <p>Right Ans</p>
            <div class = "progress">
            <div class = "progress-bar" style = {{width : (score/questions.length)*100 + '%',backgroundColor : 'green'}}></div>
                   </div></div>
                   <div class = "col-md-2">
                     
                   </div>
                   <div class = 'col-md-5'>
                     <p>Wrong Ans</p>
            <div class = "progress">
           
            <div class = "progress-bar" style = {{width : ((currentQuestion-score)/questions.length)*100 +'%', backgroundColor : 'red'}}></div></div></div>
            
            </div></div>
           <br></br>
           <br></br>

          <p>Você pontuou {score} de {questions.length}</p>
          </div>
        
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              
          <div class = "container">
           <div class = "row">
            <div class = "progress col-md-4">
            <div class = "progress-bar" style = {{width : (score/questions.length)*100 + '%',backgroundColor : 'green'}}></div>
                   </div>
                   <div class = "col-md-4">
                     Points : {score*5 - (currentQuestion -score)*4}
                   </div>
            <div class = "progress col-md-4">
           
            <div class = "progress-bar" style = {{width : ((currentQuestion-score)/questions.length)*100 +'%', backgroundColor : 'red'}}></div></div>
            </div></div>
                    
              <span>Questão {score} {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
          <div><p>Note: Right ans is 5 points and Wrong ans leads to -4 points</p></div>
        </>
      )}
    </div>
  );
}

export default App;
