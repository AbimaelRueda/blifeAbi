import Card from '../Components/Card'

const data = [
    {
        nombre: "Citrate Mag",
        porcentaje: "30%",
        corazon: "22",
        descripcion: "240 Cápsulas | 800 Mg",
        precioActual: "$273.00",
        precioAnterior: "$134.00",
        imagen: [
            require('../Imagen/PRODUCTO.png'),
            require('../Imagen/2.png'),
            require('../Imagen/3.png')
        ],
        redesSociales: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            instagram: "https://instagram.com"
        }
    },
    {
        nombre: "Producto 2",
        porcentaje: "50%",
        corazon: "20",
        descripcion: "Descripción del producto 2",
        precioActual: "$120.00",
        precioAnterior: "$90.00",
        imagen: [
            require('../Imagen/3.png'),
            require('../Imagen/2.png'),
            require('../Imagen/PRODUCTO.png')
        ],
        redesSociales: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            instagram: "https://instagram.com"
        }
    },
    {
        nombre: "Producto 3",
        porcentaje: "10%",
        corazon: "15",
        descripcion: "Descripción del producto 3",
        precioActual: "$150.00",
        precioAnterior: "$110.00",
        imagen: [
            require('../Imagen/3.png'),
            require('../Imagen/2.png'),
            require('../Imagen/PRODUCTO.png')
        ],
        redesSociales: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            instagram: "https://instagram.com"
        }
    },
    {
        nombre: "Producto 4",
        porcentaje: "25%",
        corazon: "25",
        descripcion: "Descripción del producto 4",
        precioActual: "$200.00",
        precioAnterior: "$150.00",
        imagen: [
            require('../Imagen/2.png'),
            require('../Imagen/PRODUCTO.png'),
            require('../Imagen/3.png')
        ],
        redesSociales: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            instagram: "https://instagram.com"
        }
    }
];


const ExampleComponent = ({ onAddNotification }) => {
    return (
        <div className="card-container">
            {data.map((item, index) => {
                console.log(item)
                return <Card key={index} data={item} onAddNotification={onAddNotification} />
            })}
        </div>
    );
}

export default ExampleComponent;