import { BrowserRouter } from 'react-router-dom'

import './App.css';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';

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