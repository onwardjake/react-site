import React, { useMemo, useState } from 'react';

/*
useMemo는 React에서 제공하는 Hook 중 하나로, **비싼 연산(계산 비용이 많이 드는 작업)**의 결과를 메모리에 저장(memoization)해두었다가, 필요할 때만 다시 계산하여 성능을 최적화하는 데 사용됩니다.
즉, 특정 값이 바뀌지 않는 한, 이전에 계산한 값을 재사용함으로써 불필요한 연산을 줄여줍니다.

const memoizedValue = useMemo(() => {
    // 어떤 복잡한 연산
    return 계산결과;
  }, [의존성배열]);

첫 번째 인자: 함수(콜백)
 - 이 함수의 리턴값이 메모이제이션(저장)됩니다.
두 번째 인자: 의존성 배열
 - 배열에 있는 값이 바뀔 때만 함수를 다시 실행하여 값을 재계산합니다.
 - 바뀌지 않으면 이전 값을 그대로 반환합니다.
*/

const users = [
	{ id: 1, name: 'Jake', active: false },
	{ id: 2, name: 'Karynn', active: true },
	{ id: 3, name: 'Hugo', active: true },
];

const ExUseMemo01 = () => {
	const [showActive, setShowActive] = useState(false);

	// useMemo 훅을 사용해서 showActive 값이 변경되지 않는 한 로직을 다시 수행하지 않는다
	const filteredUsers = useMemo(() => {
		console.log(`filteredUsers`);
		// 유저 객체에서 showActive로 필터링한 객체를 리턴한다.
		// filter함수는 array의 각 항목에 대해 함수를 돌면서 pass된 항목만 새 array로 만든다. 기존 array는 변경되지 않는다.
		// 즉, 각 항목에 대해 (user) => user.active === showActive 이 함수를 통화하는 항목만으로 구성된 array를 만들어서 리턴한다.
		return users.filter((user) => user.active === showActive);
	}, [showActive]);

	return (
		<div>
			<button onClick={() => setShowActive(!showActive)}>
				{showActive ? '비활성' : '활성'} 사용자를 보려면 클릭하세요.
			</button>
			<ul>
				{filteredUsers.map((u) => (
					<li key={u.id}>{u.name}</li>
				))}
			</ul>
		</div>
	);
};

export default ExUseMemo01;
