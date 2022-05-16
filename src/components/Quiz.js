import React from 'react'
import '../styles/quiz.scss'
import Question from './Question'

export default function Quiz(props) {
const questions = props.data.map(question => <Question key={question.question} question={question.question} correctAnswer={question.correct_answer} falseAnswer={question.incorrect_answers} />)
    return(
        <main >
        <section className='wrap'>
        {questions}
        </section>
        </main>
    )
}