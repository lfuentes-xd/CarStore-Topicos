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
// import { AuthContext } from './AuthProvider';//token
import { AuthContext } from "../../components/AuthProvider"

function CreateBrands() {

    // const [navigate, setNavigate] = useState(false);
    const { auth } = useContext(AuthContext);//token

    const token = auth.token;//token
    const [formValue, setFormValue] = useState({})
    const navigate = useNavigate();

    const onChange = (e) => {
        e.persist();
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }

    const handleSubmit = async e => {
        if (e && e.preventDefault()) e.preventDefault();

        const formData = new FormData();
        formData.append("Desc", formValue.Desc);


        const response = await axios.post(
            "http://localhost/CarStore-Topicos/public/api/insertBrand",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`
                }

            }
        );

        // Add a console log to see the response object before the if statement
        console.log(response);

        if (response.status === 200) {
            console.log("Registration successful!");
            navigate("/BrandsAdmon");//desde el nombre
        } else {
            console.log("Error during registration: ", response.data.message);
        }
    };

    return (
        <>
            <div className="Container my-12">
                <h1 className="text-xl text-center">Agregar Marca</h1>
                <div className="flex justify-center items-center">

                    <form onSubmit={handleSubmit} style={{ width: '50%', maxWidth: '500px' }}>


                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="Desc" value="Marca del auto" />
                            <input value={formValue.Desc} onChange={onChange} id="Desc" type="text" name="Desc" className="mt-1 block w-full p-2 border border-black" required />
                        </div>

                        <div className="">
                            <PrimaryButton className="w-full">Registrar</PrimaryButton>

                            <LinktoButton to="/BrandsAdmon" className="my-3 w-full bg-red-700 text-black">
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

export default CreateBrands
