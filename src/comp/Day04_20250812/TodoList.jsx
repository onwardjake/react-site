import { useState } from 'react';

export default function TodoList() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);

	// todos에 todo를 추가한다.
	const addTodo = () => {
		if (todo.trim()) {
			// todos에 새로 입력한 todo를 추가한다
			setTodos([...todos, todo]);
			// todo를 초기화 한다
			setTodo('');
		}
	};

	return (
		<>
			<h2>To Do List</h2>
			{/* HTML의 표준에서는 onChange가 <input type="text">요소에서는 focus가 빠져나갈 때만(blur 시) 실행되는 반면,
			React에서는 입력값이 변경될 때마다(on input event) 바로바로 호출됩니다. */}
			<input
				type="text"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder="할 일을 입력하세요"
			/>
			<button onClick={addTodo}>추가하기</button>
			<ul>
				{todos.map((item, index) => {
					return <li>{item}</li>;
				})}
			</ul>
		</>
	);
}
