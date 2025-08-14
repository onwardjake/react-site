import React, { useState, useCallback, useEffect } from 'react';

const ExUseCallback03 = () => {
	const [count, setCount] = useState(0);

	const handleKeyPress = useCallback((e) => {
		if (e.key === 'ArrowUp') {
			setCount((c) => c + 1);
		}
		if (e.key === 'ArrowDown') {
			setCount((c) => c - 1);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);
		return () => {
			window.removeEventListener('keydown', handleKeyPress);
			console.log(`useEffect return`);
		};
	}, [handleKeyPress]);

	return (
		<>
			<p>Arrow Up/Down 키를 눌러서 카운트를 증가/감소해보세요.</p>
			<p>Count : {count}</p>
		</>
	);
};

export default ExUseCallback03;
