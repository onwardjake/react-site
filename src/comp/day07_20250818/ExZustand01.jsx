import React from 'react';
import { store_zustand } from '../../js/store.zustand';

const ExZustand01 = () => {
	const { count, increment, decrement, reset } = store_zustand();

	return (
		<>
			<p>카운트 : {count}</p>
			<button onClick={increment}>증가하기</button>
			<button onClick={decrement}>감소하기</button>
			<button onClick={reset}>리셋하기</button>
		</>
	);
};

export default ExZustand01;
