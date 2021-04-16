import React, { useState } from 'react';
import './App.css';
import Sun from './components/Sun/index';
import House from './components/House';

const App = () => {

    const [sunState, setSunState] = useState('on')

    const sunHandler = () => {
        sunState === 'on' ? setSunState('off') : setSunState('on')
    }

    return (
        <div className="container">
            <Sun
                sun={sunState}
                click={sunHandler}
            />
            <House />
        </div>
    )
}

export default App;