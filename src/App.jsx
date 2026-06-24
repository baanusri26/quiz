import { useState } from 'react'
import './App.css'
import questions from './data'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleanswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className="total">
      <div className="quiz">
        {showScore ? (
          <div className="score-section">
            <h1>Quiz Completed 🎉</h1>
            <h2>Your Score: {score} / {questions.length}</h2>
          </div>
        ) : (
          <>
            <div className="sample">
              <h1 className="quiz-title">👑 Prince Quiz:</h1>
              <h1>&quot;Are you a true Mahesh Babu fan?&quot;</h1>
            </div>
            <div className="question">
              <h3>{questions[currentQuestion].question}</h3>
              {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleanswer(option)}>
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default App
