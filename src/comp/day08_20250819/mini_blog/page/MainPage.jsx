import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import data from '../data.json';
import PostList from '../list/PostList';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding: 16px;
	width: calc(100% - 32px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	width: 100%;
	max-width: 720px;

	:not(:last-child) {
		margin-bottom: 16px;
	}
`;

const MainPage = (props) => {
	const navigate = useNavigate();

	return (
		<>
			<Wrapper>
				<Container>
					<h2>제이크의 블로그에 오신 것을 환영합니다!</h2>

					<Button
						title="글 작성하기"
						onClick={() => {
							navigate('/post_write');
						}}
					/>

					<PostList
						posts={data}
						onClickItem={(item) => {
							navigate(`/post/${item.id}`);
						}}
					/>
				</Container>
			</Wrapper>
		</>
	);
};

export default MainPage;
