import React, { useState } from "react"
import NextIcon from "../../Images/Icons/Next.png"
import ViewCar from "../layout/AutosAdmon/ViewCar";


function Cards(props) {
    const [showCarInfo, setShowCarInfo] = useState(false);
    const model = props.model;
    const year = props.year;
    const color = props.color;
    const type = props.type; // Cambio aquí
    const fuel = props.fuel;
    const disponibility = props.disp;
    const Image = props.image;

    if(showCarInfo){
        return <ViewCar
        model={model}
        year={year}
        color={color}
        type={type}
        fuel={fuel}
        disponibility={disponibility}
        image={Image}
        setShowCarInfo={setShowCarInfo}
        />
    }

    return (
        <div className="shadow-md border border-gray-200 rounded-lg max-w-sm bg-black dark:border-gray-700 text-white mx-auto">
                <img className="rounded-t-lg" src={'http://localhost/CarStore-Topicos/public/storage/'+Image} alt=""/>
            <div className="p-5">
                <a href="#">
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{model}</h5>
                </a>
                <p className="font-normal text-white mb-3 dark:text-gray-400">
                    Año: {year}<br/>
                    Color: {color} <br/>
                    Tipo de carroceria: {type}<br/>
                    Tipo de combustible: {fuel}<br/>
                    Disponible:{disponibility}
                </p>
                <a onClick={() => setShowCarInfo(true)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Mas informacion
                    <img src={NextIcon} className="w-6 h-6" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Cards;
