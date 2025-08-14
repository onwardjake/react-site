import React, { createContext, useContext, useState } from 'react';

// To create context, you must Import createContext and initialize it
const UserContext = createContext();

const ExUseContext01 = () => {
	const [user, setUser] = useState('Jake');

	return (
		<div>
			{/* Next we'll use the Context Provider to wrap the tree of components that need the state Context. */}
			<UserContext.Provider value={user}>
				<h1>{`Hello ${user}!`}</h1>
				<Component2 />
			</UserContext.Provider>
		</div>
	);
};

function Component2() {
	return (
		<>
			<h2>Component 2</h2>
			<Component3 />
		</>
	);
}

function Component3() {
	return (
		<>
			<h2>Component 3</h2>
			<Component4 />
		</>
	);
}

function Component4() {
	// In order to use the Context in a child component, we need to access it using the useContext Hook.
	// First, include the useContext in the import statement: 사용할 Component에서 import {useContext} from "react";를 해줘야 한다.
	// Then you can access the user Context in all components:
	const user = useContext(UserContext);

	return (
		<>
			<h2>Component 4</h2>
			<h2>{`Hello, ${user} again!`}</h2>
		</>
	);
}

export default ExUseContext01;
