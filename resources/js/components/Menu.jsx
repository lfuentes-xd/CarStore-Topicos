import { Outlet, Link } from 'react-router-dom';
import Icon from './Icon';

import axios from "axios";

import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';//token

function Menu() {
    const { logout } = useContext(AuthContext);//logout

    const [formValue, setFormValue] = useState(false);
    const [email, setEmail] = useState('');
    // const [navigate, setNavigate] = useState(false);
    const { auth } = useContext(AuthContext);//token

    const token = auth.token;//token
    console.log("token menu auth es la b"+token)

    const location = useLocation();//los importantes par  token
   // const token = location.state && location.state.token;//los importantes para token
    const [userInfo, setUserInfo] = useState(null);
    const [userData, setUserData] = useState({});//para el token
    const navigate = useNavigate();

    console.log("este es token en menu con auth " + token);

    const handleLogout = () => {
        // Llama a la función de logout para limpiar el token
        logout();
        alert("Se ha cerrado la sesión ")
    
        // Además, podrías redirigir al usuario a la página de inicio o a donde desees
         navigate("/"); // Asegúrate de importar 'navigate' desde 'react-router-dom'
      };



    useEffect(() => {
        if (token) {
            axios.get("http://localhost/CarStore-Topicos/public/api/user_index", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => setUserData(response.data))
                .catch(error => {
                    console.log("Error al obtener información del usuario: ", error);
                });
        }
    }, [token]);

    console.log("role" + userData.role);
    if (token != null) {
        if (userData.role === 1) {//cliente
            return (
                <>
                    <nav className="bg-black">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between h-16">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Icon className="text-white font-cursiva "></Icon>
                                    <Link to={`/home?token=${token}`} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-3 rounded-md text-sm font-medium">
                                        Pagina principall
                                    </Link>
                                    <Link to={`/Cars?token=${token}`} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Autos</Link>
                                    <Link to={`/SellsAdmon?token=${token}`} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Ventas</Link>
                                </div>
                                <div>
                                    <div class="group relative">

                                        <span id="dropdownDefaultButton" data-dropdown-trigger="{hover|click}" class="text-white bg-black hover:bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-black dark:hover:bg-black dark:focus:ring-black focus:ring-2 focus:ring-black focus:outline-none" type="button">
                                            Cliente: {userData.name} <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" /></svg>
                                        </span>

                                        <div id="dropdown" class="z-10 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 group-hover:block">
                                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                                <li>
                                                <button onClick={handleLogout} class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</button>

                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </nav>
                    <section>
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <Outlet>

                            </Outlet>
                        </div>
                    </section>
                </>
            );

        } else if (userData.role === 2) {
            return (
                <>
                    <nav className="bg-black">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between h-16">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Icon className="text-white font-cursiva "></Icon>
                                    <Link to={`/home?token=TU_TOKEN_AQUI`} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-3 rounded-md text-sm font-medium">
                                        Pagina principal
                                    </Link><Link to="Cars" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Autos</Link>
                                    <Link to="CarsAdmon" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Administracion de autos</Link>
                                    <Link to="MarcaC" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Administracion de marcas</Link>
                                    <Link to="SellsAdmon" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Ventas</Link>
                                </div>
                                <div>
                                    <div class="group relative">

                                        <span id="dropdownDefaultButton" data-dropdown-trigger="{hover|click}" class="text-white bg-black hover:bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-black dark:hover:bg-black dark:focus:ring-black focus:ring-2 focus:ring-black focus:outline-none" type="button">
                                            Administrador: {userData.name} <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" /></svg>
                                        </span>

                                        <div id="dropdown" class="z-10 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 group-hover:block">
                                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                                <li>
                                                    <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</a>
                                                    <Link to="login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Administrador</Link>

                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </nav>
                    <section>
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <Outlet>

                            </Outlet>
                        </div>
                    </section>
                </>
            );
        }
    } else {
        return (
            <>
                <nav className="bg-black">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Icon className="text-white font-cursiva "></Icon>
                                <Link to="home" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-3 rounded-md text-sm font-medium">Pagina principal</Link>
                                <Link to="Cars" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Autos</Link>

                                <Link to="CarsAdmon" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Administracion de autos</Link>
                                <Link to="BrandsAdmon" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Marcas</Link>
                                <Link to="SellsAdmon" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Ventas</Link>
                            </div>

                            <Link to="login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                        </div>
                    </div>
                </nav>
                <section>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <Outlet>

                        </Outlet>
                    </div>
                </section>
            </>
        )
    }


}

export default Menu
