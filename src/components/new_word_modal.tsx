import React, { useEffect, useState } from 'react'
import '../styles/Modal.css';

import { TranslationModule, TranslationUnit } from './translation_module';

interface WordDocument {
    word: string;
    translation: {
        n: string;
        mod: string;
        sep: string;
        vt: string;
        vi: string;
        interj: string;
        prep: string;
        conj: string;
        kama: string;
        cont: string;
        oth: string;
    };
}

export function NewWordModal() {
    const [translationList, setTranslationList] = useState<TranslationUnit[]>([]);
    const [tokiPonaName, setTokiPonaName] = useState<string>('');

    useEffect(() => {
        if (translationList.length !== 0) {
            console.log(translationList);
        }
    }, [translationList]);

    const tokiPonaInput = (e: any) => {
        setTokiPonaName(e.target.value);
    };

    return <div>
        <div className="Modal-component">
            <p className="Modal-component-title">Toki pona word</p>
            <form>
                <input onChange={e => { tokiPonaInput(e) }} type="text" />
            </form>
        </div>
        <div className="Modal-component">
            <p className="Modal-component-title">Translation</p>
            {translationList.map(translation => (
                <div style={{ display: 'flex' }} key={`${translation.type},${translation.translation}`}>
                    <div>{translation.type}.</div>
                    <div>{translation.translation}</div>
                </div>
            ))}
            <TranslationModule validTranslation={e => {
                setTranslationList([...translationList, e]);
            }} />
        </div>
    </div>
}