import './CategoryOption.css';
import {Link} from 'react-router-dom'
import { removerAccents } from '../../../../util';

function CategoryOption(props) {

	return (
		<Link to={`/plantas/${removerAccents(props.name.toLowerCase())}`} className="category-link">
            <div className="category-option">
                <h5 className="category-name">{props.name}</h5>
            </div>
        </Link>
	);
}

export default CategoryOption;
