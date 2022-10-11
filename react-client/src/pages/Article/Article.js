import React from 'react';
import { useParams } from 'react-router-dom';

function Article() {
	const params = useParams();
	console.log(params);
	return <div>Article</div>;
}

export default Article;
