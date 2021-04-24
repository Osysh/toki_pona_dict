import React, { useEffect, useState } from 'react'

interface SpacerProps {
    size: 's' | 'm' | 'l' | 'xl';
}

export function Spacer({ size }: SpacerProps) {
    let [spacerHeigth, setSpacerHeigth] = useState<number>(0);

    useEffect(() => {
        switch (size) {
            case 's':
                setSpacerHeigth(2);
                break;
            case 'm':
                setSpacerHeigth(5);
                break;
            case 'l':
                setSpacerHeigth(10);
                break;
            case 'xl':
                setSpacerHeigth(20);
                break;
        }
    }, [])

    return <div style={{ height:spacerHeigth }} />
}