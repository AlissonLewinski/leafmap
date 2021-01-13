import './CategoriesSidebar.css';
import {ReactComponent as CloseIcon} from '../assets/close.svg'
import { useEffect, useState } from 'react';
import { fetchCategories } from '../../../../api';
import CategoryOption from './CategoryOption';

function CategoriesSidebar(props) {

	const [categories, setCategories] = useState([])

	useEffect(() => {
		fetchCategories()
			.then(res => setCategories(res.data))
	})

	return (
		<div className={`categories-container ${props.isVisible ? '' : 'categories-container-hidden'}`}>
			<button className="categories-container-close-button" onClick={props.onToggleClick}>
				<CloseIcon className="categories-container-close-icon"/>
			</button>
			<h2 className="categories-title">Categorias</h2>
			<div className="categories">
				{categories.map(cat => (
					<CategoryOption name={cat.name}/>
				))}
			</div>
		</div>
	);
}

export default CategoriesSidebar;
