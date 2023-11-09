import { Suspense } from 'react';
import TicketList from './TicketList';
import Loading from '../loading';
import Link from 'next/link';

export const metadata = {
	title: 'Ticket Dashboard',
	description: 'This is the tickets dashboard where you see all the tickets.',
};

const Tickets = () => {
	return (
		<main>
			<nav>
				<div
					style={{
						width: '100%',
					}}
				>
					<h2>Tickets</h2>
					<div className='flex justify-between items-center'>
						<p>
							<small>Currently open tickets.</small>
						</p>
						<Link href='/tickets/create'>
							<button className='btn-primary'>Add new ticket</button>
						</Link>
					</div>
				</div>
			</nav>

			<Suspense fallback={<Loading />}>
				<TicketList />
			</Suspense>
		</main>
	);
};

export default Tickets;
