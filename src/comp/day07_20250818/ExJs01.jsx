import React, { useState } from 'react';
import { store_public } from '../../js/store_public';

const ExJs01 = () => {
	const [count, setCount] = useState(store_public.count);

	const handleClick = () => {
		store_public.increment();
		setCount(store_public.count);
	};

	return (
		<>
			<p>카운트 : {count}</p>
			<button onClick={handleClick}>증가하기</button>
		</>
	);
};

export default ExJs01;
