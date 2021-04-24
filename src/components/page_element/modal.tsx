import React from 'react'
import '../../styles/Modal.css';

import { Spacer } from './spacer';
import { NewWordModal } from '../new_word_modal';

interface ModalProps {
    title: string;
    component: JSX.Element;
    ModalClosed: (isModalClosed: boolean) => void;
}

export function Modal({ title, component, ModalClosed }: ModalProps) {
    return <div className="Modal-overlay">
        <div className="Modal">
            <div className="Modal-title">{title}</div>
            <Spacer size='xl'/>
            <div>{<NewWordModal />}</div>
            <Spacer size='xl'/>
            <div className="Button-block">
                <button className="Button Button-empty" onClick={() => { ModalClosed(true) }}>Cancel</button>
                <button className="Button Button-fill" onClick={() => { ModalClosed(true) }}>Add</button>
            </div>
        </div>
    </div>
}