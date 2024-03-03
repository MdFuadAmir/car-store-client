import { useLoaderData } from "react-router-dom";
import CarsCard from "../CarsCard/CarsCard";
import { useState } from "react";


const Home = () => {
    const lodedcar = useLoaderData();
    const [cars,setCars] =useState(lodedcar);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-8">
                {
                    cars.map(car => <CarsCard key={car._id} 
                        car={car}
                        
                        ></CarsCard>)
                }
            </div>
            
        </div>
    );
};

export default Home;