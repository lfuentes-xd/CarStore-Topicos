import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards'


function ListCards() {
    const [carData, setCarData] = useState({})
    useEffect(() => {
        const getCars = async () => {
            await axios.get('http://localhost/CarStore-Topicos/public/api/Car_index')
                .then(function (response) {
                    // handle success
                    console.log(response);
                    console.log('API Response:', response.data);
                    setCarData(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    console.error('API Error:', error);

                })
                .finally(function () {
                    // always executed
                });
        }
        getCars()
    }, []);

    console.log("ver id" +carData.id);
    if (!carData.length) return
    <span className="visually-hidden">Loading...</span>

    return (
        <>
            {carData.map((car) => {
                console.log('ID:', car.id); 
                return(
                
                <Cards
                    id={car.id}
                    model={car.Modelo}
                    year={car.año}
                    color={car.Color}
                    type={car.Carroceria}
                    fuel={car.t_combustible}
                    disponibility={car.Existencias}
                    image={car.Image}
                    Km={car.Km}
                    version={car.version}
                    TM={car.TM}
                    liters={car.liters}
                    price={car.price}

                />
                )

})}

        </>
    );
}

export default ListCards
