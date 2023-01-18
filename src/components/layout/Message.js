import { useState, useEffect } from 'react-router-dom'

import styles from './Message.module.css'

function Message({type, msg}) {

    const [visible, setVisible] = useState(false)

    return (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
    )
}

export default Message