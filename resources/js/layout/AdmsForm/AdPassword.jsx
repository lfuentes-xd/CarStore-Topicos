import TextInput from "../../components/TextInput";
import InputLabel from "../../components/Inputlabel";
import PrimaryButton from "../../components/PrimaryButton";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function AdPassword() {
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate();

    const checkPassword = () => {
        console.log(password);
        if (password === "123") {
            navigate('/AdRegister');
        } else {
            console.log("wrong password");
            alert("contraseña incorrecta");
        }
    }

    const handlePasswordChange = (e) => {
        // Esta función se llama cuando cambia el valor del campo de contraseña
        setPassword(e.target.value);
    }

    return (
        <>
            <div className="flex justify-center items-center mt-12">
                <form onSubmit={(e) => { e.preventDefault(); checkPassword(); }}>
                    <div className="mt-4 mb-4" >
                        <InputLabel htmlFor="Admin Password" value="Admin Password" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            className="mt-1 block w-full p-2 border border-black"
                            autoComplete="password"
                            required
                            value={password} // Agregamos el valor al campo
                            onChange={handlePasswordChange} // Escuchamos el cambio en el campo
                        />
                    </div>
                    <PrimaryButton >Verificar Contraseña</PrimaryButton>
                </form>
            </div>
        </>
    );
}

export default AdPassword;
