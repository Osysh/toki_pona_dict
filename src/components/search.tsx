import React from 'react';
import '../styles/Search.css';

export function Search() {
    return <div className="Search">
        <form className="Search-input">
            <input className="Search" type="text" name="search" placeholder="Search.." />
        </form>
    </div>;
}