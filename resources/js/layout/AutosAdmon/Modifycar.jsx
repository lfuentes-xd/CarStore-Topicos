import TextInput from "../../components/TextInput"
import InputLabel from "../../components/Inputlabel"
import PrimaryButton from "../../components/PrimaryButton"
// import SelectInput from "../../components/InputSelect"
import BackIcon from "../../../Images/Icons/Back.png"
import LinktoButton from "../../components/LinktoButton"
// import FileInput from "../../components/Fileinput"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
// import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from "../../components/AuthProvider"

const ModifyCar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const car = location.state;
    const { auth } = useContext(AuthContext);//token

    const token = auth.token;//token
    const [formValue, setFormValue] = useState({
        Modelo: car.Modelo,
        año: car.año,
        Color: car.Color,
        Carroceria: car.Carroceria,
        km: car.Km,
        Costo: car.price
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("Modelo", formValue.Modelo);
        formData.append("año", formValue.año);
        formData.append("Color", formValue.Color);
        formData.append("Carroceria", formValue.Carroceria);
        formData.append("km", formValue.km);
        formData.append("Costo", formValue.Costo);


        try {
            const response = await fetch(`http://localhost/CarStore-Topicos/public/api/Updatecar/${car.id}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`


                },
                body: JSON.stringify(formValue),
            });

            if (response.ok) {
                console.log('Auto actualizado exitosamente');
                navigate('/Carsadmon');
            } else {
                console.log("Error durante la actualización: ", response.data.message);
            }
        } catch (error) {
            console.error("Error durante la actualización: ", error);
        }

    };

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="Container my-12">
                <h1 className="text-3xl text-center">Modificar vehículo</h1>
                <div className="w-full max-w-lg mx-auto">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="Modelo" value="Modelo del vehiculo" />
                            <TextInput value={formValue.Modelo} onChange={onChange} id="Modelo" type="text" name="Modelo" className="mt-1 block w-full p-2 border border-black" required />
                        </div>

                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="año" value="Año del vehiculo" />
                            <TextInput value={formValue.año} onChange={onChange} id="año" type="text" name="año" className="mt-1 block w-full p-2 border border-black" required />
                        </div>

                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="Color" value="Color" />
                            <TextInput value={formValue.Color} onChange={onChange} id="Color" type="text" name="Color" className="mt-1 block w-full p-2 border border-black" required />
                        </div>

                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="Carroceria" value="Carroceria" />
                            <TextInput value={formValue.Carroceria} onChange={onChange} id="Carroceria" type="text" name="Carroceria" className="mt-1 block w-full p-2 border border-black" required />
                        </div>


                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="km" value="km" />
                            <TextInput value={formValue.km} onChange={onChange} id="km" type="number" name="km" className="mt-1 block w-full p-2 border border-black" required />
                        </div>


                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="Costo" value="Costo" />
                            <TextInput value={formValue.Costo} onChange={onChange} id="Costo" type="text" name="Costo" className="mt-1 block w-full p-2 border border-black" required />
                        </div>

                        <div className="">
                            <PrimaryButton className="w-full">Modificar</PrimaryButton>

                            <LinktoButton to="/CarsAdmon" className="my-3 w-full">Volver</LinktoButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ModifyCar;
