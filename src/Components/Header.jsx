import React, { useState } from 'react';
import '../Style/nav.css';
import Body from '../Components/Body';
import BodyProductos from '../Components/BodyProductos';
import BodyNosotros from '../Components/BodyNosotros';
import ExampleComponent from '../Components/ExampleComponent';
import NotificationIcon from '../Components/NofiticationIcon';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('Promociones');
    const [notificationCount, setNotificationCount] = useState(0);

    const handlePromocionesClick = () => {
        setCurrentPage('Promociones');
    };

    const handleProductosClick = () => {
        setCurrentPage('Productos');
    };

    const handleNosotrosClick = () => {
        setCurrentPage('Nosotros');
    };

    const handleAddNotification = () => {
        setNotificationCount(notificationCount + 1);
    };

    return (
        <header>
            <nav>
                <ul className="nav">
                    <li className="left"><img src={require('../Imagen/blifelogo 1.png')} alt="" height="50" width="165.33" /></li>
                    <li><a href="#Productos" onClick={handleProductosClick}><b>Productos</b> </a></li>
                    <li><a href="#Promociones" onClick={handlePromocionesClick}><b>Promociones</b></a></li>
                    <li><a href="#Nosotros" onClick={handleNosotrosClick}><b>Nosotros</b></a></li>
                        <NotificationIcon count={notificationCount} />
                    <li className="right2"><img src={require("../Imagen/USUARIO.png")} height="25" width="25" alt="" /></li>
                    <li className="right1"><img src={require("../Imagen/BUSQUEDA.png")} height="25" width="25" alt="" /></li>
                </ul>
            </nav>
            <br />
            {currentPage === 'Promociones' && <div>
                    <Body/>
                    <ExampleComponent onAddNotification={handleAddNotification} />
                </div>}
            {currentPage === 'Productos' && <BodyProductos />}
            {currentPage === 'Nosotros' && <BodyNosotros />}
        </header>
    );
}
