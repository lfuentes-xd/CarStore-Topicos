import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards'


function ListCards() {
    const [carData, setCarData] = useState({})
    useEffect(() => {
        const getCars = async () => {
            await axios.get('http://localhost/CarSore-TopicClass/public/api/Car_index')
                .then(function (response) {
                    // handle success
                    console.log(response);
                    setCarData(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
        getCars()
    }, [])

    if (!carData.length) return
    <span className="visually-hidden">Loading...</span>

    return (
        <>
            {carData.map((car) => (
                <Cards
                    key={car.id}
                    model={car.Modelo}
                    year={car.año}
                    color={car.Color}
                    type={car.Carroceria}
                    fuel={car.t_combustible}
                    disponibility={car.Existencias}
                    // image={Image}
                />

            ))}

        </>
    );
}

export default ListCards
