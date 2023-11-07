export async function getTickets(params) {
	const url = params
		? `http://localhost:4000/tickets/${params}`
		: 'http://localhost:4000/tickets';
	const response = await fetch(url, {
		next: {
			revalidate: 0,
		},
	});
	return response.json();
}
