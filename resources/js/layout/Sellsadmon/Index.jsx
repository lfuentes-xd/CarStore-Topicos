import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from 'react';
import { AuthContext } from "../../components/AuthProvider";

function indexSell() {
    const { auth } = useContext(AuthContext);
    const token = auth.token;
    const [sellData, setSellData] = useState([]);
    const [userData, setUserData] = useState({});
    const [filteredSales, setFilteredSales] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (token) {
                    const userResponse = await axios.get("http://localhost/CarStore-Topicos/public/api/user_index", {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    setUserData(userResponse.data);
                }

                const carResponse = await axios.get('http://localhost/CarStore-Topicos/public/api/ventas_index', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setSellData(carResponse.data);
            } catch (error) {
                console.log("Error: ", error);
            }
        };

        fetchData();
    }, [token]);

    useEffect(() => {
        const userId = Number(userData.id);
        const userRole = Number(userData.role);

        if (userRole === 1) {
            const filteredCars = sellData.filter(ventaData => ventaData.Id_foreign_key === userId);
            setFilteredSales(filteredCars);
        } else if (userRole === 2) {
            setFilteredSales(sellData);
        }
    }, [userData, sellData]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredSalesBySearch = filteredSales.filter(venta => {
        if (userData.role === 2) {
            return venta.Id_foreign_key.toString().toLowerCase().includes(searchTerm.toLowerCase());
        } else if (userData.role === 1) {
            return venta.Id_foreign_keycars.toString().toLowerCase().includes(searchTerm.toLowerCase());
        }
        return false;
    });

    return (
        <>
            <div className="container my-5 mx-auto">
                <h1 className="text-xl">Panel de administracion de ventas</h1>
                <div className="my-5">
                    <input
                        type="text"
                        placeholder="Buscar por ID de Comprador..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="p-2 border border-black"
                    />
                </div>
                <div className="flex flex-col mt-5">
                    <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <div className="flex justify-center items-center">
                                    <table className="min-w-full border-collapse">
                                        <thead className="bg-gray-200 border-b">
                                            <tr>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-3 text-left">
                                                    Id
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-3 text-left">
                                                    Id del Comprador
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-3 text-left">
                                                    Id del carro
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-3 text-left">
                                                    Monto
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredSalesBySearch.map((venta) => (
                                                <tr key={`${venta.id}-${venta.id_usuario_fk}`}>
                                                    <td className="border px-6 py-3">{venta.id}</td>
                                                    <td className="border px-6 py-3">{venta.Id_foreign_key}</td>
                                                    <td className="border px-6 py-3">{venta.Id_foreign_keycars}</td>
                                                    <td className="border px-6 py-3">{venta.amount}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default indexSell;
