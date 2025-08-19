import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './comp/Layout';
import Home from './comp/Home';
import Login from './comp/Login';
import Day04_20250812 from './comp/Day04_20250812';
import Day05_20250813 from './comp/Day05_20250813/Day05_20250813';
import Day06_20250814 from './comp/day06_20250814/Day06_20250814';
import Day07_20250818 from './comp/day07_20250818/Day07_20250818';
import MiniBlog from './comp/day08_20250819/mini_blog/MiniBlog';
import styled from 'styled-components';
import PostWritePage from './comp/day08_20250819/mini_blog/page/PostWritePage';
import PostViewPage from './comp/day08_20250819/mini_blog/page/PostViewPage';

const MainTitleText = styled.h1`
	font-size: 28px;
	font-weight: bold;
	text-align: center;
`;

function App() {
	return (
		<>
			<BrowserRouter basename="/react-site/">
				<MainTitleText>REACT 과제 : 이정재</MainTitleText>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/" element={<Home />} />
					<Route path="day04_20250812" element={<Day04_20250812 />} />
					<Route path="day05_20250813" element={<Day05_20250813 />} />
					<Route path="day06_20250814" element={<Day06_20250814 />} />
					<Route path="day07_20250818" element={<Day07_20250818 />} />
					<Route path="mini_blog" element={<MiniBlog />} />
					<Route path="post_write" element={<PostWritePage />} />
					<Route path="post/:postId" element={<PostViewPage />} />
				</Routes>
			</BrowserRouter>
			{/* 
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
			</HashRouter> */}
		</>
	);
}

export default App;
