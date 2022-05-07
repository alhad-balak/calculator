import React from 'react'
import './Background.css'
import DotPic from './dot-pic.png'
const Background = () => {
    return (
        <div>
            <div id="rec1" />
            <div id="rec2" />
            <div id="cir1" />
            <div id="cir2" />
            <img src={DotPic} alt="" id="img1" />
            <img src={DotPic} alt="" id="img2" />
        </div>
    )
}

export default Background