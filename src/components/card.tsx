import React from 'react';
import '../styles/Cardbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export function Card(){
    return (
        <div className="Card">
            <div className="Card-title" style={{ display: 'flex', alignItems: 'baseline' }}>
                <p style={{ fontWeight: 600, fontSize: 20 }}>Kulupu</p>
                <p style={{ fontStyle: 'italic', fontSize: 15, marginLeft: 10 }}>interj.</p>
            </div>
            <div className="Card-translation" style={{ marginLeft: 10, paddingLeft:10, borderLeft:'1px solid green' }}>
                <div style={{ display: 'flex' }}>
                    <p>v.</p>
                    <p>to gather</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <p>v.</p>
                    <p>to gather</p>
                </div>
            </div>
            <div className="Card-score" style={{ margin: '20px 0', display: 'flex', justifyContent:'space-evenly' }}>
                <FontAwesomeIcon icon={faThumbsUp} />
                <span style={{ fontWeight: 500 }}>50%</span>
                <FontAwesomeIcon icon={faThumbsDown} />
            </div>
        </div>
    );
}