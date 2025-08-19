import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledUl = styled.ul`
	padding: 0;
`;

const StyledLi = styled.li`
	text-align: left;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&:hover {
		background: lightgrey;
		color: darkblue;
		cursor: pointer;
	}
`;

function Home() {
	const navigate = useNavigate();

	return (
		<>
			<hr />
			<h2>목차</h2>
			<nav>
				<StyledUl>
					{/* <StyledLi
						onClick={() => {
							navigate('/');
						}}
					>
						HOME
					</StyledLi> */}
					<StyledLi
						onClick={() => {
							navigate('/mini_blog');
						}}
					>
						Mini Blog (Day08 20250819)
					</StyledLi>
					<StyledLi
						onClick={() => {
							navigate('/day07_20250818');
						}}
					>
						React Hook (Day07 20250818)
					</StyledLi>
					<StyledLi
						onClick={() => {
							navigate('/day06_20250814');
						}}
					>
						Day06 - 20250814
					</StyledLi>
					<StyledLi
						onClick={() => {
							navigate('/day05_20250813');
						}}
					>
						Day05 - 20250813
					</StyledLi>
					<StyledLi
						onClick={() => {
							navigate('/day04_20250812');
						}}
					>
						Day04 - 20250812
					</StyledLi>
				</StyledUl>
			</nav>
			<hr />
		</>
	);
}

export default Home;
