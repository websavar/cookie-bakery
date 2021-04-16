import React from 'react';

import './index.scss';
import Roof from './Roof';
import Sign from './Sign';
import Window from './Window'
import Door from './Door';

const Bakery = () => {

    return (
        <div className="d-flex flex-column col-12 m-auto mb-5">
            <div className="position-relative m-auto">
                <Roof />
                <Sign />
            </div>
            <div className="body d-flex m-auto pt-4">
                <div className="col-4 d-inline-flex justify-content-end">
                    <Window />
                </div>
                <Door />
                <div className="col-4">
                    <Window />
                </div>
            </div>
        </div>
    )
}

export default Bakery;