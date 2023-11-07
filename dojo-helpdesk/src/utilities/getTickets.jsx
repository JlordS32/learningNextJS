import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
	const res = await fetch('http://localhost:4000/tickets');

	const tickets = await res.json();

	return tickets.map((ticket) => {
		return { id: ticket.id };
	});
}

export async function getTickets() {
	const url = 'http://localhost:4000/tickets';
	const response = await fetch(url, {
		next: {
			revalidate: 60,
		},
	});
	return response.json();
}

export async function getTicket(params) {
	const url = `http://localhost:4000/tickets/${params}`;
	const response = await fetch(url, {
		next: {
			revalidate: 60,
		},
	});

	if (!response.ok) {
		notFound();
	}

	return response.json();
}
