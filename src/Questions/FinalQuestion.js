
import React, { useState } from 'react';
import './../styles/FinalQuestion.css'

export default function FinalQuestion({ moveOn }) {
    const [clicks, setClicks] = useState(0)
    const [position, setPosition] = useState({ x: window.innerWidth * 0.38, y: window.innerHeight * 0.75 });

    const moveButton = () => {
        setClicks(clicks + 1)
        const newX = Math.random() * (window.innerWidth - 100);
        const newY = Math.random() * (window.innerHeight - 100);
        setPosition({ x: newX, y: newY });
    };

    var ogStyle = { display: 'flex', justifyContent: 'center', paddingTop: '70vh', paddingLeft: '2%' };
    var afterFirstClick = { position: 'absolute', left: position.x + 'px', top: position.y + 'px' }
    return (
        <div className='will-you-be-my-valentine'>
            <div style={clicks === 0 ? ogStyle : afterFirstClick}>
                <button className='yes-button' onClick={moveOn}>
                    Yes <br />
                    <div style={{ fontSize: '12px' }}>(i dare you to click no)</div>
                </button>
                <button className='no-button' onClick={moveButton}>
                    No
                </button>
            </div>
        </div>
    );
};