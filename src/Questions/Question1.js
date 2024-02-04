import React, { useState } from 'react';
import './../styles/Question1.css'

export default function Question1({ moveOn }) {
    const [team, setTeam] = useState('Bucks')
    const [rapsScore, setRapsScore] = useState(null)
    const [bucksScore, setBucksScore] = useState(null)
    const [error, setError] = useState(false)

    const answers = ["bucks", "milwaukee bucks", "milwaukee"]

    function onSubmit() {
        setError(false)

        if (answers.indexOf(team.trim().toLowerCase()) >= 0 && rapsScore === '130' && bucksScore === '111') {
            moveOn()
        } else {
            setError(true)
        }
    }

    return (
        <div className='raps-court'>
            <div className="top-text">
                Question 1
            </div>
            <div className="top-text">
                Who did the raptors play and what was the score of the game?
            </div>
            <div className="button-container">
                <input className="left-button" type='number' onChange={(e) => { setRapsScore(e.target.value) }} />
                <input className="right-button" type='number' onChange={(e) => { setBucksScore(e.target.value) }} />
            </div>
            <div className="bottom-button-container">
                <button className="bottom-button" onClick={onSubmit}>Submit</button>
            </div>
            {error ? <div>
                Error: wrong!!
            </div> : null}
        </div>
    );
}