import { Link, Outlet } from 'react-router-dom';

function Layout() {
	return (
		<div>
			<h2>목차</h2>
			<nav>
				<ul>
					<li>
						{/* <Link> is used to set the URL and keep track of browsing history. */}
						<Link to="day06_20250814">Day06 - 20250814</Link>
					</li>
					<li>
						{/* <Link> is used to set the URL and keep track of browsing history. */}
						<Link to="day05_20250813">Day05 - 20250813</Link>
					</li>
					<li>
						<Link to="day04_20250812">Day04 - 20250812</Link>
					</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="login">Login</Link>
					</li>
				</ul>
			</nav>
			<hr />
			{/* The <Outlet> renders the current route selected. */}
			<Outlet></Outlet>
		</div>
	);
}
export default Layout;
