import PrimaryButton from '../../components/PrimaryButton'
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';

function ViewCar() {
    const location = useLocation();
    const navigate = useNavigate();
    const { model, year, color, type, fuel, disponibility, image, setShowCarInfo } = location.state;

    const handleButtonClick = () =>{
        navigate(-1);
    }
    return (
        <>
            <div className="Container flex m-10">
                <div className="w-1/2">
                    <h1>
                        <img className="rounded-t-lg" src={'http://localhost/CarStore-Topicos/public/storage/' + image} alt="" />
                    </h1>
                </div>
                <div className="w-1/2 font-small">
                    <h1 className="text-3xl ml-3">Modelo del auto: {model}</h1>
                    <h1 className="text-3xl ml-3">Año del auto: {year}</h1>
                    <h1 className="text-3xl ml-3">Carroceria del auto: {type}</h1>
                    <h1 className="text-3xl ml-3">Color del auto: {color}</h1>
                    <h1 className="text-3xl ml-3">Tipo de combustible del auto: {fuel}</h1>
                    <PrimaryButton className='w-full mt-5 ml-5'>Comprar automovil</PrimaryButton>
                    <PrimaryButton onClick={handleButtonClick} className='w-full mt-5 bg-red-500 hover:bg-red-600 ml-5'>Regresar</PrimaryButton>
                </div>
            </div>
        </>
    )
}

export default ViewCar
