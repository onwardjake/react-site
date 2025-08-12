import React, { useEffect, useState } from 'react';

const ExUseEffect05 = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const hResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', hResize);
		console.log('윈도우 넓이 리사이즈 리스너 등록');

		return () => {
			window.removeEventListener('resize', hResize);
			console.log('윈도우 넓이 리사이즈 리스너 해제');
		};
	}, []);

	return (
		<div>
			<h2>현재창의 width : {width}</h2>
		</div>
	);
};

export default ExUseEffect05;
