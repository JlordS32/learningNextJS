import { getTicket } from '../../../src/utilities/getTickets';
import React from 'react';

const TicketDetails = async ({ params }) => {
	const ticket = await getTicket(params.id);

	return (
		<main>
			<nav>
				<h2>Ticket Details</h2>
			</nav>
			<div className='card'>
				<h3>{ticket.title}</h3>
				<small>Created by {ticket.user_email}</small>
				<p>{ticket.body}</p>
				<div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
			</div>
		</main>
	);
};

export default TicketDetails;
