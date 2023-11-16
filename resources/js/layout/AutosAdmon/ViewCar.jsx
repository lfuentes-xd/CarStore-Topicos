import PrimaryButton from '../../components/PrimaryButton'
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../components/AuthProvider';//token
import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";


function ViewCar() {
    const location = useLocation();
    const navigate = useNavigate();
    const { id, model, year, color, type, fuel, disponibility, image, setShowCarInfo, Km, version, TM, liters, price } = location.state;
    const { auth } = useContext(AuthContext);//token
    const token = auth.token;//token
    console.log("id en viw nuevo" + id);

    console.log("token en ventas " + token);
    const [userData, setUserData] = useState({});
    const handleButtonClick = () => {
        navigate(-1);
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


    console.log("usuario", userData && userData.name);
    const ButtonBuy = async e => {
        if (token) {
            if (e && e.preventDefault()) e.preventDefault();
            const formData = new FormData();
            formData.append("idusuariofk", userData.id);
            formData.append("idAutofk", id);
            formData.append("monto", price);

            const response = await axios.post("http://localhost/CarStore-Topicos/public/api/createV",//aqui pon el link que tu tienes
                formData
            ).then(response => {
                console.log("Compra hecha", response);

                // console.log(response);

                console.log("usuario" + userData.name);
                console.log("id-usuario_fk", userData.id, "id_Auto_fk", id, "monto", price);
                alert("Compra hecha");

                navigate("/home");//desde el nombre

            }).catch(error => {
                console.log("error en la compra", error);
                alert("error en la compra  ");

            });
        } else {
            navigate("/login");
        }

    };
    return (
        <div className=''>
            <div className="Container flex mt-5">
                <div className="w-3/4">
                    <img className="rounded-t-lg" src={'http://localhost/CarStore-Topicos/public/storage/' + image} alt="" />
                </div>
                <div className="w-1/4 pl-3">
                    <div className='border border-gray-300 mx-10 h-auto w-full'>
                        <h1 className='m-3 font-bold text-xl'>{model}</h1>
                        <p className='m-3'>{Km} kilometros</p>
                    </div>

                    <div className='border border-gray-300 mx-10 h-auto w-full mt-5'>
                        <h1 className='m-3 font-bold text-xl'>$ {price}</h1>
                        <p className='m-3'>desde $3250 /Mes</p>
                    </div>

                    <div className='border border-gray-300 mx-10 h-auto w-full mt-5'>
                        <h1 className='m-3 font-bold text-xl'>Año:</h1>
                        <p className='m-3'>{year}</p>
                    </div>

                    <div className='border border-gray-300 mx-10 h-auto w-full mt-5'>
                        <h1 className='m-3 font-bold text-xl'>Version</h1>
                        <p className='m-3'>{version}</p>
                    </div>

                    <div className='border border-gray-300 mx-10 h-auto w-full mt-5'>
                        <h1 className='m-3 font-bold text-xl'>Transmisión</h1>
                        <p className='m-3'>{TM}</p>
                    </div>

                    <div className='border border-gray-300 mx-10 h-auto w-full'>
                        <PrimaryButton onClick={ButtonBuy} className='w-full mt-5'>Comprar automovil</PrimaryButton>
                        <PrimaryButton onClick={handleButtonClick} className='w-full mt-5 bg-red-500 hover:bg-red-600'>Regresar</PrimaryButton>
                    </div>
                </div>
            </div>
            <div className='container flex'>
                {/* <h1 className='my-5 font-bold text-xl'>Información Basica</h1> */}
                <div className='w-1/4'>
                    <div className='border border-gray-300 h-auto w-full mt-5'>
                        <h1 className='m-3 font-bold text-xl'>Transmisión</h1>
                        <p className='m-3'>{TM}</p>
                    </div>

                    <div className='border border-gray-300  h-auto w-full mt-5'>
                        <h1 className='m-3 font-bold text-xl'>Color del auto</h1>
                        <p className='m-3'>{color}</p>
                    </div>

                    <div className='border border-gray-300 h-auto w-full mt-5'>
                        <h1 className='m-3 font-bold text-xl'>Tipo de combustible</h1>
                        <p className='m-3'>{fuel}</p>
                    </div>
                </div>
                <div className='w-1/4 ml-5'>
                    <div className='border border-gray-300  h-auto w-full mt-5'>
                        <h1 className='m-3 font-bold text-xl'>Carroceria del auto</h1>
                        <p className='m-3'>{type}</p>
                    </div>

                    <div className='border border-gray-300 h-auto w-full mt-5'>
                        <h1 className='m-3 font-bold text-xl'>Capacidad del motor</h1>
                        <p className='m-3'>{liters}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ViewCar
