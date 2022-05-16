import React from 'react'
import '../styles/welcomePage.scss'
import intro from "../assets/intro-page.svg"

export default function WelcomePage(props) {
    return (
        <header className='welcome'>
            <h1 className='welcome-title'>Quiz</h1>
            <p className='welcome-text'>Test your knowledge</p>
            <button onClick={props.onClick} className='welcome-button'>Start quiz</button>
        </header>
    )
}