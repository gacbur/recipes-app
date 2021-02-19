import React from 'react'

import './Notification.css'

import { IoClose } from 'react-icons/io5'

type NotificationProps = {
    message?: string,
    active: boolean
}

const Notification: React.FC<NotificationProps> = ({ message, active }) => {
    return (
        <div className="notification">
            <button><IoClose /></button>
            <h4>Notification message bla bla balb ablaba</h4>
        </div>
    )
}

export default Notification
