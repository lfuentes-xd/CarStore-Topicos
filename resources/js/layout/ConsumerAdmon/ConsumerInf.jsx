
import TextInput from "../../components/TextInput";
import InputLabel from "../../components/Inputlabel";
import PrimaryButton from "../../components/PrimaryButton";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from "../../components/AuthProvider";


function ConsumerInf() {

    //const [token, setToken] = useState(null);
    const [formValue, setFormValue] = useState(false);
    const [email, setEmail] = useState('');
   // const [navigate, setNavigate] = useState(false);

    
    const [userInfo, setUserInfo] = useState(null);
    
    const navigate = useNavigate();
    const location = useLocation();//los importantes par  token
     const [userData, setUserData] = useState({});//para el token
    const { auth } = useContext(AuthContext);
    const token = auth.token;

    console.log("este es p " + token);



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
    console.log("role en consumerinf"+userData.role);

    const onChange = (e) => {
        e.persist();
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }

    const handleSubmit = async e => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("id_usuario", userData.id );
        formData.append("teléfono", formValue.teléfono);
        formData.append("calle", formValue.calle);
        formData.append("N_casa", formValue.N_casa);
        formData.append("Nombre", formValue.Nombre);
        formData.append("per_apellido", formValue.per_apellido);
        formData.append("sdo_apellido", formValue.sdo_apellido);

        const response = await axios.post("http://localhost/CarStore-Topicos/public/api/infoC",//aqui pon el link que tu tienes 
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`

                }
                
            }).then(response => {
                console.log("Registration successful. Response: ", response);
               

                console.log("envio del "+token)
                navigate("/", { state: { token } });//desde el nombre
            }).catch(error => {
                console.log("Error during registration: ", error);
                console.log("cccc", error);
            });
    };
    return (
        <div className="flex justify-center items-center mt-12">
            <div>
                <h1 style={{ position: 'absolute', fontFamily: 'Arial, sans-serif', fontSize: '24px', top: '80px', color: '#7D7C7B' }}>welcome {userData.name} con id: {userData.id} y role {userData.role}</h1>
            </div>
            <form onSubmit={handleSubmit} style={{ width: '50%', maxWidth: '500px' }}>
                <div className="mt-4 mb-4" style={{display: 'none'}}>
                    <InputLabel htmlFor="id_user" value="id_user" />
                    <TextInput value={formValue.id_user} onChange={onChange} id="id_user" type="number" name="id_user" className="mt-1 block w-full p-2 border border-black" autoComplete="username"  />
                </div>

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
                    <TextInput value={formValue.password_confirmation} onChange={onChange} id="Nombre" type="text" name="Nombre" className="mt-1 block w-full p-2 border border-black" required />
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


