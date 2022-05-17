import React from 'react'
import '../styles/question.scss'

export default function Question(props) {
    const arrayOfAnswers = [...props.falseAnswer, props.correctAnswer]
    const correctAnswer = props.correctAnswer


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
  
 const [check, setCheck] = React.useState()

console.log(check)

function onChangeValue(event) {
    if(event.target.value === correctAnswer) {

        setCheck(true)
    } else {
        setCheck(false)
    }
}
    

    

   
    
    
    return (
        <article className='questionContainer'>
            <h1 className='questionContainer-question'>{question.replace(/&#039;/g, " '")}</h1>
            <div onChange={onChangeValue}
             className='answersForm'>
            <label className='answersForm_label'>
                <input
                    className='answersForm_label-radio'
                    type="radio"
                    value={answers[0]}
                    name={question}
                    onChange={(event) => props.handleChange(event, check)}
                />
                <span>{answers[0]}</span>
                </label>
            <label className='answersForm_label'>
                <input
                    className='answersForm_label-radio'
                    type="radio"
                    value={answers[1]}
                    name={question}
                    onChange={(event) => props.handleChange(event,check)}
                />
                <span>{answers[1]}</span>
                </label>
            <label className='answersForm_label'>
                <input
                    className='answersForm_label-radio'
                    type="radio"
                    value={answers[2]}
                    name={question}
                    onChange={(event) => props.handleChange(event,check)}
                />
                <span>{answers[2]}</span>
                </label>
            <label className='answersForm_label'>
                <input
                    className='answersForm_label-radio'
                    type="radio"
                    value={answers[3]}
                    name={question}
                    onChange={(event) => props.handleChange(event,check)}
                />
                <span>{answers[3]}</span>
                </label>
            </div>
        </article>
    )
}