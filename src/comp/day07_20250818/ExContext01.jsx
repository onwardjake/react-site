import React from 'react';
import ExContextProvider, { useGlobal } from './ExContextProvider';

const ExContext01 = () => {
	//  useGlobal은 useContext로 만든 커스텀 훅이다.
	const { count, setCount } = useGlobal();
	return (
		<>
			<p>카운트 : {count}</p>
			<button onClick={() => setCount((c) => c + 1)}>증가하기</button>
		</>
	);
};

export default ExContext01;
