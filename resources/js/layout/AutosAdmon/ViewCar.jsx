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
    console.log("id en viw nuevo"+id);

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
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("idusuariofk", userData.id);
        formData.append("idAutofk", id);
        formData.append("monto", price);



        console.log("usuario form " + userData.name)
        console.log("id-usuario_fk form ", userData.id, "id_Auto_fk", id, "monto", price)
        console.log("id: "+id);


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

    };
    return (
        <>
            <div className="Container flex m-10">
                <div className="w-1/2">
                    <h1>
                        <img className="rounded-t-lg" src={'http://localhost/CarStore-Topicos/public/storage/' + image} alt="" />
                    </h1>
                </div>
                <div className="w-1/2 font-small">
                    <h1 className="text-3xl ml-3">Modelo del auto: {model}</h1>
                    <h1 className="text-3xl ml-3">Año del auto: {year}</h1>
                    <h1 className="text-3xl ml-3">Carroceria del auto: {type}</h1>
                    <h1 className="text-3xl ml-3">Color del auto: {color}</h1>
                    <h1 className="text-3xl ml-3">Tipo de combustible del auto: {fuel}</h1>
                    <h1 className="text-3xl ml-3">Cantidad de kilometros: {fuel}</h1>
                    <h1 className="text-3xl ml-3">Tipo de combustible del auto: {Km}</h1>
                    <h1 className="text-3xl ml-3">Versión del automovil: {version}</h1>
                    <h1 className="text-3xl ml-3">Tipo de transmisión: {TM}</h1>
                    <h1 className="text-3xl ml-3">Almacenamiento en litros de gasolina: {liters} <br /></h1>
                    <h1 className="text-3xl ml-3">Precio: {price}</h1>



                    <PrimaryButton onClick={ButtonBuy} className='w-full mt-5 ml-5'>Comprar automovil</PrimaryButton>
                    <PrimaryButton onClick={handleButtonClick} className='w-full mt-5 bg-red-500 hover:bg-red-600 ml-5'>Regresar</PrimaryButton>
                </div>
            </div>
        </>
    )
}

export default ViewCar
