import { useState } from "react"
import '../styles/Question3.css'

export default function Question3({ moveOn }) {
    const [pochi, setPochi] = useState(null)
    const [error, setError] = useState(false)

    function onSubmit() {
        setError(false)

        if (pochi.trim().toString().toLowerCase() === 'retreat') {
            moveOn()
        } else {
            setError(true)
        }
    }

    return (
        <div className='pochi'>
            <div className="top-text">
                Question 3
            </div>
            <div className="question">
                Where was I when you got pochi?
            </div>
            <div>
                <input className="date-picker" onChange={(e) => { setPochi(e.target.value) }}></input>
            </div>
            <div className="bottom-button-container">
                <button className="bottom-button" onClick={onSubmit} >Submit</button>
            </div>
            {error ? <div className='error'>
                Error: wrong!!
            </div> : null}
        </div>
    )
}