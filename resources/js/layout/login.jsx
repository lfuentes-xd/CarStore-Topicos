import React from 'react';
import Icon from '../components/Icon';

const LoginForm = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/2 h-screen lg:block flex items-center justify-center">
                <div className="flex items-center justify-center my-60 text-black">
                    <Icon className="text-5xl font-bold"></Icon>
                </div>
            </div>


            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <form action="#" method="POST">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600">Usuario</label>
                        <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">Contraseña</label>
                        <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>
                    {/* <div className="mb-4 flex items-center">
                        <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
                        <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
                    </div> */}
                    {/* <div className="mb-6 text-blue-500">
                        <a href="#" className="hover:underline">Forgot Password?</a>
                    </div> */}
                    <button type="submit" className="bg-black hover:bg-gray-800 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                </form>
                <div className="mt-6 text-blue-500 text-center">
                    <a href="#" className="hover:underline">¿No tienes cuenta? Creala dando aqui</a>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
