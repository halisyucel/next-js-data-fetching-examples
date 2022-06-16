import React from 'react';

const Post = ({ data }) => {
	return (
		<div>
			<h1>{data.title}</h1>
			<p>{data.body}</p>
		</div>
	);
};

const getStaticPaths = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts = await response.json();
	return {
		paths: [
			posts.map((post) => ({
				params: { id: post.id.toString() }
			}))
		],
		fallback: false
	}
}

const getStaticProps = async (context) => {
	const { id } = context.params;
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const post = await response.json();
	return {
		props: {
			data: post
		},
	};
}

export default Post;
export { getStaticPaths, getStaticProps };
