import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Layout from './comp/Layout';
import Home from './comp/Home';
import Login from './comp/Login';
import Day04_20250812 from './comp/Day04_20250812';

function App() {
	return (
		<>
			<h1>과제 : 이정재</h1>
			<BrowserRouter>
				<Routes>
					<Route path="react-site" element={<Layout />} />
					<Route index element={<Home />} />
					<Route path="react-site/login" element={<Login />} />
					<Route
						path="react-site/day04_20250812"
						element={<Day04_20250812 />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
