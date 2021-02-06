import React from 'react';
import PopUpGasoline from '../pop-up-gasoline'
import PopUpAlcohol from '../pop-up-alcohol'
import './styles.css';

const Information = () => {

    let alcohol = 2.58;
    let gasoline = 4.51;
    

    return (
        <div className="info">
            <div className="visor">
                <p>Alcohol</p>
                <p>Gasoline</p>
            </div>
            <div className="values">
                <p id="alcohol">{alcohol}</p>
                <p id="gasoline">{gasoline}</p>
            </div>
            <div className="pop-up">
            <PopUpGasoline />
            <PopUpAlcohol />
            </div>
        </div>
    );
};

export default Information;