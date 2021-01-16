import { BrowserRouter } from 'react-router-dom'

import './App.css';
import Header from './header/Header.jsx';
import Content from './content/Content.jsx';
import Footer from './footer/Footer.jsx';

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<Header/>
				<Content/>
				<Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;