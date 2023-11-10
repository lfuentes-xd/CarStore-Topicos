import Plusicon from "../../../Images/Icons/add.png"
import LinktoButton from "../../components/LinktoButton"
import React, { useEffect, useState } from "react"
import axios from "axios"

function BrandsAdmon() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost/CarStore-Topicos/public/api/Brands_index');
            setCars(result.data);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="container my-5 mx-auto">
                <h1 className="text-xl">Panel de administracion de marcas</h1>
                <LinktoButton to="/CreateBrands" className="my-3 bg-gray-500 text-black">
                    Crear registro
                    <img src={Plusicon} alt="" className="ml-2 w-4 h-4" />
                </LinktoButton>
                <div className="flex flex-col mt-5">
                    <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="bg-white border-b text-center">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                                I D
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                                M A R C A
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cars.map((car) => (
                                            <tr key={car.id} className="bg-gray-100 border-b text-center">
                                                <td className="text-sm font-light px-6 py-4 whitespace-nowrap text-gray-900">{car.id}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{car.Descripción}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandsAdmon;
