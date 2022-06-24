import React from 'react';
import Link from 'next/link';

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<Link href={'/blog/'}>
				<a>blog</a>
			</Link>
		</div>
	);
}

export default Home;
