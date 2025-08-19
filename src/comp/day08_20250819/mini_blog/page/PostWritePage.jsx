import React, { useState } from 'react';
import TextInput from '../ui/TextInput';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';

const Wrapper = styled.div`
	padding: 16px;
	width: calc(100% - 32px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	width: 100%;
	max-width: 720px;

	:not(:last-child) {
		margin-bottom: 16px;
	}
`;

const PostWritePage = (props) => {
	const navigate = useNavigate();
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	return (
		<>
			<hr />
			<Wrapper>
				<Container>
					<h2>블로그 포스트를 작성합니다.</h2>
					<TextInput
						height={20}
						value={title}
						onChange={(event) => {
							setTitle(event.target.value);
						}}
					/>

					<TextInput
						height={400}
						value={content}
						onChange={(event) => {
							setContent(event.target.value);
						}}
					/>

					<Button
						title={'저장하기'}
						onClick={() => {
							navigate('/mini_blog');
						}}
					/>
				</Container>
			</Wrapper>
		</>
	);
};

export default PostWritePage;
