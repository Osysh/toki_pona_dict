import React from 'react';
import { Link } from 'react-router-dom';

export function Footer(){
    return(
        <nav style={{ height: '100%', width: 'calc(100% - 80px)', display: 'flex', listStyleType: 'none', padding: 0, marginTop: -1, justifyContent: 'space-evenly', alignItems: 'center', borderTop: '1px solid blue' }}>
            <Link to='/howto'><li>How to use</li></Link>
            <Link to='/about'><li>About</li></Link>
            <a href='https://tokipona.org'><li>Toki pona</li></a>
        </nav>
    );
}