import './Home.css';
import {Link} from 'react-router-dom'

import {ReactComponent as FlowerImage} from './assets/cherry-blossom.svg'

function Home() {
	return (
		<div className="content home-container">
			<div className="home-content">
				<div className="home-content-info">
					<span className="home-content-info-title">Leafmap</span>
					<span className="home-content-info-description">Base de dados sobre Plantas</span>
					<Link to="/plantas/todas" className="home-content-info-link">
						<button className="home-content-info-btn">Iniciar Navegação</button>
					</Link>
				</div>
				<FlowerImage className="home-content-image"/>
			</div>
		</div>
	);
}

export default Home;