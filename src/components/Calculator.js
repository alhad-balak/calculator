import React from 'react'
import { useState } from 'react';
import './Calculator.css'

const Calculator = () => {
    const [inputData, setInputData] = useState('sdhcv');
    const [outputData, setOutputData] = useState(0);

    const handleClick=(event)=> {
        console.log(event);
    }

    function handleClear() {
        setInputData('');
        setOutputData(0);
    }
    return (
        <div className='calculator-body'>
            <div className="display">
                <div className="input">{inputData}</div>
                <div className="output">={outputData}</div>
            </div>
            <div className="numpad">
                <div className="row">
                    <button className="c num-btn" id='clear-btn'>C</button>
                    <button className="c num-btn opr0-btn">+/-</button>
                    <button className="c num-btn opr0-btn">%</button>
                    <button className="c num-btn opr-btn">/</button>
                </div>
                <div className="row">
                    <button className="c num-btn">7</button>
                    <button className="c num-btn">8</button>
                    <button className="c num-btn">9</button>
                    <button className="c num-btn opr-btn">x</button>
                </div>
                <div className="row">
                    <button className="c num-btn">4</button>
                    <button className="c num-btn">5</button>
                    <button className="c num-btn">6</button>
                    <button className="c num-btn opr-btn">-</button>
                </div>
                <div className="row">
                    <button className="c num-btn">1</button>
                    <button className="c num-btn">2</button>
                    <button className="c num-btn">3</button>
                    <button className="c num-btn opr-btn">+</button>
                </div>
                <div className="row">
                    <button className="c num-btn" id="zero-btn">0</button>
                    <button className="c num-btn opr-btn">.</button>
                    <button className="c num-btn" id='equ-btn'>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
