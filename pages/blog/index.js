import React from 'react';
import Link from 'next/link';

const Blog = ({ data }) => {
	return (
		<div>
			<h1>Blog</h1>
			{data.map((post) => (
				<div key={post.id}>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
					<Link href={`/blog/${post.id}`}>
						<a>link</a>
					</Link>
				</div>
			))}
		</div>
	);
};

const getStaticProps = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts = await response.json();
	return {
		props: {
			data: posts
		},
	};
}

export default Blog;
export { getStaticProps };