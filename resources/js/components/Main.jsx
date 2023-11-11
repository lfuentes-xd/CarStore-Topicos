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
import BrandsAdmon from '../layout/Brands/index'
import CreateBrands from '../layout/Brands/Create'
import ViewCar from '../layout/AutosAdmon/ViewCar'
import { Routes, Route, Navigate } from "react-router-dom";
import ConsumerInf from '../layout/ConsumerAdmon/ConsumerInf';
import MarcaC from '../layout/MarcaAdmon/MarcaC';
import ModifyCar from '../layout/AutosAdmon/Modifycar';
import { AuthProvider } from './AuthProvider';

function Main() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Menu />}>
                    <Route path="Example" element={<Example />} />
                    <Route index element={<Home />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="Register" element={<Register />} />
                    <Route path='ConsumerInf' element={<ConsumerInf />} />
                    <Route path='AdRegister' element={<AdRegister />} />
                    <Route path='AdPassword' element={<AdPassword />} />
                    <Route path="Cars" element={<Cars />} />
                    <Route path="CarsAdmon" element={<CarsAdmon />} />
                    <Route path="MarcaC" element={<MarcaC />} />
                    <Route path="SellsAdmon" element={<SellsAdmon />} />
                    <Route path="CreateCars" element={<CreateCars />} />
                    <Route path="BrandsAdmon" element={<BrandsAdmon />} />
                    <Route path="CreateBrands" element={<CreateBrands />} />
                    <Route path="ViewCar" element={<ViewCar />} />
                    <Route path="ModifyCar" element={<ModifyCar />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Route>
            </Routes>
        </AuthProvider>
    )
}

export default Main
