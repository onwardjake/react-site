import React from 'react';
import ExUseCallback01 from './ExUseCallback01';
import ExUseCallback02 from './ExUseCallback02';
import ExUseCallback03 from './ExUseCallback03';
import ExUseRef02 from './ExUseRef02';
import { useNavigate } from 'react-router-dom';

const Day06_20250814 = () => {
	const navigate = useNavigate();

	return (
		<>
			<h2>React Day 06 20250814</h2>
			<button
				onClick={() => {
					navigate('/');
				}}
			>
				과제 Home으로 이동
			</button>
			<hr />
			<p>UseCallback</p>
			<ExUseCallback01 />
			<hr />
			<p>UseCallback 2</p>
			<ExUseCallback02 />
			<hr />
			<p>UseCallback 3 - 방향키로 숫자 증가시키기</p>
			<ExUseCallback03 />
			<hr />
			<p>UseRef - 카운터 시작/정지 시키기</p>
			<ExUseRef02 />
		</>
	);
};

export default Day06_20250814;
