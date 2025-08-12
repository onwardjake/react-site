import React, { useEffect, useState } from 'react';

const ExUseEffect04 = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);

	return (
		<div>
			<h2>Fetch로 데이터 가져오기</h2>
			<ul>
				{posts.map((item) => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</div>
	);
};

export default ExUseEffect04;
