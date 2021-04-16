import React from 'react';

import gate from '../../../gate';
import './index.scss';

const Door = () => {

    const timeStamp = new Date();

    const doorClickHandler = async () => {
        var bodyFormData = new FormData();
        bodyFormData.set('time', timeStamp);

        await gate.postOrder(bodyFormData);
    }

    return (
        <div className="col-4 d-inline-flex align-self-end">
            <div
                onClick={doorClickHandler}
                className="door d-flex p-1"
            >
                <div className="knob align-self-center"></div>
            </div>
        </div>
    )
}

export default Door;