import TextInput from "../../components/TextInput"
import InputLabel from "../../components/Inputlabel"
import PrimaryButton from "../../components/PrimaryButton"
// import SelectInput from "../../components/InputSelect"
import BackIcon from "../../../Images/Icons/Back.png"
import LinktoButton from "../../components/LinktoButton"
// import FileInput from "../../components/Fileinput"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../../components/AuthProvider"

function CreateCars() {
    const [brands, setBrands] = useState([
    ]);
    const [setToken] = useState(null);
    const [formValue, setFormValue] = useState({})
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);//token

    const token = auth.token;//token

    //para poner los datos en las marcas
    useEffect(() => {
        axios.get('http://localhost/CarStore-Topicos/public/api/Car_brands',{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
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
        const value = e.target.type === 'select-one' ? e.target.options[e.target.selectedIndex].value : e.target.value;
        setFormValue({ ...formValue, [name]: value });
    }


    const handleSubmit = async e => {
        if (e && e.preventDefault()) e.preventDefault();

        const formData = new FormData();
        formData.append("Id_Brand_fk", formValue.Id_Brand_fk);
        formData.append("Model", formValue.Model);
        formData.append("year", formValue.year);
        formData.append("Color", formValue.Color);
        formData.append("type", formValue.type);
        formData.append("fuel", formValue.fuel);
        formData.append("Available", formValue.Available);
        // formData.append("Image", formValue.Image);
        formData.append("Image", e.target.elements.Image.files[0]); // Adjunta el archivo
        formData.append("Km", formValue.Km);
        formData.append("version", formValue.version);
        formData.append("TM", formValue.TM);
        formData.append("liters", formValue.liters);
        formData.append("price", formValue.price);


        const response = await axios.post(
            "http://localhost/CarStore-Topicos/public/api/insert",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    'Authorization': `Bearer ${token}`
                    // "X-CSRF-TOKEN": "k496d5cqX5hmytStSVb8bVzGSUFkYmvK3k2d7qEk"
                }

            }
        );

        // Add a console log to see the response object before the if statement
        console.log(response);

        if (response.status === 200) {
            console.log("Registration successful!");
            navigate("/CarsAdmon");//desde el nombre
        } else {
            console.log("Error during registration: ", response.data.message);
        }
    };

    return (
        <>
            <div className="Container my-12">
                <h1 className="text-xl text-center">Agregar auto</h1>
                <div className="flex justify-center items-center">

                    <form onSubmit={handleSubmit} style={{ width: '50%', maxWidth: '500px' }} encType="multipart/form-data">

                        <div className="mt-4 mb-4">
                            <InputLabel htmlFor="Id_marca_fk" value="Marca del auto" />

                            <select value={formValue.Id_Brand_fk} onChange={onChange} id="Id_Brand_fk" name="Id_Brand_fk" className="mt-1 block w-full p-2 border border-black">
                                <option value="0">Selecciona una marca</option>
                                {brands.map(brand => (
                                    <option key={brand.id} value={brand.id}>
                                        {brand.Desc}
                                    </option>
                                ))}
                            </select>

                        </div>

                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="Model" value="Modelo del auto" />
                            <TextInput value={formValue.Model} onChange={onChange} id="Model" type="text" name="Model" className="mt-1 block w-full p-2 border border-black" required />
                        </div>

                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="year" value="Año del vehiculo" />
                            <TextInput value={formValue.year} onChange={onChange} id="year" type="number" name="year" className="mt-1 block w-full p-2 border border-black"  required />
                        </div>

                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="Color" value="Color" />
                            <TextInput value={formValue.Color} onChange={onChange} id="Color" type="text" name="Color" className="mt-1 block w-full p-2 border border-black" required />
                        </div>

                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="type" value="Carroceria" />
                            <TextInput value={formValue.type} onChange={onChange} id="type" type="text" name="type" className="mt-1 block w-full p-2 border border-black"  required />
                        </div>
                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="Km" value="Km" />
                            <TextInput value={formValue.Km} onChange={onChange} id="Km" type="number" name="Km" className="mt-1 block w-full p-2 border border-black"  required />
                        </div>
                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="version" value="Versión" />
                            <TextInput value={formValue.version} onChange={onChange} id="version" type="text" name="version" className="mt-1 block w-full p-2 border border-black"  required />
                        </div>
                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="TM" value="Tipo de transmisión" />
                            <TextInput value={formValue.TM} onChange={onChange} id="TM" type="text" name="TM" className="mt-1 block w-full p-2 border border-black"  required />
                        </div>
                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="liters" value="Capacidad de litros" />
                            <TextInput value={formValue.liters} onChange={onChange} id="liters" type="number" name="liters" className="mt-1 block w-full p-2 border border-black"  required />
                        </div>

                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="price" value="Costo del carro" />
                            <TextInput value={formValue.price} onChange={onChange} id="price" type="number" name="price" className="mt-1 block w-full p-2 border border-black"  required />
                        </div>

                        <select value={formValue.fuel} onChange={onChange} id="fuel" name="fuel" className="mt-1 block w-full p-2 border border-black">
                            <option value="0">Selecciona un tipo de combustible</option>
                            <option value="gasolina">Gasolina</option>
                            <option value="diesel">Diesel</option>
                            <option value="electrico">Electrico</option>
                            <option value="hibrido">Hibrido</option>
                        </select>


                        <div className="mt-4 mb-4">
                            <InputLabel htmlFor="Available" value="¿Disponible?" />

                        <select value={formValue.Available} onChange={onChange} id="Available" name="Available" className="mt-1 block w-full p-2 border border-black">
                            <option value="0">Selecciona una opcion</option>
                            <option value="1">Disponible</option>
                            <option value="2">Sin disponibilidad</option>
                        </select>

                        </div>

                        <div className="mt-4 mb-4">
                            <InputLabel htmlFor="Image" value="Subir imagen." />
                            <input value={formValue.Image} onChange={onChange} id="Image" name="Image" className="mt-1 block w-full p-2 border border-black" type="file"/>
                        </div>

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
