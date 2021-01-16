import PlantCard from './PlantCard.jsx';
import './PlantsList.css';

function PlantsList(props) {

	return (
        <div className="plants-list" onClick={e => props.handleClick()}>
            {props.plants.map(plant => (
                <PlantCard name={plant.name} scientific_name={plant.scientific_name} img={plant.img} key={plant.id}/>
            ))}
        </div>
	);
}

export default PlantsList;
