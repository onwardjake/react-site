import React, { useState } from 'react';

const MyForm = () => {
	const [inputs, setInputs] = useState({});

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`${inputs.username}`);
		console.log(`입력값이 제출되었습니다 : ${inputs.age}`);
	};

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
		console.log(
			`handleChange. name : ${name}, value : ${value}, inputs : ${inputs.username}`
		);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Enter your name : </label>
				<input
					type="text"
					name="username"
					value={inputs.username || ''}
					onChange={handleChange}
				/>
				<label>Enter your age :</label>
				<input
					type="number"
					name="age"
					value={inputs.age || ''}
					onChange={handleChange}
				/>
				<input type="submit" />
			</form>
		</div>
	);
};

export default MyForm;
