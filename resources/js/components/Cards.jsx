import React from "react";
import Image from '../../Images/altima.jpeg'
// import Image from "storage\app\public\Images\R.png"

function Cards(props) {
    const model = props.model;
    const year = props.year;
    const color = props.color;
    const type = props.type; // Cambio aquí
    const fuel = props.fuel;
    const disponibility = props.disp;
    // const Image = props.Image;

    return (
        <div className="shadow-md border border-gray-200 rounded-lg max-w-sm bg-black dark:border-gray-700 text-white">
            <a href="#">
                <img className="rounded-t-lg" src={Image} alt=""/>
            </a>
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
                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Mas informacion
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                </a>
            </div>
        </div>
    )
}

export default Cards;
