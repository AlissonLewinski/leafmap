import {useEffect, useState} from 'react';

import './Plants.css';
import { fetchPlants } from '../../../api';
import CategoriesSidebar from './components/CategoriesSidebar.jsx'
import CategoriesButton from './components/CategoriesButton.jsx';
import PlantsList from './components/PlantsList.jsx';
import { removeAccents } from '../../../util';

function Plants(props) {

	const path = props.match.params.category

	const [isSidebarVisible, setSidebarVisibility] = useState(false)
	const [category, setCategory] = useState('')
	const [plants, setPlants] = useState([])

	const siteUrl = process.env.REACT_APP_SITE_URL
	useEffect(() => {
		fetchPlants(removeAccents(path.toLowerCase()))
			.then(res => {
				if(res.data.plants.length === 0) {
					window.location.replace(`${process.env.REACT_APP_SITE_URL}/plantas/todas`)
				} else {
					setPlants(res.data.plants)
					setCategory(path.substring(0,1).toUpperCase().concat(path.substring(1)))
				}
			})
	}, [])

	const handleCategoryClick = (name) => {
		setCategory(name)
		fetchPlants(removeAccents(name.toLowerCase()))
			.then(res => {
				if(res.data.plants.length === 0) {
					window.location.replace(`${process.env.REACT_APP_SITE_URL}/plantas/todas`)
				} else {
					setPlants(res.data.plants)
				}
			})
	}

	return (
		<div className="content plants-page-container">
			<CategoriesSidebar onToggleClick={e => setSidebarVisibility(!isSidebarVisible)} onCategoryClick={handleCategoryClick} isVisible={isSidebarVisible}/>
			<div className="plants-list-container" onClick={e => setSidebarVisibility(!isSidebarVisible)}>
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
