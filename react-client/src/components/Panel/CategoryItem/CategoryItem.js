import React, { useState } from 'react';
import { PanelElement, PanelForm } from '../Panel.styles';

function CategoryItem({ category, editCategory, deleteCategory, successMessage }) {
	const [isEdditing, setIsEdditing] = useState(false);
	const [categoryName, setCategoryName] = useState(category.name);

	const toggleIsEdditing = () => {
		setIsEdditing((prev) => !prev);
	};

	const handleChange = (e) => {
		setCategoryName(e.target.value);
	};

	const handleSubmit = (e) => {
		editCategory(e, categoryName, category.id);
		if (successMessage) {
			setIsEdditing(false);
		} else {
			setCategoryName(category.name);
		}
	};
	const handleDelete = () => {
		deleteCategory(category.id);
	};

	return (
		<>
			{isEdditing ? (
				<PanelElement>
					<PanelForm onSubmit={handleSubmit}>
						<div>
							<label htmlFor='categoryName'>Category Name:</label>
							<input
								id={categoryName}
								type={'text'}
								name='categoryName'
								value={categoryName}
								onChange={handleChange}
							/>
						</div>
						<div>
							<button className='blue' type='submit'>
								Save
							</button>
							<button className='red' onClick={toggleIsEdditing}>
								Cancel
							</button>
						</div>
					</PanelForm>
				</PanelElement>
			) : (
				<PanelElement>
					<h2>{category.name}</h2>
					<div>
						<button className='blue' onClick={toggleIsEdditing}>
							Edit
						</button>
						<button className='red' onClick={handleDelete}>
							Delete
						</button>
					</div>
				</PanelElement>
			)}
		</>
	);
}

export default CategoryItem;
