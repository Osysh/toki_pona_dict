import React from 'react';
import '../styles/Cardbar.css';
// import '../App.css'
import { Card } from './card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export function CardBar(){
    return(
        <div className="Cardbar-component">
            <div className="Cardbar-arrow Arrow-up">
                <FontAwesomeIcon icon={faChevronUp} />
            </div>
            <div className="Cards-block">
                <Card />
                <Card />
            </div>
            <div className="Cardbar-arrow Arrow-down">
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </div>
    );
}