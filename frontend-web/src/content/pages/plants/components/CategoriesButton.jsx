import './CategoriesButton.css';
import {ReactComponent as CategoriesIcon} from '../assets/categories.svg'

function CategoriesButton(props) {

	return (
        <button className={`categories-open-button ${props.isVisible ? '' : 'categories-open-button-hidden'}`} onClick={props.onToggleClick}>
            <CategoriesIcon className="categories-open-icon"/>
            Filtrar por Categoria
        </button>
	);
}

export default CategoriesButton;
