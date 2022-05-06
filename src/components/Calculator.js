import React from 'react'
import { useState } from 'react';
import './Calculator.css'

const Calculator = () => {
    const [inputData, setInputData] = useState('');
    const [outputData, setOutputData] = useState(0);

    const handleClick = (event) => {
        console.log(event);
    }
    return (
        <>
            <div className="display">
                <div className="input">{inputData}</div>
                <div className="output">={outputData}</div>
            </div>
            <div className="numpad">
                <div className="row">
                    <div className="c num-btn" onClick={handleClick("aggh")}>C</div>
                    <div className="c num-btn">+/-</div>
                    <div className="c num-btn">%</div>
                    <div className="c num-btn">/</div>
                </div>
                <div className="row">
                    <div className="c num-btn">7</div>
                    <div className="c num-btn">8</div>
                    <div className="c num-btn">9</div>
                    <div className="c num-btn">x</div>
                </div>
                <div className="row">
                    <div className="c num-btn">4</div>
                    <div className="c num-btn">5</div>
                    <div className="c num-btn">6</div>
                    <div className="c num-btn">-</div>
                </div>
                <div className="row">
                    <div className="c num-btn">1</div>
                    <div className="c num-btn">2</div>
                    <div className="c num-btn">3</div>
                    <div className="c num-btn">+</div>
                </div>
                <div className="row">
                    <div className="c num-btn" id="zero-btn">0</div>
                    <div className="c num-btn">.</div>
                    <div className="c num-btn">=</div>
                </div>
            </div>
        </>
    )
}

export default Calculator
