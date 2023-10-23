import { Outlet, Link } from 'react-router-dom';
import Icon from './Icon';

function Menu() {
    return (
        <>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="ml-10 flex items-baseline space-x-4">
                           <Icon></Icon>
                            <Link to="home" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pagina principal</Link>
                            <Link to="ListCards" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Autos</Link>
                            <Link to="" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Usuarios</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <section>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Outlet>

                    </Outlet>
                </div>
            </section>
        </>
    )
}

export default Menu
