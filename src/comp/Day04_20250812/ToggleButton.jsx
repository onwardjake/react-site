import { useState } from 'react';

export default function ToggleButton() {
	const [isOn, setIsOn] = useState(false);

	return (
		<>
			{/* isOn은 boolean 값이므로 {isOn} 으로 값을 출력할 수 없다 */}
			<button onClick={() => setIsOn(!isOn)}>
				{isOn ? 'ON' : 'OFF'} 버튼
			</button>
		</>
	);
}
