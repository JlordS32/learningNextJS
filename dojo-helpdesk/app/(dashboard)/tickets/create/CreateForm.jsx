'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CreateForm = () => {
	const router = useRouter();

	const [ticket, setTicket] = useState({
		title: '',
		body: '',
		priority: 'low',
	});

	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		setIsLoading(true);

		const newTicket = {
			...ticket,
		};

		const response = await fetch('http://localhost:3000/api/tickets', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newTicket),
		});

		const json = await response.json();

		if (json.error) {
			console.log(json.error.message);
		}

		if (json.data) {
			router.refresh();
			router.push('/tickets');
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='w-1/2'
		>
			<label>
				<span>Title:</span>
				<input
					required
					type='text'
					onChange={(e) =>
						setTicket((prev) => {
							return {
								...prev,
								title: e.target.value,
							};
						})
					}
					value={ticket.title}
				/>
			</label>
			<label>
				<span>Body:</span>
				<textarea
					required
					onChange={(e) =>
						setTicket((prev) => {
							return {
								...prev,
								body: e.target.value,
							};
						})
					}
					value={ticket.body}
				/>
			</label>
			<label>
				<span>Priority:</span>
				<select
					onChange={(e) =>
						setTicket((prev) => {
							return {
								...prev,
								priority: e.target.value,
							};
						})
					}
					value={ticket.priority}
				>
					<option value='low'>Low Priority</option>
					<option value='medium'>Medium Priority</option>
					<option value='high'>High Priority</option>
				</select>
			</label>
			<button
				className='btn-primary'
				disabled={isLoading}
			>
				{isLoading && <span>Adding...</span>}
				{!isLoading && <span>Add Ticket</span>}
			</button>
		</form>
	);
};

export default CreateForm;
