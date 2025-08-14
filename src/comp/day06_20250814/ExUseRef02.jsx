import React, { useRef, useState } from 'react';

const ExUseRef02 = () => {
	const timerRef = useRef(null);
	const [count, setCount] = useState(0);

	const startTimer = () => {
		if (!timerRef.current) {
			timerRef.current = setInterval(() => {
				setCount((c) => c + 1);
			}, 1000);
		}
	};

	const stopTimer = () => {
		clearInterval(timerRef.current);
		timerRef.current = null;
	};

	return (
		<>
			<p>카운트 : {count}</p>
			<button onClick={startTimer}>카운트 시작</button>
			<button onClick={stopTimer}>카운트 종료</button>
			<button onClick={() => setCount((c) => 0)}>카운트 초기화</button>
		</>
	);
};

export default ExUseRef02;
