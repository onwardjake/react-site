import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Layout from './comp/Layout';
import Home from './comp/Home';
import Login from './comp/Login';
import Day04_20250812 from './comp/Day04_20250812';
import Day05_20250813 from './comp/Day05_20250813/Day05_20250813';
import Day06_20250814 from './comp/day06_20250814/Day06_20250814';
import Day07_20250818 from './comp/day07_20250818/Day07_20250818';

function App() {
	return (
		<>
			<h1>과제 : 이정재</h1>
			<hr />
			<HashRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route
							path="day04_20250812"
							element={<Day04_20250812 />}
						/>
						<Route
							path="day05_20250813"
							element={<Day05_20250813 />}
						/>
						<Route
							path="day06_20250814"
							element={<Day06_20250814 />}
						/>
						<Route
							path="day07_20250818"
							element={<Day07_20250818 />}
						/>
					</Route>
				</Routes>
			</HashRouter>
		</>
	);
}

export default App;
