import { useState } from "react"
import '../styles/Question5.css'

export default function Question5({ moveOn }) {
    const [dragonBoat, setDragonBoat] = useState(null)
    const [error, setError] = useState(false)

    const answers = ["dragon boat", "dragonboat"]

    function onSubmit() {
        setError(false)

        if (answers.indexOf(dragonBoat.trim().toString().toLowerCase()) >= 0) {
            moveOn()
        } else {
            setError(true)
        }
    }

    return (
        <div className='opera'>
            <div className="top-text">
                Question 3
            </div>
            <div className="question">
                During the summer, we went to watch an opera downtown. What was the opera about?
            </div>
            <div>
                <input className="date-picker" onChange={(e) => { setDragonBoat(e.target.value) }}></input>
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