import React, { useEffect } from "react";
import '../Style/card.css';

//import

const StarRating = ({ rating, onMouseOver }) => {
    return (
        <div style={{ fontSize: '20px' }}>
            {[...Array(5)].map((star, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={index}
                        onMouseOver={() => onMouseOver(starValue)}
                        style={{
                            cursor: 'pointer',
                            color: starValue <= rating ? '#EDA836' : 'gray'
                        }}
                    >
                        {starValue <= rating ? '★' : '☆'}
                    </span>
                );
            })}
        </div>
    );
};

const Card = ({ data, onAddNotification }) => {

    const { nombre, porcentaje, corazon, imagen, descripcion, precioActual, precioAnterior, redesSociales } = data;
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [stars, setStars] = React.useState(0);
    const [autoplay, setAutoplay] = React.useState(true);

    const handleMouseOver = (rating) => {
        setStars(rating);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNextImage();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentImageIndex]);

    const handleAddClick = () => {
        onAddNotification();
    };

    const handleNextImage = () => {
        const nextIndex = (currentImageIndex + 1) % imagen.length;
        setCurrentImageIndex(nextIndex);
    };

    const handleCircleClick = (index) => {
        setCurrentImageIndex(index);
        setAutoplay(false);
    };

    return (
        <div className="card" style={{ position: 'relative' }}>
            <div className="cards" style={{ margin: '0 auto', position: 'relative', zIndex: '1', display: 'flex', alignItems: 'flex-start' }}>
                <img src={imagen[currentImageIndex]} alt="" style={{ width: '100%', height: 'auto' }} />
                <div className="overlay" style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'rgba(255,255,255,0.8)', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>

                    <div className="oval-inner" style={{ width: '100%', height: '100%', borderRadius: '20px', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #808080' }}>
                        <img src={require('../Imagen/corazon.png')} alt="" style={{ width: '20px', height: 'auto', padding: '5px', }} />
                        <p style={{ margin: '0', marginLeft: '15px' }}><b>{corazon}</b></p>
                    </div>
                    <br />
                    <div className="oval-inner" style={{ width: '100%', height: '100%', borderRadius: '20px', backgroundColor: '#FF8E8E', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #FF8E8E' }}>
                        <p style={{ margin: '0', marginLeft: '15px' }}><b>{porcentaje}</b></p>
                    </div>

                </div>
            </div>
            <div className="circle-container">
                {imagen.map((imagen, index) => (
                    <div
                        key={index}
                        className={`circle ${currentImageIndex === index ? 'active' : ''}`}
                        onClick={() => handleCircleClick(index)}
                    />
                ))}
            </div>
            <br />
            <br />
            <div className="letter" style={{ backgroundColor: '#FFFFFF', fontFamily: 'Kumbh Sans', fontWeight: 400, lineHeight: '12.4px', letterSpacing: '-0.02em', textAlign: 'center', marginTop: '-10px', position: 'relative', zIndex: '2' }}>
                <div style={{ float: 'left', textAlign: 'left', marginLeft: '10px' }}>
                    <p style={{ margin: '0', fontSize: '16px', width: '87px', height: '20px' }}><b>{nombre}</b></p>
                    <br />
                    <p style={{ margin: '0', fontSize: '10px', width: '100px', height: '12px' }}>{descripcion}</p>
                </div>
                <div style={{ float: 'right', textAlign: 'right', marginRight: '10px' }}>
                    <p style={{ margin: '0', fontSize: '16px', width: '56px', height: '20px' }}><b>{precioActual}</b></p>
                    <br />
                    <p style={{ margin: '0', fontSize: '10px', textDecoration: 'line-through' }}><b>{precioAnterior}</b></p>
                </div>
                <div style={{ clear: 'both' }}></div>
                <br />
                <div style={{ float: 'left', textAlign: 'left', marginLeft: '10px' }}>
                    <StarRating rating={stars} onMouseOver={handleMouseOver} />
                    <br />
                </div>
            </div>
            <div className="add" style={{ backgroundColor: '#E1E1E1', position: 'relative', zIndex: '1', marginTop: '-30px' }}>
                <br />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ marginLeft: '10px' }}>
                        <br />
                        <p style={{ textAlign: 'left', margin: '0', fontFamily: 'Kumbh Sans', fontSize: '10px', width: '55px', height: '12px' }}>COMPARTE</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '55px' }}>
                            <a href={redesSociales.facebook} target="_blank" rel="noopener noreferrer">
                                <img src={require('../Imagen/facebook.png')} alt="" style={{ width: 'auto', height: '10px' }} />
                            </a>
                            <a href={redesSociales.twitter} target="_blank" rel="noopener noreferrer">
                                <img src={require('../Imagen/twitter.png')} alt="" style={{ width: 'auto', height: '10px' }} />
                            </a>
                            <a href={redesSociales.instagram} target="_blank" rel="noopener noreferrer">
                                <img src={require('../Imagen/instagram.png')} alt="" style={{ width: 'auto', height: '10px' }} />
                            </a>
                        </div>
                    </div>
                    <div style={{ marginLeft: 'auto', marginRight: '10px' }}>
                        <br />
                        <button onClick={handleAddClick} style={{ backgroundColor: '#ffffff', width: '90px', height: '31px', borderRadius: '20px 20px 20px 20px', border: '1px solid #EDA836', transition: 'background-color 0.3s' }}>
                            Agregar
                        </button>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );

}

