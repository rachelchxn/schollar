import Illustration from './images/test-illustration.svg'
import { useState } from 'react';

const Test = () => {

    const questions = [
        {question:'How old do you have to be to start investing in a TFSA?',
            answer: [
                {text:'16', correct: false},
                {text:'18', correct: true},
                {text:'21', correct: false},
                {text:'There is no minimum age', correct: false}
            ]
        },
        {question:'Generally, what percent of your income should you be saving?',
            answer: [
                {text:'5%', correct: false},
                {text:'10%', correct: false},
                {text:'20%', correct: true},
                {text:'50%', correct: false}
            ]
        },
        {question:'If you start your own company and make money from it, you’re generating...',
            answer: [
                {text:'Earned Income', correct: false},
                {text:'Profit Income', correct: true},
                {text:'Capital Gains Income', correct: false},
                {text:'Royalty Income', correct: false}
            ]
        }
    ]

    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showNext, setShowNext] = useState(false);

    const optionClicked = (correct) => {
        if (correct & !showNext) {
          setScore(score + 1);
        }
        setShowNext(true)
    }

    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
    };

    function handleNext() {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
          } else {
            setShowResults(true);
          }
          setShowNext(false)
    }
    

  return (
    <div className='page-body'>
        <div className="word-intro">
            <div>
                <h2>Test Yourself</h2>
                <p>Here's a quiz to see how much you learned!</p>
            </div>
            <img className="test-illustration" src={Illustration} />
        </div>

        {!showResults && 
        <div>
            <h4>Question {currentQuestion + 1} out of {questions.length}</h4>

            <h3>{questions[currentQuestion].question}</h3>
            {questions[currentQuestion].answer.map((answer) => (
                <li key={answer.text} onClick={() => optionClicked(answer.correct)} className={showNext && answer.correct.toString()} >{answer.text}</li>
            ))}

                <h1 className='current-score'>Current Score:<span className='score'>{score}/3</span><span>{showNext && <button onClick={handleNext}>Next Question</button>}</span></h1>
                
        </div>
        }

            {showResults && 
                <div>
                    <h3>Final Results</h3>
                <h2 className='final-score'>{Math.round((score / questions.length *100) * 100) / 100 }%</h2>
                <h3>
                  ({score} out of {questions.length} correct)
                </h3>
                <button className='restart' onClick={() => restartGame()}>Restart Game</button>
              </div>
            }

    </div>
  )
}

export default Test