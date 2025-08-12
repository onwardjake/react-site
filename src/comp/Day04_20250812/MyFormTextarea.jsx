import React, { useState } from 'react';

const MyFormTextarea = () => {
	const [textarea, setTextarea] = useState('내용을 입력해주세요.');

	const handleChange = (event) => {
		setTextarea(event.target.value);
	};

	return (
		<div>
			<form>
				<textarea value={textarea} onChange={handleChange}></textarea>
			</form>
			<p>
				입력하신 문구는 아래와 같습니다.
				<br />
				{textarea && textarea}
			</p>
		</div>
	);
};

export default MyFormTextarea;
