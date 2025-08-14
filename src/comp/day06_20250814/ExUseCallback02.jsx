import React, { useState, useCallback, useEffect } from 'react';

const ExUseCallback02 = () => {
	const [count, setCount] = useState(0);

	const logCount = useCallback(() => {
		console.log(`현재 카운트 : ${count}`);
	}, [count]);

	useEffect(() => {
		logCount();
		console.log(`useEffect에서 logCount함수 호출함`);
	}, [logCount]);

	return (
		<>
			<p>Count : {count}</p>
			<button onClick={() => setCount((c) => c + 1)}>증가</button>
		</>
	);
};

export default ExUseCallback02;
