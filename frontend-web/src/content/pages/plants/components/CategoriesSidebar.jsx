import './CategoriesSidebar.css';
import {ReactComponent as CloseIcon} from '../assets/close.svg'

function CategoriesSidebar(props) {

	return (
		<div className={`categories-container ${props.isVisible ? '' : 'categories-container-hidden'}`}>
			<div className="categories-container-close-button-container">
				<button className="categories-container-close-button" onClick={props.onToggleClick}>
					<CloseIcon className="categories-container-close-icon"/>
				</button>
			</div>
		</div>
	);
}

export default CategoriesSidebar;
