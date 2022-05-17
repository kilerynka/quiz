import React from 'react'
import '../styles/quiz.scss'
import Question from './Question'

export default function Quiz(props) {
    const correctAnswerArray = props.data.map(question => question.correct_answer)
    const [check, setCheck] = React.useState() 

    const questions = props.data.map(question => 
    <Question 
     key={question.question}  
     handleChange={checkAnswer} 
     question={question.question} 
     correctAnswer={question.correct_answer} 
     falseAnswer={question.incorrect_answers}          
     />)

function checkAnswer(playerAnswer, isCorrect) {
   const correctAnswer = correctAnswerArray.filter(item => item === playerAnswer)
   console.log(isCorrect)

   setCheck(prevState => {
       if(prevState === undefined) {
           return isCorrect
       } else {
           return [...prevState,isCorrect]
       }
   })
   
}

    



function countGoodAnswers() {
    console.log(check)
}

return(
        <main >
        <section className='wrap'>
        {questions}
        <button onClick={countGoodAnswers}className='checkAnswers'>Check answers</button>
        </section>
        </main>
    )
}