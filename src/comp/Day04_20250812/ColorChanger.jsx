import { useState } from 'react';

export default function ColorChanger() {
	const [color, setColor] = useState('red');

	return (
		<>
			{/* style에 2개의 중괄호(curly brace)를 사용한 이유 */}
			{/* 첫 번째(바깥쪽) 중괄호는 JSX에서 자바스크립트 변수나 객체를 사용하기 위해 사용 */}
			{/* 두 번째(안쪽) 중괄호는 style 속성은 객체 형태로 값을 받기 때문에 사용. ex. {color: 'blue'} */}
			<h2 style={{ color }}>색상 변경 (CSS)</h2>
			<button onClick={() => setColor('red')}>빨강</button>
			<button onClick={() => setColor('blue')}>파랑</button>
			<button onClick={() => setColor('yellow')}>노랑</button>
		</>
	);
}
