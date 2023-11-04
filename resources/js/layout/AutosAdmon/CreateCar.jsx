import TextInput from "../../components/TextInput"
import InputLabel from "../../components/Inputlabel"
import PrimaryButton from "../../components/PrimaryButton"
import SelectInput from "../../components/InputSelect"
import BackIcon from "../../../Images/Icons/Back.png"
import LinktoButton from "../../components/LinktoButton"
import FileInput from "../../components/Fileinput"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CreateCars() {
    const [brands, setBrands] = useState([]);
    const [setToken] = useState(null);
    const [formValue, setFormValue] = useState({})
    const token = "VAnzYwlgHeDMABVJie55hmM4EYgyYLra5JuirdaA";


    const fuelOptions = [
        { value: "gasolina", label: "Gasolina" },
        { value: "diesel", label: "Diesel" },
        { value: "electrico", label: "Electrico" },
        { value: "hibrido", label: "Hibrido" },
    ];
    const AvailableOptions = [
        { value: "1", label: "Disponible" },
        { value: "0", label: "Sin existencias" },
    ];


    //para poner los datos en las marcas
    useEffect(() => {
        axios.get('http://localhost/CarSore-TopicClass/public/api/Car_brands')
            .then(response => {
                setBrands(response.data);
            })
            .catch(error => {
                console.error('Error obtenendo la data '.error);
            });
    }, []);


    const onChange = (e) => {
        e.persist();
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("Brand", formValue.brand);
        formData.append("Model", formValue.Model);
        formData.append("year", formValue.year);
        formData.append("color", formValue.color);
        formData.append("type", formValue.type);
        formData.append("fuel", formValue.fuel);
        formData.append("available", formValue.available);
        // formData.append("image", formValue.image);

        axios.post('http://localhost/CarSore-TopicClass/public/api/insert',
        formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                }
            }).then(response => {
                console.log("Registration successful. Response: ", response);
                console.log("response: ");
                console.log(response);
                navigate("/SellsAdmon");
            }).catch(error => {
                console.log("Error during the registration: ", error);
                // console.log("cccc", error);
            });
    };
    return (
        <>
            <div className="Container my-12">
                <h1 className="text-xl text-center">Agregar auto</h1>
                <div className="flex justify-center items-center">
                    <form onSubmit={handleSubmit} style={{ width: '50%', maxWidth: '500px' }}>

                        <div className="mt-4 mb-4">
                            <InputLabel htmlFor="brand" value="Marca del auto" />
                            <SelectInput id="brand" name="brand" options={brands.map(brand => ({ value: brand.id, label: brand.Descripción }))} value={formValue.brand} onChange={onChange} className="mt-1 block w-full p-2 border border-black" required />
                        </div>

                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="Model" value="Modelo" />
                            <TextInput id="Model" value={formValue.Model} type="text" name="Model" className="mt-1 block w-full p-2 border border-black" autoComplete="username" required />
                        </div>

                        <div className="mt-4 mb-4">
                            <InputLabel htmlFor="year" value="Año" />
                            <TextInput id="year" value={formValue.year} type="text" name="year" className="mt-1 block w-full p-2 border border-black" required />
                        </div>

                        <div className="mt-4 mb-4">
                            <InputLabel htmlFor="color" value="color" />
                            <TextInput val id="color" value={formValue.color} type="text" name="color" className="mt-1 block w-full p-2 border border-black" required />
                        </div>

                        <div className="mt-4 mb-4">
                            <InputLabel htmlFor="type" value="Carroceria" />
                            <TextInput id="type" value={formValue.type} type="text" name="type" className="mt-1 block w-full p-2 border border-black" required />
                        </div>

                        <div className="mt-4 mb-4">
                            <InputLabel htmlFor="fuel" value="Tipo de combustible." />
                            <SelectInput id="fuel" name="fuel" value={formValue.fuel} options={fuelOptions} onChange={onChange} className="mt-1 block w-full p-2 border border-black" required />
                        </div>

                        <div className="mt-4 mb-4">
                            <InputLabel htmlFor="Available" value="¿Disponible?" />
                            <SelectInput id="Available" name="Available" options={AvailableOptions} value={formValue.available} onChange={onChange} className="mt-1 block w-full p-2 border border-black" required />
                        </div>
{/*
                        <div className="mt-4 mb-4">
                            <InputLabel htmlFor="image" value="Subir imagen." />
                            <FileInput id="image" value={formValue.image} name="image" className="mt-1 block w-full p-2 border border-black"/>
                        </div> */}

                        <div className="">
                            <PrimaryButton className="w-full">Registrar</PrimaryButton>

                            <LinktoButton to="/CarsAdmon" className="my-3 w-full bg-red-700 text-black">
                                Regresar
                                <img src={BackIcon} alt="" className="ml-2 w-4 h-4" />
                            </LinktoButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateCars
