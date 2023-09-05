import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Home = () => {
    return (
        <div id='wholePage'>
            <div id='titleContainer'>
                <h1 id='title'>Cook&nbsp;Book</h1>
                <Link className='btn btn-wide ' to={'/Home'}>Continue to Full Site</Link>
            </div>
        </div>
    )
}

export default Home;