'use client';

import { addTicket } from '../actions';

import SubmitButton from '../../../components/SubmitButton';

const CreateForm = () => {
	return (
		<form
			action={addTicket}
			className='w-1/2'
		>
			<label>
				<span>Title:</span>
				<input
					required
					name='title'
					type='text'
				/>
			</label>
			<label>
				<span>Body:</span>
				<textarea
					required
					name='body'
				/>
			</label>
			<label>
				<span>Priority:</span>
				<select name='priority'>
					<option value='low'>Low Priority</option>
					<option value='medium'>Medium Priority</option>
					<option value='high'>High Priority</option>
				</select>
			</label>
			<SubmitButton />
		</form>
	);
};

export default CreateForm;
