import './PlantCard.css';

function PlantCard(props) {

    const defaultImg = 'https://construindodecor.com.br/wp-content/uploads/2019/05/flor-de-lotus-significado.jpg'

	return (
        <div className="plant-card">
            <div className="plant-card-img" style={{backgroundImage: `url(${props.img ? props.img : defaultImg})`}}></div>
            <div className="plant-card-info">
                <span className="plant-card-name">
                    {props.name}
                </span>
                <span className="plant-card-scientific-name">
                    <i>{props.scientific_name}</i>
                </span>
            </div>
        </div>
	);
}

export default PlantCard;
