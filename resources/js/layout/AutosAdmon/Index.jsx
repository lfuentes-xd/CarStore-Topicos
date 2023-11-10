import PrimaryButton from "../../components/PrimaryButton"
import Plusicon from "../../../Images/Icons/add.png"
import DeleteIcon from "../../../Images/Icons/delete.png"
import EditIcon from "../../../Images/Icons/edit.png"
import LinktoButton from "../../components/LinktoButton"
import React, { useEffect, useState } from "react"
import axios from "axios"

function CarsAdmon() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost/CarStore-Topicos/public/api/Car_index');
            setCars(result.data);
        };
        fetchData();
    }, []);

    const deleteCar = async (id) => {
        try {
            const response = await axios.post(`http://localhost/CarStore-Topicos/public/api/car/${id}/delete`);
            if (response.status === 200) {
                // Actualizar la lista de autos después de eliminar
                setCars(cars.filter(car => car.id !== id));
            }
        } catch (error) {
            console.error('Error al eliminar el vehículo', error);
        }
    };

    return (
        <>
            <div className="container my-5 mx-auto">
                <h1 className="text-xl">Panel de administracion de carros</h1>
                <LinktoButton to="/CreateCars" className="my-3 bg-gray-500 text-black">
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
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 ">
                                                A Ñ O
                                            </th>
                                            <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4">
                                                A C C I O N E S
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cars.map((car) => (
                                            <tr key={car.id} className="bg-gray-100 border-b text-center">
                                                <td className="text-sm font-light px-6 py-4 whitespace-nowrap text-gray-900">{car.id}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{car.Modelo}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{car.año}</td>
                                                <td>
                                                    <PrimaryButton className="bg-gray-600 text-black">
                                                        modificar vehiculo
                                                        <img src={EditIcon} alt="" className="ml-2 w-4 h-4" />
                                                    </PrimaryButton>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <PrimaryButton className="bg-gray-600 text-black" onClick={() => deleteCar(car.id)}>
                                                        Eliminar vehiculo
                                                        <img src={DeleteIcon} alt="" className="ml-2 w-4 h-4" />
                                                    </PrimaryButton>
                                                </td>
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

export default CarsAdmon;
