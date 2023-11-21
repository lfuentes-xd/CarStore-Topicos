import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';

function ListCards() {
    const [carData, setCarData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getCars = async () => {
            await axios.get('http://localhost/CarStore-Topicos/public/api/Car_index')
                .then(function (response) {
                    console.log(response);
                    console.log('API Response:', response.data);
                    setCarData(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                    console.error('API Error:', error);
                });
        }
        getCars();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCars = carData.filter(car =>
        car.Model.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className='container'>
                <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Buscar por modelo..." className="mt-1 block p-2 border border-black" />
                <div className='flex flex-wrap justify-around'>
                    {filteredCars.length ? (
                        filteredCars.map((car) => (
                            <Cards
                                key={car.id}
                                id={car.id}
                                model={car.Model}
                                year={car.year}
                                colour={car.Colour}
                                type={car.type}
                                fuel={car.fuel}
                                disponibility={car.Available}
                                image={car.Image}
                                Km={car.Km}
                                version={car.version}
                                TM={car.TM}
                                liters={car.liters}
                                price={car.price}
                            />
                        ))
                    ) : (
                        <span className="visually-hidden">Loading...</span>
                    )}
                </div>
            </div>
        </>
    );
}

export default ListCards;
