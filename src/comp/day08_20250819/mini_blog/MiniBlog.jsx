import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainPage from './page/MainPage';

const MiniBlog = () => {
	const navigate = useNavigate();

	return (
		<>
			<h2>Jake's Mini blog (Day 08 - 20250819)</h2>
			<button
				onClick={() => {
					navigate('/');
				}}
			>
				과제 Home으로 이동
			</button>
			<hr />
			<MainPage />
		</>
	);
};

export default MiniBlog;
