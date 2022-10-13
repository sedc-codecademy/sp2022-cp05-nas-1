import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from '../../../components/Form/Form';
import FormControl from '../../../components/Form/FormControl/FormControl';
import { Container } from './CommentForm.styles';

function CommentForm({ submitComment }) {
	const [comment, setComment] = useState('');
	const { articleId } = useParams();
	const handleChange = (e) => {
		setComment(e.target.value);
	};

	const handleSubmit = (e) => {
		submitComment(e, comment, articleId);
	};
	return (
		<Container>
			<h2>Leave a comment</h2>
			<Form submitFunction={handleSubmit}>
				<FormControl>
					<label htmlFor='comment'>Comment :</label>
					<input id='comment' type='text' value={comment} name='comment' onChange={handleChange}></input>
				</FormControl>
				<button type='submit'>Submit comment</button>
			</Form>
		</Container>
	);
}

export default CommentForm;
