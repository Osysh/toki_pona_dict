import React from 'react'
import '../../styles/Modal.css';

import { Spacer } from './spacer';

interface ModalProps {
    title: string;
    component: JSX.Element;
}

export function Modal({ title, component }: ModalProps) {
    return <div className="Modal-overlay">
        <div className="Modal">
            <div className="Modal-title">{title}</div>
            <Spacer size='xl'/>
            <div>{component}</div>
            <Spacer size='xl'/>
            <div className="Button-block">
                <button className="Button Button-empty">Cancel</button>
                <button className="Button Button-fill">Add</button>
            </div>
        </div>
    </div>
}