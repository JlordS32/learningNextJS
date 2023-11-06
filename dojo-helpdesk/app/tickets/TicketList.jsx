async function getTickets() {
	const response = await fetch('http://localhost:5000/tickets', {
		next: {
			revalidate: 0
		}
	});
	return response.json();
}

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
						<h3>{ticket.title}</h3>
						<p>{ticket.body.slice(0, 200)}...</p>
						<div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
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
