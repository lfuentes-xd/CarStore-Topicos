
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
        formData.append("id_user", userData.id );
        formData.append("phone_number", formValue.phone_number);
        formData.append("street", formValue.street);
        formData.append("House_number", formValue.House_number);
        formData.append("name", formValue.name);
        formData.append("Surname", formValue.Surname);
        formData.append("second_surname", formValue.second_surname);

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
                    <InputLabel htmlFor="phone_number" value="Phone Number" />
                    <TextInput value={formValue.phone_number} onChange={onChange} id="phone_number" type="number" name="phone_number" className="mt-1 block w-full p-2 border border-black" autoComplete="username" required />
                </div>

                <div className="mt-4 mb-4">
                    <InputLabel htmlFor="street" value="Street" />
                    <TextInput value={formValue.street} onChange={onChange} id="street" type="text" name="street" className="mt-1 block w-full p-2 border border-black" required />
                </div>

                <div className="mt-4 mb-4">
                    <InputLabel htmlFor="House_number" value="House Number" />
                    <TextInput value={formValue.House_number} onChange={onChange} id="House_number" type="number" name="House_number" className="mt-1 block w-full p-2 border border-black" required />
                </div>

                <div className="mt-4 mb-4">
                    <InputLabel htmlFor="name" value="Name(s)" />
                    <TextInput value={formValue.name} onChange={onChange} id="name" type="text" name="name" className="mt-1 block w-full p-2 border border-black" required />
                </div>
                <div className="mt-4 mb-4">
                    <InputLabel htmlFor="Surname" value="First surname" />
                    <TextInput value={formValue.Surname} onChange={onChange} id="Surname" type="text" name="Surname" className="mt-1 block w-full p-2 border border-black" required />
                </div>

                <div className="mt-4 mb-4">
                    <InputLabel htmlFor="second_surname" value="Second surname" />
                    <TextInput value={formValue.second_surname} onChange={onChange} id="second_surname" type="text" name="second_surname" className="mt-1 block w-full p-2 border border-black" required />
                </div>

                <div className="">

                    <PrimaryButton className="w-full"  >Save</PrimaryButton>

                </div>
            </form>
        </div>

    );
}

export default ConsumerInf;


