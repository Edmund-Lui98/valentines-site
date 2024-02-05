import { useState } from "react"
import '../styles/intro.css'

export default function Intro({ moveOn }) {
    return (
        <div className='intro'>
            <div className="top-text">
                Welcome!
            </div>
            <div className="question">
                To reveal the mystery that awaits, you must correctly answer 5 questions. Are you ready?
            </div>
            <div>
                <button className="begin-button" onClick={moveOn} >Begin</button>
            </div>
        </div>
    )
}