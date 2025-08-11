import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Layout from './comp/Layout';
import Home from './comp/Home';
import Login from './comp/Login';

function App() {
	return (
		<>
			<h1>과제 : 이정재</h1>
			<BrowserRouter>
				<Routes>
					<Route path="react-site" element={<Layout />} />
					<Route index element={<Home />} />
					<Route path="react-site/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
