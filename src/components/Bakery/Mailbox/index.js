import React, { useState } from 'react';
import './index.scss';

const Mailbox = () => {

    const [mailState, setMailState] = useState('up');

    const mailboxClick = () => {
        if (mailState === 'up') setMailState('down');
    }

    return (
        <div
            onClick={mailboxClick}
            className={`mailbox mt-5 ${mailState === 'down' ? 'mailbox-fall' : ''}`}
        >
            <div className="mailbox-door w-75"></div>
            Mailbox
        </div>
    )
}

export default Mailbox;