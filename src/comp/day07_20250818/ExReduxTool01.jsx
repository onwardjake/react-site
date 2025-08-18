import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	increment,
	decrement,
	incrementByAmount,
} from '../../js/store_redux_slice';

const ExReduxTool01 = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<p>카운트 : {count}</p>
			<button onClick={() => dispatch(increment())}>증가하기</button>
			<button onClick={() => dispatch(decrement())}>감소하기</button>
			<button onClick={() => dispatch(incrementByAmount(5))}>
				5 증가하기
			</button>
		</>
	);
};

export default ExReduxTool01;
