import React, { useEffect, useRef, useState } from 'react';

// useRef는 특정 DOM 요소에 직접 접근하여 조작할 때 주로 사용합니다. 예를 들어, input에 포커스를 주거나, 스크롤을 제어할 때 유용합니다.
// 렌더링과 무관한 값 저장: 상태(useState)는 값이 바뀌면 컴포넌트가 다시 렌더링되지만, useRef로 저장한 값은 변경되어도 렌더링이 일어나지 않습니다. 예를 들어, setTimeout의 ID나 이전 props 값을 저장할 때 사용할 수 있습니다.
// useState: 값이 바뀌면 컴포넌트가 다시 렌더링 됩니다.
// useRef: 값이 바뀌어도 다시 렌더링되지 않습니다. 렌더링과 무관한 값을 저장할 때 적합합니다.
const ExUseRef01 = () => {
	// 렌더링 된 횟수를 카운트하기 위해 count 변수에 useRef를 적용한다.
	const [inputValue, setInputValue] = useState('');
	const count = useRef(0);

	// input box에 포커스를 주기 위해 useRef를 사용한다.
	const inputElement = useRef();

	const focusInput = () => {
		inputElement.current.focus();
	};

	// 렌더링될 때마다 count를 증가시켜 준다.
	// 만약 count가 useRef가 아니라면 count가 증가되었기 때문에 다시 렌더링이 발생하고, 카운트가 또 변했기 때문에 또 렌더링 되는 무한 loop에 빠진다.
	useEffect(() => {
		count.current++;
	});

	return (
		<div>
			<input
				type="text"
				ref={inputElement}
				value={inputValue}
				onChange={(event) => setInputValue(event.target.value)}
			/>
			<button onClick={focusInput}>포커스 주기</button>
			<p>입력한 값 : {inputValue} </p>
			<p>렌더링 회수 : {count.current} </p>
		</div>
	);
};

export default ExUseRef01;
