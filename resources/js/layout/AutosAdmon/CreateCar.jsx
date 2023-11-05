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
    const token = "k496d5cqX5hmytStSVb8bVzGSUFkYmvK3k2d7qEk";


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
        axios.get('http://localhost/CarStore-Topicos/public/api/Car_brands')
            .then(response => {
                setBrands(response.data);
            })
            .catch(error => {
                console.error('Error obtenendo la data '.error);
            });
    }, []);

    const onChange = (e) => {
        e.persist();
        const name = e.target.name;
        const value = e.target.value;
        setFormValue({ ...formValue, [name]: value });
    }
    const handleSubmit = async e => {
        if (e && e.preventDefault()) e.preventDefault();

        const formData = new FormData();
        // formData.append("Id_marca_fk", formValue.Id_marca_fk);
        formData.append("Modelo", formValue.Modelo);
        formData.append("año", formValue.año);
        formData.append("Color", formValue.Color);
        formData.append("Carroceria", formValue.Carroceria);
        formData.append("t_combustible", formValue.t_combustible);
        formData.append("Existencias", formValue.Existencias);
        // formData.append("Image", formValue.Image);

        const response = await axios.post(
            "http://localhost/CarStore-Topicos/public/api/insert",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    "X-CSRF-TOKEN": "k496d5cqX5hmytStSVb8bVzGSUFkYmvK3k2d7qEk"
                }

            }
        );

        // Add a console log to see the response object before the if statement
        console.log(response);

        if (response.status === 200) {
            console.log("Registration successful!");
        } else {
            console.log("Error during registration: ", response.data.message);
        }
    };

    return (
        <>
            <div className="Container my-12">
                <h1 className="text-xl text-center">Agregar auto</h1>
                <div className="flex justify-center items-center">
                    <form onSubmit={handleSubmit} style={{ width: '50%', maxWidth: '500px' }}>

                        <div className="mt-4 mb-4">
                            <InputLabel htmlFor="Id_marca_fk" value="Marca del auto" />
                            <SelectInput id="Id_marca_fk" name="Id_marca_fk" options={brands.map(brand => ({ value: brand.id, label: brand.Descripción }))} value={formValue.Id_marca_fk} onChange={onChange} className="mt-1 block w-full p-2 border border-black" required />
                        </div>

                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="Modelo" value="Modelo del auto" />
                            <TextInput value={formValue.Modelo} onChange={onChange} id="Modelo" type="text" name="Modelo" className="mt-1 block w-full p-2 border border-black" autoComplete="username" required />
                        </div>

                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="año" value="Año del vehiculo" />
                            <TextInput value={formValue.año} onChange={onChange} id="año" type="text" name="año" className="mt-1 block w-full p-2 border border-black" autoComplete="username" required />
                        </div>

                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="Color" value="Color" />
                            <TextInput value={formValue.Color} onChange={onChange} id="Color" type="text" name="Color" className="mt-1 block w-full p-2 border border-black" autoComplete="username" required />
                        </div>

                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="Carroceria" value="Carroceria" />
                            <TextInput value={formValue.Carroceria} onChange={onChange} id="Carroceria" type="text" name="Carroceria" className="mt-1 block w-full p-2 border border-black" autoComplete="username" required />
                        </div>

                        <div className="mt-4 mb-4">
                            <InputLabel htmlFor="t_combustible" value="Tipo de combustible." />
                            <SelectInput value={formValue.t_combustible} onChange={onChange} options={fuelOptions} id="t_combustible" name="t_combustible" className="mt-1 block w-full p-2 border border-black" required />
                        </div>

                        <div className="mt-4 mb-4">
                            <InputLabel htmlFor="Existencias" value="¿Disponible?" />
                            <SelectInput value={formValue.Existencias} onChange={onChange}  options={AvailableOptions} id="Existencias" name="Existencias" className="mt-1 block w-full p-2 border border-black" required />
                        </div>

                        {/* <div className="mt-4 mb-4">
                            <InputLabel htmlFor="Image" value="Subir imagen." />
                            <FileInput value={formValue.Image} onChange={onChange} id="Image" name="Image" className="mt-1 block w-full p-2 border border-black"/>
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
