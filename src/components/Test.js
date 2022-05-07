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
        },
        {question:'In terms of interest, the "principal" is...',
            answer: [
                {text:'The initial amount you put in', correct: true},
                {text:'The amount of interest you earn', correct: false},
                {text:'The rate of interest', correct: false},
                {text:'The inital amount + interest earned', correct: false}
            ]
        },
        {question:'Which of the following is FALSE about credit score?',
            answer: [
                {text:'It represents the risk associated with lending money to an individual', correct: false},
                {text:'It is measured on a scale of 0 to 900', correct: false},
                {text:'The lower your score, the better it is', correct: true},
                {text:'Credit scores are important', correct: false}
            ]
        },
        {question:'What does "RESP" stand for?',
            answer: [
                {text:'Refundable External Savings Plan', correct: false},
                {text:'Regional Economic Savings Plan', correct: false},
                {text:'Retirement Endowment Savings Plan', correct: false},
                {text:'Registered Education Savings Plan', correct: true}
            ]
        },
        {question:'Which of the following is a form of non-refundable monetary support given to someone to help fund their post-secondary education?',
            answer: [
                {text:'Loan', correct: false},
                {text:'Mortgage', correct: false},
                {text:'Bursary', correct: true},
                {text:'Credit', correct: false}
            ]
        },
        {question:'The total sum of all forms of earnings of an individual or household is...',
            answer: [
                {text:'Savings', correct: false},
                {text:'Income Stream', correct: false},
                {text:'Gross Income', correct: true},
                {text:'Net Income', correct: false}
            ]
        },
        {question:'Co-op programs are beneficial because...',
            answer: [
                {text:'You can earn money that will help pay for school', correct: false},
                {text:'You get real work experience before even graduating', correct: false},
                {text:'You have the opportunity to learn from industry professionals', correct: false},
                {text:'All of the above', correct: true}
            ]
        },
        {question:"If you're shopping with friends and you want to buy a purse you that costs most of your money, you should...",
            answer: [
                {text:'Buy it right away', correct: false},
                {text:'Get your friend to pay for you', correct: false},
                {text:'Wait a few days and see if you still want it', correct: true},
                {text:'Steal it and hope no one catches you', correct: false}
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

                <h1 className='current-score'>Current Score:<span className='score'>{score}/10</span><span>{showNext && <button onClick={handleNext}>Next Question</button>}</span></h1>
                
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