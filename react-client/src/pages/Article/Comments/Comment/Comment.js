import React, { useState } from 'react';
import Form from '../../../../components/Form/Form';
import FormControl from '../../../../components/Form/FormControl/FormControl';
import useAuth from '../../../../hooks/useAuth';
import { Container, Content, Details, Head, Options } from './Comment.styles';

function Comment({ comment, deleteComment, editComment }) {
	const { auth } = useAuth();
	const [isEditing, setIsEditing] = useState(false);
	const [editContent, setEditContent] = useState(comment.content);
	const date = new Date(comment.dateCreated);

	const handleChange = (e) => {
		setEditContent(e.target.value);
	};
	const handleDelete = () => {
		deleteComment(comment.id);
	};

	const handleEdit = (e) => {
		e.preventDefault();
		editComment(e, editContent, comment.id);
	};

	const toggleIsEditing = () => {
		setIsEditing((prev) => !prev);
	};

	return (
		<Container>
			<Head>
				<Details>
					<h2>Submited by: {comment.user.username}</h2>
					<small>on : {`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}</small>
				</Details>
				{(auth.id === comment.user.id || auth.isAdmin) && (
					<Options>
						{isEditing ? (
							<button className='red' onClick={toggleIsEditing}>
								Cancel
							</button>
						) : (
							<>
								{!auth.isAdmin && (
									<button className='blue' onClick={toggleIsEditing}>
										Edit
									</button>
								)}
								<button className='red' onClick={handleDelete}>
									delete
								</button>
							</>
						)}
					</Options>
				)}
			</Head>
			{isEditing ? (
				<Form submitFunction={handleEdit}>
					<FormControl>
						<label htmlFor='comment'>Edit comment:</label>
						<input id='comment' name='comment' value={editContent} onChange={handleChange} />
					</FormControl>
					<button type='submit'>Edit</button>
				</Form>
			) : (
				<Content>{comment.content}</Content>
			)}
		</Container>
	);
}

export default Comment;
