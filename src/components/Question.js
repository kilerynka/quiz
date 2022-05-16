import React from 'react'
import '../styles/question.scss'

export default function Question(props) {
    const arrayOfAnswers = [...props.falseAnswer, props.correctAnswer]

    const [answers] = React.useState(shuffle(arrayOfAnswers))

      function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ]

        }
        return array;
    }
    
    const question = props.question.replace(/&quot;/g, `"`)
  
 const [check, setCheck] = React.useState({

 })


   
function onChangeValue(event) {
    console.log(event.target.value)
}
    
function test(event) {
console.log(event.target.checked)
}

    

   
    
    
    return (
        <article className='questionContainer'>
            <h1 className='questionContainer-question'>{question.replace(/&#039;/g, " '")}</h1>
            <div
             className='answersForm'
             onChange={onChangeValue}>
            <label className='answersForm_label'>
                <input
                    className='answersForm_label-radio'
                    type="radio"
                    value={answers[0]}
                    name="answer"
                />
                {answers[0]}
                </label>
            <label className='answersForm_label'>
                <input
                    className='answersForm_label-radio'
                    type="radio"
                    value={answers[1]}
                    name="answer"
                />
                {answers[1]}
                </label>
            <label className='answersForm_label'>
                <input
                    className='answersForm_label-radio'
                    type="radio"
                    value={answers[2]}
                    name="answer"
                />
                {answers[2]}
                </label>
            <label className='answersForm_label'>
                <input
                    className='answersForm_label-radio'
                    type="radio"
                    value={answers[3]}
                    name="answer"
                />
                {answers[3]}
                </label>
            </div>
        </article>
    )
}