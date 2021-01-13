import { useEffect, useState } from 'react';
import { fetchPlants } from '../../../../api';
import PlantCard from './PlantCard';
import './PlantsList.css';

function PlantsList(props) {

    const [plants, setPlants] = useState([])

    useEffect(() => {
        fetchPlants()
            .then(res => setPlants(res.data.plants))
    })

	return (
        <div className="plants-list">
            {plants.map(plant => (
                <PlantCard name={plant.name} scientific_name={plant.scientific_name} img={plant.img}/>
            ))}
        </div>
	);
}

export default PlantsList;
