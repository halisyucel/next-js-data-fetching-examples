import React from 'react';
import { useRouter } from 'next/router';

const Article = ({ data }) => {
	const router = useRouter();
	
	if (router.isFallback)
		return (
			<div>
				loading...
			</div>
		)
	
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
			...posts.map((post) => {
				return {
					params: {
						id: post.id.toString()
					}
				}
			})
		],
		fallback: true
	}
}

const getStaticProps = async (context) => {
	const { id } = context.params;
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const data = await response.json();
	return { props: { data } };
}

export default Article;
export { getStaticPaths, getStaticProps };
