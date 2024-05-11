import React from 'react';
import '../Style/nav.css';

export default function Body() {
    return (
        <div style={{ position: 'relative', width: '100%', height: 'auto', maxWidth: '100vw', marginBottom: '30px'}}>
                <img src={require('../Imagen/PORTADA.png')} alt="" style={{ width: '100%', height: 'auto' }} />
                <img src={require('../Imagen/DESCUENTO.png')} alt="" style={{ position: 'absolute', top: '10%', left: '60%' }} height="auto" width="30%" />
        </div>
    )
}
