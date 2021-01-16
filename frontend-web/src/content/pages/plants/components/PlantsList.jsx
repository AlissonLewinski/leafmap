import PlantCard from './PlantCard.jsx';
import './PlantsList.css';

function PlantsList(props) {

    /*const [plants, setPlants] = useState([])

    useEffect(() => {
        fetchPlants(props.category)
            .then(res => setPlants(res.data.plants))
    })*/

	return (
        <div className="plants-list">
            {props.plants.map(plant => (
                <PlantCard name={plant.name} scientific_name={plant.scientific_name} img={plant.img} key={plant.id}/>
            ))}
        </div>
	);
}

export default PlantsList;
