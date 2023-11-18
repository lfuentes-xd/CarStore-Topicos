import PrimaryButton from "../../components/PrimaryButton"
import EditIcon from "../../../Images/Icons/Details.png"
import Plusicon from "../../../Images/Icons/add.png"
import DeleteIcon from "../../../Images/Icons/delete.png"
import LinktoButton from "../../components/LinktoButton"
import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useContext } from 'react';
import { AuthContext } from "../../components/AuthProvider"

function indexSell() {
    const { auth } = useContext(AuthContext);
    const token = auth.token;
    const [SellData, setSellData] = useState([]);

    const [userData, setUserData] = useState({});//para el token
    const [filteredCars, setFilteredCars] = useState([]);

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
                    // console.log("Datos de usuario:", userResponse.data);
                }

                const carResponse = await axios.get('http://localhost/CarStore-Topicos/public/api/ventas_index', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
                );
                setSellData(carResponse.data);
                // console.log("Datos de ventas:", carResponse.data, "ventadata:", ventasData.data);


                // Verificar si ventasData se ha actualizado correctamente
                //  console.log("VentasData actualizado:", ventasData);

            } catch (error) {
                console.log("Error: ", error);
            }
        };

        fetchData();
    }, [token]);
    useEffect(() => {
        // console.log("VentasData actualizado dos:", ventasData);
    }, [SellData]);



    useEffect(() => {
        // Filtrar autos basados en el ID de usuario
        console.log("userData.id:", userData.id);
        console.log("usedata: ", userData);
        console.log("VentasData antes del filtro:", SellData);

        const userId = Number(userData.id);
        const role = Number(userData.role);
        console.log("const: ", userId);

        if (role == 1) {
            console.log("entro a 1 " + role);
            const filteredCars = SellData.filter(ventaData => {
                console.log("Venta actual:", ventaData);
                console.log("ID de usuario en la venta:", ventaData.Id_foreign_key);
                console.log("ID de usuario actual:", userId);
                return ventaData.Id_foreign_key === userId;
            });
            console.log("datos en if : " + filteredCars);
            setFilteredCars(filteredCars);

        } else if (role == 2) {
            console.log("entro a 2 " + userId)
            const allCars = SellData.filter(ventaData => {
                console.log("Venta actual:", ventaData);
                console.log("ID de usuario en la venta:", ventaData.Id_foreign_key);
                console.log("ID de usuario actual:", userId);
                // Puedes omitir la condición para que todos los elementos se incluyan
                return true;
            });

            console.log("datos en", filteredCars);
            setFilteredCars(allCars);
        }

    }, [SellData, userData]);

    // console.log("datos filtrados", filteredCars);

    return (
        <>
            <div className="container my-5 mx-auto">

                <h1 className="text-xl">Panel de administracion de ventas</h1>
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
                                            {filteredCars.map((venta) => (
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

export default indexSell
