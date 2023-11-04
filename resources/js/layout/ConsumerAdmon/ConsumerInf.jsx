
import TextInput from "../../components/TextInput";
import InputLabel from "../../components/Inputlabel";
import PrimaryButton from "../../components/PrimaryButton";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {useEffect} from "react";
import {Navigate} from "react-router-dom";


function ConsumerInf() {

    const [token, setToken] = useState(null);
    const [formValue, setFormValue] = useState( false);
    const [email, setEmail] = useState('');
    const [navigate, setNavigate] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('/user');

                setEmail(data.email);
            } catch (e) {
                setNavigate(true);
            }
        })();
    }, []);

    const onChange = (e) => {
        e.persist();
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }

    const handleSubmit = async e => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("teléfono", formValue.teléfono);
        formData.append("calle", formValue.calle);
        formData.append("N_casa", formValue.N_casa);
        formData.append("Nombre(s)", formValue.Nombre(s));
        formData.append("1er_apellido", formValue.per_apellido);
        formData.append("2do_apellido", formValue.sdo_apellido);

        const { data } = await axios.post("http://localhost/CarStore-Topicos/public/api/infoC",//aqui pon el link que tu tienes 
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token

                }
            }).then(response => {
                console.log("Registration successful. Response: ", response);
                console.log("response: ");
                console.log(response);

                navigate("/ConsumerInf");//desde el nombre
            }).catch(error => {
                console.log("Error during registration: ", error);
                console.log("cccc", error);
            });
    };
    return (
        <div className="flex justify-center items-center mt-12">
            <h1>H{email}ola </h1>
            <br />
            <form onSubmit={handleSubmit} style={{ width: '50%', maxWidth: '500px' }}>
                <div className="mt-4 mb-4" >
                    <InputLabel htmlFor="PhoneNumber" value="Phone Number" />
                    <TextInput value={formValue.email} onChange={onChange} id="teléfono" type="number" name="teléfono" className="mt-1 block w-full p-2 border border-black" autoComplete="username" required />
                </div>

                <div className="mt-4 mb-4">
                    <InputLabel htmlFor="Street" value="Street" />
                    <TextInput value={formValue.name} onChange={onChange} id="calle" type="text" name="calle" className="mt-1 block w-full p-2 border border-black" required />
                </div>

                <div className="mt-4 mb-4">
                    <InputLabel htmlFor="HouseNO" value="House Number" />
                    <TextInput value={formValue.password} onChange={onChange} id="N_casa" type="number" name="N_casa" className="mt-1 block w-full p-2 border border-black" required />
                </div>

                <div className="mt-4 mb-4">
                    <InputLabel htmlFor="names" value="Name(s)" />
                    <TextInput value={formValue.password_confirmation} onChange={onChange} id="Nombre(s)" type="text" name="Nombre(s)" className="mt-1 block w-full p-2 border border-black" required />
                </div>
                <div className="mt-4 mb-4">
                    <InputLabel htmlFor="Fname" value="First surname" />
                    <TextInput value={formValue.password} onChange={onChange} id="per_apellido" type="text" name="per_apellido" className="mt-1 block w-full p-2 border border-black" required />
                </div>

                <div className="mt-4 mb-4">
                    <InputLabel htmlFor="Sname" value="Second surname" />
                    <TextInput value={formValue.password_confirmation} onChange={onChange} id="sdo_apellido" type="text" name="sdo_apellido" className="mt-1 block w-full p-2 border border-black" required />
                </div>

                <div className="">

                    <PrimaryButton className="w-full"  >Save</PrimaryButton>

                </div>
            </form>
        </div>

    );
}

export default ConsumerInf;