export default Card;


// import React, { useState } from "react";
// import '../Style/card.css'

// const StarRating = ({ rating }) => {
//     const [stars, setStars] = useState(rating);

//     const handleMouseOver = (index) => {
//         setStars(index + 1);
//     };

//     const handleMouseLeave = () => {
//         setStars(rating);
//     };

//     return (
//         <div
//             style={{ fontSize: '20px' }}
//             onMouseLeave={handleMouseLeave}
//         >
//             {[...Array(5)].map((star, index) => {
//                 const starValue = index + 1;
//                 return (
//                     <span
//                         key={index}
//                         onMouseOver={() => handleMouseOver(index)}
//                         style={{
//                             cursor: 'pointer',
//                             color: starValue <= stars ? '#EDA836' : 'gray'
//                         }}
//                     >
//                         {starValue <= stars ? '★' : '☆'}
//                     </span>
//                 );
//             })}
//         </div>
//     );
// };


// export default function Card() {
//     return (
//         <div className="card" style={{ position: 'relative' }}>
//         <div className="cards" style={{ margin: '0 auto', position: 'relative', zIndex: '1' }}>
//             <img src={require('../Imagen/PRODUCTO.png')} alt="" style={{ width: '100%', height: 'auto' }} />
//         </div>
//         <br />
//         <br />
//         <div className="letter" style={{ backgroundColor: '#FFFFFF', fontFamily: 'Kumbh Sans', fontWeight: 400, lineHeight: '12.4px', letterSpacing: '-0.02em', textAlign: 'center', marginTop: '-10px', position: 'relative', zIndex: '2' }}>
//             <div style={{ float: 'left', textAlign: 'left', marginLeft: '10px' }}>
//                 <p style={{ margin: '0', fontSize: '16px', width: '87px', height: '20px' }}><b>Citrate Mag</b></p>
//                 <br />
//                 <p style={{ margin: '0', fontSize: '10px', width: '100px', height: '12px' }}>240 Cápsulas | 800 Mg</p>
//             </div>
//             <div style={{ float: 'right', textAlign: 'right', marginRight: '10px' }}>
//                 <p style={{ margin: '0', fontSize: '16px', width: '56px', height: '20px' }}><b>$273.00</b></p>
//                 <br />
//                 <p style={{ margin: '0', fontSize: '10px', textDecoration: 'line-through' }}><b>$134.00</b></p>
//             </div>
//             <div style={{ clear: 'both' }}></div>
//             <br />
//             <div style={{ float: 'left', textAlign: 'left', marginLeft: '10px' }}>
//                 <StarRating rating={4.5} />
//             </div>
//         </div>
//         <div className="add" style={{ backgroundColor: '#E1E1E1', position: 'relative', zIndex: '1', marginTop: '-30px' }}>
//             <br />
//             <br />
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <div style={{ marginLeft: '10px' }}>
//                     <br />
//                     <p style={{ textAlign: 'left', margin: '0', fontFamily: 'Kumbh Sans', fontSize: '10px', width: '55px', height: '12px' }}>COMPARTE</p>
//                     <div style={{ display: 'flex', justifyContent: 'space-between', width: '55px' }}>
//                         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                             <img src={require('../Imagen/facebook.png')} alt="" style={{ width: 'auto', height: '10px' }} />
//                         </a>
//                         <a href="https://x.com" target="_blank" rel="noopener noreferrer">
//                             <img src={require('../Imagen/twitter.png')} alt="" style={{ width: 'auto', height: '10px' }} />
//                         </a>
//                         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                             <img src={require('../Imagen/instagram.png')} alt="" style={{ width: 'auto', height: '10px' }} />
//                         </a>
//                     </div>
//                 </div>
//                 <div style={{ marginLeft: 'auto', marginRight: '10px' }}>
//                     <br />
//                     <button style={{ backgroundColor: '#ffffff', width: '90px', height: '31px', borderRadius: '20px 20px 20px 20px', border: '1px solid #EDA836', transition: 'background-color 0.3s' }}>
//                         Agregar
//                     </button>
//                 </div>
//             </div>
//             <br />
//         </div>
//     </div>
//     )
// }
