import React, { createContext, useContext, useState } from 'react';

// 1. context 생성
const GlobalContext = createContext();

// 2. provider 생성
const ExContextProvider = ({ children }) => {
	const [count, setCount] = useState(0);

	return (
		<>
			<GlobalContext.Provider value={{ count, setCount }}>
				{children}
			</GlobalContext.Provider>
		</>
	);
};

export default ExContextProvider;

// 3. useContext : 커스텀 훅으로 설정
export const useGlobal = () => useContext(GlobalContext);
