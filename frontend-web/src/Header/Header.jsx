import './Header.css';
import { ReactComponent as CherryBlossom } from './assets/header-cherry-blossom.svg'

function Header() {
	return (
		<header className="header">
			<a href="" className="header-logo">
				<CherryBlossom className="header-logo-cherry-blossom"/>
				<span className="header-logo-name">LeafMap</span>
			</a>
		</header>
	);
}

export default Header;
