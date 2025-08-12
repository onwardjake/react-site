import { useState } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h2>카운터 : {count}</h2>
			<button onClick={() => setCount(count + 1)}>카운트 증가</button>
			<button onClick={() => setCount(count - 1)}>카운트 감소</button>
		</>
	);
}
