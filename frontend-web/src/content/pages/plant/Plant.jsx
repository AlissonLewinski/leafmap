import {fetchPlant} from '../../../api'
import { useEffect, useState } from 'react'
import './Plant.css'

function Plant(props) {
    
    const [plant, setPlant] = useState({})

    useEffect(() => {
        fetchPlant(props.match.params.plant)
            .then(res => setPlant(res.data))
    },[])

	return (
        <div className="plant-container">
            <h1 className="plant-title">{plant.name}</h1>
            <h2 className="plant-scientific-name"><i>{plant.scientific_name}</i></h2>
            <div className="content" dangerouslySetInnerHTML={{__html: plant.content}}>
                
            </div>
        </div>
	)
}

export default Plant