import { useState, useEffect } from 'react';
import "../components/Slider.css";


const Slider = ({ defaultValue, text }) => {
    let slider = document.getElementById("myRange");
    let output = document.getElementById("value");



    const setSliderAttributes = () => {

        slider = document.getElementById("myRange");
        output = document.getElementById("value");



        output.innerHTML = slider.value;

    }

    const handleChange = (event) => {
        setSliderAttributes();
        let x = slider.value;
        let gradientColor = `255,0,0`;
        if (x >= 25 && x <= 50) gradientColor = '215,140,0';
        if (x >= 50 && x <= 75) gradientColor = '255,165,0';
        if (x >= 75 && x < 100) gradientColor = '255,215,0';
        if (x === 100) gradientColor = '166,214,8';
        var color = `linear-gradient(90deg,rgb(${gradientColor})` + x + '%, rgb(214,214,214)' + x + '%)';
        slider.style.background = color;

    }

    return (
        <div id='color-test'>
            <input type="range" id="myRange" className="slider" min="0" max="100" defaultValue={defaultValue} step="1" onChange={handleChange}></input>
            <p>Value: <span id="value"></span></p>
            <p>{text}</p>            
        </div>
    );

}



export default Slider;