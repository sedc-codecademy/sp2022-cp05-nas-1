import React from 'react';
import Comment from './Comment/Comment';
import { Container } from './Comments.styles';

function Comments({ comments, deleteComment, editComment }) {
	return (
		<Container>
			<h2>Comments:</h2>
			{!comments?.length ? (
				<h3>No comments to show</h3>
			) : (
				comments.map((x) => (
					<Comment key={x.id} comment={x} deleteComment={deleteComment} editComment={editComment} />
				))
			)}
		</Container>
	);
}

export default Comments;
