import { BrowserRouter } from 'react-router-dom'

import './App.css';
import Header from './header/Header.jsx';
import Content from './content/Content.jsx';
import Footer from './footer/Footer.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<BrowserRouter>
			<ToastContainer/>
			<div className="app">
				<Header/>
				<Content/>
				<Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;