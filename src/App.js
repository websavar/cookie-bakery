import React, { useState } from 'react';

import './App.css';
import Sun from './components/Sun';
import Bakery from './components/Bakery';

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
            <Bakery />
        </div>
    )
}

export default App;