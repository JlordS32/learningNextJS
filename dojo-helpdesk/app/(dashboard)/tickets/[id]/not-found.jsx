import Link from 'next/link';
import React from 'react';

const notFound = () => {
	return (
		<main className='text-center'>
			<h2 className='text-3x1'>We hit a brick wall</h2>
			<p>We could not find the ticket you were looking for {':('}</p>
			<p className='mt-5'>
				Go back to the <Link href='/'>Dashboard</Link>.
			</p>
		</main>
	);
};

export default notFound;
