import React, { useState } from 'react';
import useCategories from '../../../hooks/useCategories';
import Panel from '../../../components/Panel/Panel';
import CategoryItem from '../../../components/Panel/CategoryItem/CategoryItem';
import { PanelElement, PanelForm } from '../../../components/Panel/Panel.styles';
import useCategoryOptions from '../../../hooks/useCategoryOptions';
import Notification from '../../../components/Notification/Notification';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
function CategoriesPanel() {
	const [newCategoryName, setNewCategoryName] = useState('');
	const { categories } = useCategories();
	const { loading, successMessage, errorMessage, editCategory, deleteCategory, createCategory } = useCategoryOptions();

	const handleChange = (e) => {
		setNewCategoryName(e.target.value);
	};

	const handleCreate = async (e) => {
		await createCategory(e, newCategoryName);
		setNewCategoryName('');
	};

	if (loading) {
		return <LoadingSpinner />;
	}

	return (
		<>
			{errorMessage && <Notification type='error' message={errorMessage} />}
			{successMessage && <Notification type='success' message={successMessage} />}
			<h1>CategoriesPanel </h1>
			<Panel>
				<PanelElement>
					<PanelForm onSubmit={handleCreate}>
						<div>
							<label htmlFor='newCategoryName'>New Category:</label>
							<input
								id='newCategoryName'
								placeholder='ex : Sports'
								name='newCategoryName'
								value={newCategoryName}
								onChange={handleChange}
							></input>
						</div>
						<div>
							<button className='green' type='submit'>
								Submit
							</button>
						</div>
					</PanelForm>
				</PanelElement>
				{categories.map((x) => (
					<CategoryItem
						key={x.id}
						category={x}
						editCategory={editCategory}
						deleteCategory={deleteCategory}
						successMessage={successMessage}
						errorMessage={errorMessage}
					/>
				))}
			</Panel>
		</>
	);
}

export default CategoriesPanel;
