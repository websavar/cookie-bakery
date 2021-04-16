import React from 'react';

import './index.scss';
import Roof from './Roof';
import Sign from './Sign';
import Window from './Window'

const Bakery = () => {

    return (
        <div className="d-flex flex-column col-12 m-auto mb-5">
            <div className="position-relative m-auto">
                <Roof />
                <Sign />
            </div>
            <div className="body d-flex m-auto">
                <div className="col-6 d-inline-flex justify-content-center pt-4">
                    <Window />
                </div>
                <div className="col-6 d-inline-flex pt-4">
                    <Window />
                </div>
            </div>
        </div>
    )
}

export default Bakery;