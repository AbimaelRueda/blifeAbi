import React from 'react';
import '../Style/nav.css';

const NotificationIcon = ({ count }) => {
    return (
        <li className="right3">
            <div className="image-container">
                <img src={require("../Imagen/COMPRA.png")} height="25" width="25" alt="" />
                {count > 0 && <div className="count-circle">{count}</div>}
            </div>
        </li>
    );
}

export default NotificationIcon;
