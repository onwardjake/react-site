import React, { useState, memo, useCallback } from 'react';

/*
useCallback은 React에서 제공하는 Hook 중 하나로, 함수 자체를 메모이제이션(memoization) 하여
불필요하게 함수를 새로 생성하는 것을 방지하는 역할을 합니다.

즉, 특정 값(의존성)이 변경되지 않는 한 동일한 함수 객체를 재사용합니다.

const memoizedCallback = useCallback(
    () => {
      // 실행할 함수 내용
    },
    [의존성_배열]
  );

  첫 번째 인자: 메모이제이션할 함수
  두 번째 인자: 의존성 배열
   - 배열 내 값이 변경될 때만 함수를 새로 생성합니다.
   - 그렇지 않으면 기존에 생성해둔 함수 객체를 사용합니다.
*/

const Todos = ({ todos, addTodo }) => {
	console.log('Child render : Todos component');

	return (
		<div>
			<h3>할 일 목록</h3>
			{todos.map((todo, index) => (
				<p key={index}>{todo}</p>
			))}
			<button onClick={addTodo}>할 일 추가</button>
		</div>
	);
};
const MemoizedTodos = memo(Todos);

const ExUseCallback01 = () => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);

	const increment = () => {
		/*
		=== 화살표 함수를 사용하는 이유 (c) => c+1
        이 방식은 함수형 업데이트라고 합니다.
        이 함수의 매개변수 c는 항상 최신 state 값을 의미합니다.
        즉, 여러 번 연속해서 상태를 업데이트하는 상황에서도 이전 업데이트 결과가 반영된 값으로 정확하게 동작합니다.
        상태(state)가 이전 상태에 따라 변경되어야 할 때 반드시 사용해야 합니다.

        setCount(count + 1);
        setCount(count + 1);
        위의 코드를 실행하면, 두 번 호출해도 실제로는 count가 1만 증가합니다.
        왜냐하면 두 줄 다 처음의 count 값을 기준으로 1을 더하기 때문입니다.

        setCount((c) => c + 1);
        setCount((c) => c + 1);
        위의 코드는 첫 번째 호출에서 최신 값이 1 증가하고,
        번째 호출에서 다시 1이 증가하여 총 2가 올라가게 됩니다.
        */
		setCount((c) => c + 1);
	};

	// const addTodo = () => {
	// 	setTodos((t) => [...t, 'New Todo']);
	// };

	const addTodo = useCallback(() => {
		setTodos((t) => [...t, 'New Todo']);
	}, [todos]);

	return (
		<>
			<MemoizedTodos todos={todos} addTodo={addTodo} />
			<p></p>
			<div>
				카운트 : {count}
				<button onClick={increment}>증가</button>
			</div>
		</>
	);
};

export default ExUseCallback01;
