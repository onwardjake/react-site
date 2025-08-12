import React, { useState } from 'react';

const MyFormSelectbox = () => {
	const [myCar, setMyCar] = useState('BMW');

	const handleChange = (event) => {
		setMyCar(event.target.value);
	};

	return (
		<div>
			<form>
				<select value={myCar} onChange={handleChange}>
					<option value="Hyundai">Hyundai</option>
					<option value="KIA">KIA</option>
					<option value="BMW">BMW</option>
					<option value="Volvo">Volvo</option>
				</select>
			</form>
		</div>
	);
};

export default MyFormSelectbox;
