import React, { useState, useEffect } from 'react';

const ExUseEffect03 = () => {
	const [seconds, setSeconds] = useState(0);

	// 컴포넌트가 처음 마운트될 때만 실행하고, 언마운트될 때만 정리(clean up)하고 싶으시다면 의존성 배열을 빈 배열로 두셔야 합니다.
	useEffect(() => {
		const timer = setInterval(() => {
			// setSeconds(seconds + 1);
			setSeconds((prevSeconds) => prevSeconds + 1);
		}, 1000);

		// 언마운트될 때 interval을 종료한다.
		return () => {
			clearInterval(timer);
			console.log('Interval 종료');
		};
	}, []);

	return (
		<div>
			<h2>초시계 : {seconds} 초 지났습니다.</h2>
		</div>
	);
};

export default ExUseEffect03;
