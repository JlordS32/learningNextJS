import { getTickets } from '@/src/utilities/getTickets';
import Link from 'next/link';
const TicketList = async () => {
	const tickets = await getTickets();

	console.log(tickets);

	return (
		<>
			{tickets.map((ticket) => {
				return (
					<div
						key={ticket.id}
						className='card my-5'
					>
						<Link href={`/tickets/${ticket.id}`}>
							<h3>{ticket.title}</h3>
							<p>{ticket.body.slice(0, 200)}...</p>
							<div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
						</Link>
					</div>
				);
			})}
			{tickets.length === 0 && (
				<p className='text-center'>There are no open tickets, yay!</p>
			)}
		</>
	);
};

export default TicketList;
