import React, { useReducer } from 'react';

// useReducer는 React에서 상태 관리를 위해 제공되는 Hook 중 하나입니다. 특히 복잡한 상태 관리가 필요할 때 효과적으로 사용할 수 있습니다.
// useState는 간단한 상태 관리(단일 값, 빠른 업데이트)에서 간편하게 사용할 수 있습니다.
// useReducer는 상태가 여러 개이거나, 상태 변경 로직이 복잡할 때 더 적합합니다.

// 함수 호출 흐름
// dispatch({ type: 'INCREMENT' })  // 사용자가 호출
// reducer(currentState, { type: 'INCREMENT' })  // React 내부에서 자동 호출
// 새로운 state 반환

const reducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { count: state.count + 1 };
		case 'DECREMENT':
			return { count: state.count - 1 };
		default:
			return state;
	}
};

const ExUseReducer01 = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	return (
		<>
			<h2>Count : {state.count}</h2>
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>
				증가
			</button>
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>
				감소
			</button>
		</>
	);
};

export default ExUseReducer01;
