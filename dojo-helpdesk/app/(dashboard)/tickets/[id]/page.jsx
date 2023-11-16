import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { getTicket } from '../../../../src/utilities/getTickets';
import { cookies } from 'next/headers';
import DeleteButton from './DeleteButton';
import React from 'react';

export async function generateMetadata({ params }) {
	const supabase = createServerComponentClient({ cookies });

	const { data: ticket, error } = await supabase
		.from('tickets')
		.select()
		.eq('id', params.id)
		.single();

	if (error) {
		console.error(error);
		return;
	}

	return {
		title: `Dojo Helpdesk | ${ticket?.title || 'Ticket not found'}`,
	};
}

const TicketDetails = async ({ params }) => {
	const ticket = await getTicket(params.id);

	const supabase = createServerComponentClient({ cookies });
	const { data } = await supabase.auth.getSession();

	return (
		<main>
			<nav>
				<h2>Ticket Details</h2>
				<div className='ml-auto'>
					{data.session.user.email === ticket.user_email && (
						<DeleteButton id={ticket.id} />
					)}
				</div>
			</nav>
			<div className='card'>
				<h3>{ticket.title}</h3>
				<small>Created by {ticket?.user_email}</small>
				<p>{ticket.body}</p>
				<div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
			</div>
		</main>
	);
};

export default TicketDetails;
