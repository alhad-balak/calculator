import React from 'react'
import { useState } from 'react';
import './Calculator.css'

const Calculator = () => {
    const [inputData, setInputData] = useState('');
    const [outputData, setOutputData] = useState(0);
    const [prevNum, setPrevNum] = useState(0);
    const [currNum, setCurrNum] = useState(0);
    const [prevOpr, setPrevOpr] = useState(null);
    const [plusMinus, setPlusMinus] = useState('+');


    const handleNum = (event) => {
        // console.log(event.target.value);
        setInputData(inputData + event.target.value);
        let num;
        if (currNum === 0) {
            num = event.target.value;
            setCurrNum(Number(num))
            // setInputData(outputData);
        }
        else {
            num = String(currNum) + event.target.value;
            setCurrNum(Number(num));
        }

        // if (prevOpr === '+') {
        //     let cal = prevNum + currNum;
        //     setOutputData(cal);
        // }
        // if (prevOpr === '-') {
        //     let cal = prevNum - currNum;
        //     setOutputData(cal);
        // }
        // if (prevOpr === '*') {
        //     let cal = prevNum * currNum;
        //     setOutputData(cal);
        // }
        // if (prevOpr === '/') {
        //     let cal = prevNum / currNum;
        //     setOutputData(cal);
        // }
        // if (prevOpr === '%') {
        //     let cal = currNum / 100;
        //     setOutputData(cal);
        // }
        // console.log((currNum));
    }

    const handleOpr = (event) => {
        // console.log(prevNum);
        if (outputData !== 0) {
            setInputData(outputData + event.target.value);
            // setPrevNum(outputData)
        }
        else {
            setInputData(inputData + event.target.value);
            setPrevNum(currNum);
            setCurrNum(0);
        }
        setPrevOpr(event.target.value);
        if (prevOpr !== null && currNum === 0)
            setOutputData('invalid!');

    }

    const handlePlusMinus = (event) => {
        if (plusMinus === '+')
            setPlusMinus('-');
        else
            setPlusMinus('+');
        setCurrNum(0 - currNum);
        // console.log(event.target.value);
    }

    function handleClear(event) {
        setInputData('');
        setOutputData(0);
        setCurrNum(0);
        setPrevNum(0);
        // console.log(event.target.value);
    }
    const handleCalculate = (event) => {
        let cal;
        if (prevOpr === null)
            setOutputData(Number(inputData));
        if (prevOpr === '+') {
            cal = prevNum + currNum;
            setOutputData(cal);
        }
        if (prevOpr === '-') {
            cal = prevNum - currNum;
            setOutputData(cal);
        }
        if (prevOpr === '*') {
            cal = prevNum * currNum;
            setOutputData(cal);
        }
        if (prevOpr === '/') {
            cal = prevNum / currNum;
            setOutputData(cal);
        }
        if (prevOpr === '%') {
            cal = currNum / 100;
            setOutputData(cal);
        }
        setCurrNum(0)
        setPrevNum(cal);
        // setPrevNum(outputData);
        // setInputData('');
        setPrevOpr(null)
    }
    return (
        <div className='calculator-body'>
            <div className="display">
                <div className="input">{inputData}</div>
                <div className="output">{outputData ? outputData : ''}</div>
            </div>
            <div className="numpad">
                <div className="row">
                    <button className="c num-btn" id='clear-btn' value='clear' onClick={handleClear}>C</button>
                    <button className="c num-btn opr0-btn" value='+/-' onClick={handlePlusMinus}>+/-</button>
                    <button className="c num-btn opr0-btn" value='%' onClick={handleOpr}>%</button>
                    <button className="c num-btn opr-btn" value='/' onClick={handleOpr}>/</button>
                </div>
                <div className="row">
                    <button className="c num-btn" value='7' onClick={handleNum}>7</button>
                    <button className="c num-btn" value='8' onClick={handleNum}>8</button>
                    <button className="c num-btn" value='9' onClick={handleNum}>9</button>
                    <button className="c num-btn opr-btn" value='*' onClick={handleOpr}>x</button>
                </div>
                <div className="row">
                    <button className="c num-btn" value='4' onClick={handleNum}>4</button>
                    <button className="c num-btn" value='5' onClick={handleNum}>5</button>
                    <button className="c num-btn" value='6' onClick={handleNum}>6</button>
                    <button className="c num-btn opr-btn" value='-' onClick={handleOpr}>-</button>
                </div>
                <div className="row">
                    <button className="c num-btn" value='1' onClick={handleNum}>1</button>
                    <button className="c num-btn" value='2' onClick={handleNum}>2</button>
                    <button className="c num-btn" value='3' onClick={handleNum}>3</button>
                    <button className="c num-btn opr-btn" value='+' onClick={handleOpr}>+</button>
                </div>
                <div className="row">
                    <button className="c num-btn" id="zero-btn" value='0' onClick={handleNum}>0</button>
                    <button className="c num-btn opr-btn" value='.' onClick={handleNum}>.</button>
                    <button className="c num-btn" id='equ-btn' value='=' onClick={handleCalculate}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
