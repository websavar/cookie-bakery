import React from 'react';

import './index.scss';
import Roof from './Roof';
import Sign from './Sign';

const House = () => {

    return (
        <div className="d-flex flex-column col-12 m-auto mb-5">
            <div className="position-relative m-auto">
                <Roof />
                <Sign />
            </div>
            <div className="body m-auto">
            </div>
        </div>
    )
}

export default House;