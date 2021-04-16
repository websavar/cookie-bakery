import React from 'react';
import './index.scss';

const Sun = (props) => {

    return (
        <div className="d-flex flex-row-reverse w-75 m-5">
            <div onClick={props.click}
                className={`sun ${props.sun === 'on' ? '' : 'moon'}`}>
            </div>
            <div
                className={`mate fixed-top ${props.sun === 'on' ? 'sunny' : 'night'}`}>
            </div>
        </div>
    )
}

export default Sun;