import React from 'react';
import { useState, useEffect } from 'react';

const ExUseEffect02 = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log(`count 값이 바뀔 때마다 실행: count = ${count}`);
	});

	return (
		<div>
			<p>카운트 : {count}</p>
			<button onClick={() => setCount(count + 1)}>카운트 증가</button>
			<p>
				useEffect의 2번째 파라미터를 비워두어, 카운트가 증가하여 다시
				렌더링될 때마다 다시 실행된다
				<br />
				개발자도구의 console log를 확인해보세요.
			</p>
		</div>
	);
};

export default ExUseEffect02;
