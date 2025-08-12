import React, { useEffect } from 'react';

const ExUseEffect01 = () => {
	useEffect(() => {
		console.log('The ExUseEffect01 component has been mounted.');
	}, []);

	return (
		<div>
			<h2>안녕 useEffect</h2>
			<p>
				useEffect의 2번째 파라미터에 []를 입력하여, 마운트될 때만
				실행되도록 함<br />
				개발자도구의 console log를 확인해보세요.
			</p>
		</div>
	);
};

export default ExUseEffect01;
