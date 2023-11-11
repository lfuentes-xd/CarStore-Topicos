import TextInput from "../../components/TextInput"
import InputLabel from "../../components/Inputlabel"
import PrimaryButton from "../../components/PrimaryButton"
// import SelectInput from "../../components/InputSelect"
import BackIcon from "../../../Images/Icons/Back.png"
import LinktoButton from "../../components/LinktoButton"
// import FileInput from "../../components/Fileinput"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

function ModifyCar() {
    const [setToken] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const car = location.state;

    const [formValue, setFormValue] = useState({
        Modelo: '',
        año: '',
        Color: '',
        Carroceria: ''
    });

    useEffect(() => {
        console.log('modelo:    ', formValue.Modelo)
        if (car) {
            setFormValue({
                Modelo: car.Modelo || '1',
                año: car.año || '',
                Color: car.Color || '',
                Carroceria: car.Carroceria || '',
                // Agrega aquí el resto de las propiedades del auto...
            });
        }
    }, [car])

    const onChange = (e) => {
        e.persist();
        const name = e.target.name;
        const value = e.target.type === 'select-one' ? e.target.options[e.target.selectedIndex].value : e.target.value;
        setFormValue({ ...formValue, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("Modelo", formValue.Modelo);
        formData.append("año", formValue.año);
        formData.append("Color", formValue.Color);
        formData.append("Carroceria", formValue.Carroceria);

        try {
          const response = await axios.put(
            `http://localhost/CarStore-Topicos/public/api/Updatecar/${12}`,
            formData,  // Pasa el formData como segundo parámetro
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
              },
            }
          );

          console.log(response);

          if (response.status === 200) {
            console.log("Actualización exitosa!");
            navigate("/CarsAdmon");
          } else {
            console.log("Error durante la actualización: ", response.data.message);
          }
        } catch (error) {
          console.error("Error durante la actualización: ", error);
        }
      };


    return (
        <>
            <div className="Container my-12">
                <h1 className="text-xl text-center">Agregar auto</h1>
                <div className="flex justify-center items-center">

                    <form onSubmit={handleSubmit} style={{ width: '50%', maxWidth: '500px' }}>

                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="Modelo" value="Modelo del auto" />
                            <input value={formValue.Modelo} onChange={onChange} id="Modelo" name="Modelo" type="text"  className="mt-1 block w-full p-2 border border-black" required />
                        </div>

                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="año" value="Año del vehiculo" />
                            <TextInput value={formValue.año} onChange={onChange} id="año" type="text" name="año" className="mt-1 block w-full p-2 border border-black"  required />
                        </div>

                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="Color" value="Color" />
                            <TextInput value={formValue.Color} onChange={onChange} id="Color" type="text" name="Color" className="mt-1 block w-full p-2 border border-black" required />
                        </div>

                        <div className="mt-4 mb-4" >
                            <InputLabel htmlFor="Carroceria" value="Carroceria" />
                            <TextInput value={formValue.Carroceria} onChange={onChange} id="Carroceria" type="text" name="Carroceria" className="mt-1 block w-full p-2 border border-black"  required />
                        </div>


                        <div className="">
                            <PrimaryButton className="w-full">Modificar</PrimaryButton>

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

export default ModifyCar
