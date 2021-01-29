import './Header.css';
import { ReactComponent as CherryBlossom } from './assets/header-cherry-blossom.svg'
import { Link } from 'react-router-dom'
import UserDropdown from './UserDropdown';

function Header(props) {
	
	return (
		<header className="header">
			<Link to="/" className="header-logo">
				<CherryBlossom className="header-logo-cherry-blossom" />
				<span className="header-logo-name">LeafMap</span>
			</Link>
			<UserDropdown />
		</header>
	)
}

export default Header
