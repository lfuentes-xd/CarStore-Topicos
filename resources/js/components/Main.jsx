import React from 'react';
import Menu from './Menu'
import Home from './Home';
import Example from './Example';
import Login from '../layout/Usersform/login';
import Register from '../layout/Usersform/Register';
import AdRegister from '../layout/AdmsForm/AdRegister';
import AdPassword from '../layout/AdmsForm/AdPassword';
import Cars from '../layout/Cars';
import CarsAdmon from '../layout/AutosAdmon/Index';
import SellsAdmon from '../layout/Sellsadmon/Index';
import CreateCars from '../layout/AutosAdmon/CreateCar';
import { Routes, Route, Navigate } from "react-router-dom";
import ConsumerInf from '../layout/ConsumerAdmon/ConsumerInf';
import MarcaC from '../layout/MarcaAdmon/MarcaC';

function Main() {
    return (
        <Routes>
            <Route path="/" element={<Menu/>}>
                <Route path="Example" element={<Example/>} />
                <Route index element={<Home/>} />
                <Route path="Login" element={<Login/>} />
                <Route path="Register" element={<Register/>} />
                <Route path='ConsumerInf' element={<ConsumerInf/>}/>
                <Route path='AdRegister' element={<AdRegister/>}/>
                <Route path='AdPassword' element={<AdPassword/>}/>
                <Route path="Cars" element={<Cars/>} />
                <Route path="CarsAdmon" element={<CarsAdmon/>} />
                <Route path="MarcaC" element={<MarcaC/>} />
                <Route path="SellsAdmon" element={<SellsAdmon/>} />
                <Route path="CreateCars" element={<CreateCars/>} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
        </Routes>
    )
}

export default Main
