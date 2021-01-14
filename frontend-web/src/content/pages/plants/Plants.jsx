import {useEffect, useState} from 'react';

import './Plants.css';
import { fetchPlants } from '../../../api';
import CategoriesSidebar from './components/CategoriesSidebar'
import CategoriesButton from './components/CategoriesButton';
import PlantsList from './components/PlantsList';
import { removeAccents } from '../../../util';

function Plants() {

	const path = window.location.pathname.substring(9)

	const [isSidebarVisible, setSidebarVisibility] = useState(false)
	const [category, setCategory] = useState(path.substring(0,1).toUpperCase().concat(path.substring(1)))
	const [plants, setPlants] = useState([])

	useEffect(() => {
		fetchPlants(removeAccents(path.toLowerCase()))
			.then(res => setPlants(res.data.plants))
	}, [])

	const handleCategoryClick = (name) => {
		setCategory(name)
		fetchPlants(removeAccents(name.toLowerCase()))
			.then(res => setPlants(res.data.plants))
	}

	return (
		<div className="content plants-page-container">
			<CategoriesSidebar onToggleClick={e => setSidebarVisibility(!isSidebarVisible)} onCategoryClick={handleCategoryClick} isVisible={isSidebarVisible}/>
			<div className="plants-list-container">
				<CategoriesButton onToggleClick={e => setSidebarVisibility(!isSidebarVisible)} isVisible={!isSidebarVisible}/>
				<div className="plants-list-title-container">
					<h1 className="plants-list-title">{`Plantas ${category ? `- ${category}` : ''}`}</h1>
				</div>
				<PlantsList plants={plants}/>
			</div>
		</div>
	);
}

export default Plants;
