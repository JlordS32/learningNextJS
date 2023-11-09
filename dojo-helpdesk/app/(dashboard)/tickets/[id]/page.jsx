import { getTicket } from '../../../../src/utilities/getTickets';
import React from 'react';

export async function generateMetadata({ params }) {
	const id = params.id;

	const res = await fetch(`http://localhost:4000/tickets/${id}`);
	const ticket = await res.json();

	return {
		title: `Dojo Helpdesk | ${ticket.title}`,
	};
}

const TicketDetails = async ({ params }) => {
	const ticket = await getTicket(params.id);

	return (
		<main>
			<nav>
				<h2>Ticket Details</h2>
			</nav>
			<div className='card'>
				<h3>{ticket.title}</h3>
				{ticket.user_mail && <small>Created by {ticket.user_email}</small>}
				<p>{ticket.body}</p>
				<div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
			</div>
		</main>
	);
};

export default TicketDetails;
