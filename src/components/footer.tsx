import React from 'react';
import { Link } from 'react-router-dom';

export function Footer(){
    return(
        <nav style={{ height: '100%', width: 'calc(100% - 80px)', display: 'flex', listStyleType: 'none', padding: 0, marginTop: -1, justifyContent: 'space-evenly', alignItems: 'center', borderTop: '1px solid #484848' }}>
            <Link style={{ textDecoration: 'none' }} to='/howto'><li>How to use</li></Link>
            <Link style={{ textDecoration: 'none' }} to='/about'><li>About</li></Link>
            <a style={{ textDecoration: 'none' }} href='https://tokipona.org'><li>Toki pona</li></a>
        </nav>
    );
}