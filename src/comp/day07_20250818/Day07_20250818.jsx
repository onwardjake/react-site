import React from 'react';
import ExContext01 from './ExContext01';
import ExContextProvider from './ExContextProvider';
import ExJs01 from './ExJs01';
import ExZustand01 from './ExZustand01';
import { store_redux } from '../../js/store_redux';
import { Provider } from 'react-redux';
import ExReduxTool01 from './ExReduxTool01';
import { useNavigate } from 'react-router-dom';

const Day07_20250818 = () => {
	const navigate = useNavigate();

	return (
		<>
			<h2>React Day 07 20250818</h2>
			<button
				onClick={() => {
					navigate('/');
				}}
			>
				과제 Home으로 이동
			</button>
			<hr />
			<p>UseContext</p>
			<ExContextProvider>
				<ExContext01 />
			</ExContextProvider>
			<hr />
			<p>store_public.js</p>
			<ExJs01 />
			<hr />
			<p>ZUSTAND</p>
			<ExZustand01 />
			<hr />
			<p>Redux</p>
			<Provider store={store_redux}>
				<ExReduxTool01 />
			</Provider>
		</>
	);
};

export default Day07_20250818;
