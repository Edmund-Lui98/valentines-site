import { useState } from "react"
import '../styles/Question2.css'

export default function Question2({ moveOn }) {
    const [firstDay, setFirstDay] = useState(null)
    const [error, setError] = useState(false)

    function onSubmit() {
        setError(false)

        if (firstDay.toString() === '2022-09-26') {
            moveOn()
        } else {
            setError(true)
        }
    }

    return (
        <div className='first-day'>
            <div className="top-text">
                Question 2
            </div>
            <div className="question">
                what was the very first day that we saw each other?
            </div>
            <div>
                <input type="date" className="date-picker" onChange={(e) => { setFirstDay(e.target.value) }}></input>
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