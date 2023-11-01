import PrimaryButton from "../../components/PrimaryButton"
import Plusicon from "../../../Images/Icons/add.png"
import DeleteIcon from "../../../Images/Icons/delete.png"
import EditIcon from "../../../Images/Icons/edit.png"

function CarsAdmon() {
    return (
        <>
            <div className="container my-5 mx-auto">

                <h1 className="text-xl">Panel de administracion de carros</h1>

                <PrimaryButton className="my-3 bg-gray-500 text-black">
                    Crear registro
                    <img src={Plusicon} alt="" className="ml-2 w-4 h-4" />
                </PrimaryButton>
                <div className="flex flex-col mt-5">
                    <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Id
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Marca
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Descripcion
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                                acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-gray-100 border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <PrimaryButton className="bg-gray-600 text-black">
                                                    modificar vehiculo
                                                    <img src={EditIcon} alt="" className="ml-2 w-4 h-4" />
                                                </PrimaryButton>
                                            </td>
                                            <td>
                                                <PrimaryButton className="bg-gray-600 text-black">
                                                    Eliminar vehiculo
                                                    <img src={DeleteIcon} alt="" className="ml-2 w-4 h-4" />
                                                </PrimaryButton>
                                            </td>
                                        </tr>
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
