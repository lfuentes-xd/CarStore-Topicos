import TextInput from "../../components/TextInput";
import InputLabel from "../../components/Inputlabel";
import PrimaryButton from "../../components/PrimaryButton";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import React, { useState, useEffect } from "react";
import  {  useContext } from "react";
import { AuthContext } from "../../components/AuthProvider";


function LoginForm() {

   // const { setAuth } = useContext(AuthContext);

    const [token, setToken] = useState(null);//token
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const [formValue, setFormValue] = useState({

    })


    const onChange = (e) => {
        e.persist();
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = async e => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("email", formValue.email);
        formData.append("password", formValue.password);

        const  response = await axios.post("http://localhost/CarStore-Topicos/public/api/login_user",//aqui pon el link que tu tienes 
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token

                }
            }).then(response => {
                const token = response.data.token;//valor del token
                setAuth({ token });
                setToken(token);
                console.log("login successful. Response: ", response);
                console.log("tokem: " + token);
                
                console.log("response: ");
                console.log(response);
                                
                navigate("/",  { state: { token } });//desde el nombre
            }).catch(error => {
                console.log("Error during login: ", error);
                console.log("cccc", error);
                alert("La contraseña o el usuario estan incorrectas ");
                
                
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
                    <InputLabel htmlFor="Password" value="Password" />
                    <TextInput value={formValue.password} onChange={onChange} id="password" type="password" name="password" className="mt-1 block w-full p-2 border border-black" required />
                </div>

               

                <div className="">

                    <PrimaryButton className="w-full"  >login</PrimaryButton>
                    

                    <Link to="/Register"  className="hover:underline text-center">¿No tienes cuenta? Creala dando aqui  </Link>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;

