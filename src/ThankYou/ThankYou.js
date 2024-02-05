import { useEffect, useState } from "react"
import '../styles/ThankYou.css'

export default function ThankYou({ moveOn }) {
    const [password, setPassword] = useState(null)
    const [correct, setCorrect] = useState(false)

    useEffect(() => {
        if (password === "iloveedmund") {
            setCorrect(true)
        }
    }, [password])

    return (
        <div className='intro'>
            <div className="top-text">
                Congratulations!
            </div>
            <div className="question">
                Please text the code <b>"4383845"</b> to (647)-706-8738 claim your one time passcode
            </div>
            {correct ? null : <div className="password-container">
                Password: <input type="password" className="password" onChange={(e) => { setPassword(e.target.value) }} />
            </div>}
            {correct ?
                <div className="details">
                    Who: Me & You <br />
                    What: Going out for dinner<br />
                    When: Wednesday at 8pm<br />
                    Where: Piano Piano<br />
                    Why: To have a great time with my girlfriend<br />
                    How: Lets see if I can work from home hehe<br />
                </div> : null}
        </div>
    )
}