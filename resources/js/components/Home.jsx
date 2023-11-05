import image from '../../Images/altima.jpeg';

import axios from "axios";

import React, { useState, useEffect } from "react";

function Home() {
    


    return (
        <>
            <div className="flex my-10 h-screen  rounded-lg ">
                <div className="w-1/2 h-full lg:block flex ">
                    <img src={image} alt="Car Image" className="w-full h-full object-cover transition-opacity duration-500" />
                </div>

                <div className="w-full lg:w-1/2 ">
                    <h1 className="text-2xl font-semibold ml-5">Nuestra Pasión por los Autos</h1>
                    <p className='mx-5 my-10 text-justify'>
                        En CarStore México, los autos son nuestra pasión. Cada vehículo que llega a nuestra sala de exhibición es seleccionado cuidadosamente para brindarte solo lo mejor en automóviles de alta gama. Nuestro compromiso con la excelencia se refleja en cada detalle, desde el diseño de vanguardia hasta las características de última generación.
                    </p>
                    
                </div>
            </div>

            <div className="flex my-10  rounded-lg ">
                <div className="mx-2 bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        {/* <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""> */}
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Servicio Excepcional</h5>
                        </a>
                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">Nuestro compromiso no termina en la venta. Nuestro equipo de expertos está aquí para brindarte un servicio excepcional en cada paso del camino. Desde la selección de tu vehículo ideal hasta el mantenimiento a largo plazo, estamos a tu disposición.</p>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Ver más
                            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillrule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                </svg>
                        </a>
                    </div>
                </div>

                <div className=" mx-2 bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        {/* <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""> */}
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Tu Elegancia Comienza Aquí</h5>
                        </a>
                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400"> En CarStore Mexico tu historia de elegancia en la carretera comienza hoy. Descubre nuestra exclusiva gama de autos y déjate llevar por el lujo en movimiento. Bienvenido a la excelencia en automóviles."</p>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillrule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                        </a>
                    </div>
                </div>

                <div className="mx-2 bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        {/* <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""> */}
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Recomiendanos</h5>
                        </a>
                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">En CarStore México te ofrecemos una selección incomparable de vehículos de lujo que combinan estilo, innovación y rendimiento. Cada automóvil que ofrecemos es una obra maestra de ingeniería y diseño, pensada para satisfacer los gustos más exigentes.</p>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillrule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
