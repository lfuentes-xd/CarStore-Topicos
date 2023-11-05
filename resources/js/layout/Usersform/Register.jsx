import TextInput from "../../components/TextInput";
import InputLabel from "../../components/Inputlabel";
import PrimaryButton from "../../components/PrimaryButton";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

    const [token, setToken] = useState(null);
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState({

    })


    const onChange = (e) => {
        e.persist();
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }

    const handleSubmit = async e => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("name", formValue.name);
        formData.append("email", formValue.email);
        formData.append("password", formValue.password);
        formData.append("password_confirmation", formValue.password_confirmation);

        const  response = await axios.post("http://localhost/CarStore-Topicos/public/api/register",//aqui pon el link que tu tienes
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
                console.log("errrrrr", response.status)
            }).catch(error => {
                console.log("Error during registration: ", error);
                alert("Contraseñas incorrectas, deben de ser iguales y de 8 caracteres como mínimmo ");
                
            });

    };
    
    return (
        <div className="flex justify-center items-center mt-12">
            <form onSubmit={handleSubmit} style={{ width: '50%', maxWidth: '500px' }}>
                <div className="mt-4 mb-4" >
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput value={formValue.email} onChange={onChange} id="email" type="text" name="email" className="mt-1 block w-full p-2 border border-black" autoComplete="username" required />
                </div>

                <div className="mt-4 mb-4">
                    <InputLabel htmlFor="Name" value="Nombre" />
                    <TextInput value={formValue.name} onChange={onChange} id="name" type="text" name="name" className="mt-1 block w-full p-2 border border-black" required />
                </div>

                <div className="mt-4 mb-4">
                    <InputLabel htmlFor="Password" value="Password" />
                    <TextInput value={formValue.password} onChange={onChange} id="password" type="password" name="password" className="mt-1 block w-full p-2 border border-black" required />
                </div>

                <div className="mt-4 mb-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                    <TextInput value={formValue.password_confirmation} onChange={onChange} id="password_confirmation" type="password" name="password_confirmation" className="mt-1 block w-full p-2 border border-black" required />
                </div>

                <div className="">

                    <PrimaryButton className="w-full"  >Register</PrimaryButton>
                    <Link to="/login">
                        <PrimaryButton className="bg-red-600 hover:bg-red-800 w-full mt-3">Regresar</PrimaryButton>
                    </Link>

                    <Link to="/login" className="hover:underline text-center">¿Ya tienes cuenta?   </Link>
                </div>
            </form>
        </div>
    );
}

export default Register;
