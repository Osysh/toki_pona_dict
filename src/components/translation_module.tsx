import React, { useState } from 'react'
// import '../styles/Modal.css';

interface TypeOptions {
    value: string;
    text: string;
}

export interface TranslationUnit {
    type: string;
    translation: string;
}

const typeOptions : TypeOptions[] = [
    { value: '', text: 'Select a type' },
    { value: 'verb', text: 'Verb' },
    { value: 'noun', text: 'Noun' },
    { value: 'mod', text: 'Modifier' },
    { value: 'sep', text: 'Separator' },
    { value: 'interj', text: 'Interjection' },
    { value: 'prep', text: 'Preposition' },
    { value: 'conj', text: 'Conjounction' },
    { value: 'kama', text: 'Kama' },
    { value: 'cont', text: 'Context' },
]

interface TranslationModuleProps {
    validTranslation: (translationUnit: TranslationUnit) => void;
}

export function TranslationModule({ validTranslation }: TranslationModuleProps) {
    const [inputText, setInputText] = useState<string>('');
    const [typeValue, setTypeValue] = useState<string>('');

    const onInputStateChange = (e: any) => {
        setInputText(e.target.value);
    }

    const onSelectChange = (e: any) => {
        setTypeValue(e.target.value);
    }

    const sendTranslation = () => {
        if (inputText !== '' && typeValue !== '') {
            const translationUnit: TranslationUnit = { type: typeValue, translation: inputText };
            validTranslation(translationUnit);
        }
    };

    return <div style={{ display: 'flex' }}>
        <form action="#" onSubmit={() => { sendTranslation() }}>
            <select name="typeChoice" onChange={e => { onSelectChange(e) }}>
                {typeOptions.map(type => (
                    <option value={type.value} key={type.value}>{type.text}</option>
                ))}
            </select>
            <input type="text" onChange={e => { onInputStateChange(e) }} />  
            <button>Valid</button>
        </form>
    </div>
}