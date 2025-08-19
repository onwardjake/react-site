import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	padding: 8px 16px;
	font-size: 16px;
	border-width: 1px;
	border-radius: 8px;
	cursor: pointer;
	display: block;
`;

const Button = (props) => {
	const { title, onClick } = props;

	// 버튼 안에 title 값이 존재하면 그 값을 보여주고, 존재하지 않으면 기본값인 'button'을 표시한다.
	return <StyledButton onClick={onClick}>{title || 'button'}</StyledButton>;
};

export default Button;
