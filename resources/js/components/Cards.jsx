import React from 'react';
import { useNavigate } from 'react-router-dom';
import NextIcon from '../../Images/Icons/Next.png';

function Cards(props) {
    const navigate = useNavigate();
    const model = props.model;
    const year = props.year;
    const colour = props.colour;
    const type = props.type; // Cambio aquí
    const fuel = props.fuel;
    const disponibility = props.disp;
    const Image = props.image;
    const Km = props.Km;
    const version = props.version;
    const TM = props.TM;
    const liters = props.liters;
    const price = props.price;
    const carId = props.id;
    const Available = props.Available;


    const handleButtonClick = () => {
        console.log("id en cards" + carId);
        navigate('/ViewCar', {
            state: {
                model: model,
                year: year,
                colour: colour,
                type: type,
                fuel: fuel,
                Available: Available,
                image: Image,
                Km: Km,
                version: version,
                TM: TM,
                liters: liters,
                price: price,
                id: carId,
            
            }
        });
    };

    return (
        <>
            <div className="mt-5 shadow-md border border-gray-200 rounded-lg max-w-sm bg-white dark:border-gray-700 text-white mx-2">
                <img className="rounded-t-lg" src={'http://localhost/CarStore-Topicos/public/storage/' + Image} alt="" />
                <div className="p-5">
                    <a href="#">
                        <h5 className="text-black font-bold text-2xl tracking-tight">{model}</h5>
                    </a>
                    {/* <h2>precio</h2> */}

                    <p className="font-normal text-black mb-3 ">
                        {year} - {Km} km - {liters} lts - Precio: {price} $
                    </p>
                    {/* <h1 className='m-3 font-bold text-xl'>$ precio: </h1> */}
                    {/* <p className='m-3'>desde $3250 /Mes</p> */}
                    <button onClick={handleButtonClick} className="mt-5 text-black font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex border-solid border-2">
                        Mas informacion
                        <img src={NextIcon} className="w-6 h-6" alt="" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Cards;
