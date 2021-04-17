import React from 'react';
import './index.scss';

const Sun = (props) => {

    return (
        <div className={`sky d-flex flex-row-reverse w-75 m-5 ${props.sun === 'off' ? 'night-mode' : ''}`}>
            <div className="sun" onClick={props.click}></div>
            <div className="mate fixed-top"> </div>
        </div>
    )
}

export default Sun;