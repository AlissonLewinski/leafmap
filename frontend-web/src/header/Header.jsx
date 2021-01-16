import './Header.css';
import {ReactComponent as CherryBlossom} from './assets/header-cherry-blossom.svg'
import {Link} from 'react-router-dom'

function Header() {
	return (
		<header className="header">
			<Link to="/" className="header-logo">
				<CherryBlossom className="header-logo-cherry-blossom"/>
				<span className="header-logo-name">LeafMap</span>
			</Link>
		</header>
	);
}

export default Header;
