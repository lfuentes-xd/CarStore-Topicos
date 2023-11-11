import React from 'react';
import { useNavigate } from 'react-router-dom';
import NextIcon from '../../Images/Icons/Next.png';

function Cards(props) {
    const navigate = useNavigate();
    const model = props.model;
    const year = props.year;
    const color = props.color;
    const type = props.type; // Cambio aquí
    const fuel = props.fuel;
    const disponibility = props.disp;
    const Image = props.image;

    const handleButtonClick = () => {
        navigate('/ViewCar', {
            state: {
                model: model,
                year: year,
                color: color,
                type: type,
                fuel: fuel,
                disponibility: disponibility,
                image: Image
            }
        });
    };

    return (
        <div className="mt-5 shadow-md border border-gray-200 rounded-lg max-w-sm bg-white dark:border-gray-700 text-white mx-auto">
            <img className="rounded-t-lg" src={'http://localhost/CarStore-Topicos/public/storage/'+Image} alt=""/>
            <div className="p-5">
                <a href="#">
                    <h5 className="text-black font-bold text-2xl tracking-tight">{model}</h5>
                </a>
                <p className="font-normal text-black mb-3 ">
                    Año: {year}<br/>
                    Color: {color} <br/>
                    Tipo de carroceria: {type}<br/>
                    Tipo de combustible: {fuel}<br/>
                    {/* Disponible:{disponibility} */}
                </p>
                <button onClick={handleButtonClick} className="text-black font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex border-solid border-2">
                    Mas informacion
                    <img src={NextIcon} className="w-6 h-6" alt="" />
                </button>
            </div>
        </div>
    );
}

export default Cards;
