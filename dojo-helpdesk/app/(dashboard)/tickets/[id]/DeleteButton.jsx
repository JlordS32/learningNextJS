'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TiDelete } from 'react-icons/ti';

const DeleteButton = ({ id }) => {
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	const handleClick = async () => {
		setIsLoading(true);

		const response = await fetch(`http://localhost:3000/api/tickets/${id}`, {
			method: 'DELETE',
		});

		const json = await response.json();

		if (json.error) {
			console.error(json.error.message);
			setIsLoading(false);
		}

		if (!json.error) {
			router.refresh();
			router.push('/tickets');
		}
	};

	return (
		<button
			className='btn-primary'
			onClick={handleClick}
			disabled={isLoading}
		>
			{isLoading ? (
				<>
					<TiDelete />
					Deleting...
				</>
			) : (
				<>
					<TiDelete /> Delete Ticket
				</>
			)}
		</button>
	);
};

export default DeleteButton;
