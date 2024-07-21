import React, { useState } from 'react';
import NewsData from './NewsData';
import './homepage.css'
import Nav from '../Pages/Nav.jsx';


const Homepage = () => {
    const [q, setQ] = useState('bitcoin');
    const [input_value, setInputValue] = useState('');

    return (
        <div>
            <header className='header'>
                <img src="https://img.icons8.com/?size=50&id=j2ZbUoOJa9hk&format=png" className='logo' alt="" />
                <h1>QuickRead</h1>
                </header>
           <div className="nav">
            <nav><Nav/></nav>
            <input  className='search'
                type="text" placeholder='search....'
                onChange={(e) => setInputValue(e.target.value)} 
            />
             <button 
                onClick={() => setQ(input_value)}
            >
                Search
            </button>
           </div>
            
            <br />
           
            <NewsData message={q} query={q} />
        </div>
    );
};

export default Homepage;