import { useState } from "react"
import '../styles/Question4.css'

export default function Question4({ moveOn }) {
    const [address, setAddress] = useState('');
    const [town, setTown] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [error, setError] = useState(false)

    function onSubmit() {
        setError(false)

        if (address.trim().toString().toLowerCase() === '266 ashworth rd' && town.trim().toString().toLowerCase() === 'zephyr' && postalCode.trim().toString().toLowerCase() === 'l0e 1t0') {
            moveOn()
        } else {
            setError(true)
        }
    }

    return (
        <div className='maze'>
            <div className="top-text">
                Question 4
            </div>
            <div className="question">
                What was the address of the maze we went through during halloween?
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: '10vh' }}>
                <input className="addresses" placeholder="address" onChange={(e) => { setAddress(e.target.value) }}></input>
                <input className="addresses" placeholder="town" onChange={(e) => { setTown(e.target.value) }}></input>
                <input className="addresses" placeholder="postal code (XXX XXX)" onChange={(e) => { setPostalCode(e.target.value) }}></input>
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