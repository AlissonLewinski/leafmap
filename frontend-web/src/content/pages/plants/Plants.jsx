import {useState} from 'react';

import './Plants.css';
import CategoriesSidebar from './components/CategoriesSidebar'
import CategoriesButton from './components/CategoriesButton';
import PlantsList from './components/PlantsList';

function Plants() {

	const [isSidebarVisible, setSidebarVisibility] = useState(false)

	return (
		<div className="content plants-page-container">
			<CategoriesSidebar onToggleClick={e => setSidebarVisibility(!isSidebarVisible)} isVisible={isSidebarVisible}/>
			<div className="plants-list-container">
				<CategoriesButton onToggleClick={e => setSidebarVisibility(!isSidebarVisible)} isVisible={!isSidebarVisible}/>
				<div className="plants-list-title-container">
					<h1 className="plants-list-title">Plantas - Todas</h1>
				</div>
				<PlantsList/>
			</div>
		</div>
	);
}

export default Plants;
