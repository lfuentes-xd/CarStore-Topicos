import React from 'react';
import Menu from './Menu'
import Home from './Home';
import Example from './Example';
import Login from '../layout/login';
import { Routes, Route, Navigate } from "react-router-dom";

function Main() {
    return (
        <Routes>
            <Route path="/" element={<Menu/>}>
                <Route path="Example" element={<Example/>} />
                <Route path="Home" element={<Home/>} />
                <Route path="Login" element={<Login/>} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
        </Routes>
    )
}

export default Main
