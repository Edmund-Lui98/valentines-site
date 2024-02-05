import React, { useState } from 'react';
import './../styles/Question1.css'

export default function Question1({ moveOn }) {
    const [team, setTeam] = useState('')
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
            <div className="question">
                Who did the raptors play and what was the score of the game?
            </div>
            <div className="button-container">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className='headers'>Team</div>
                    <input className="left-button" value="Raptors" placeholder='Team' />
                    <input className="left-button" placeholder='team' onChange={(e) => { setTeam(e.target.value) }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className='headers'>Score</div>
                    <input className="right-button" type='number' placeholder='score' onChange={(e) => { setRapsScore(e.target.value) }} />
                    <input className="right-button" type='number' placeholder='score' onChange={(e) => { setBucksScore(e.target.value) }} />
                </div>
            </div>
            <div className="bottom-button-container">
                <button className="bottom-button" onClick={onSubmit}>Submit</button>
            </div>
            {error ? <div className='error'>
                Error: wrong!!
            </div> : null}
        </div>
    );
}