import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';

export const dynamicParams = true;

export async function getTickets() {
	const supabase = createServerComponentClient({ cookies });

	const { data, error } = await supabase.from('tickets').select();

	if (error) {
		console.error(error.message);
	}

	return data;
}

export async function getTicket(id) {
	const supabase = createServerComponentClient({ cookies });

	const { data } = await supabase
		.from('tickets')
		.select()
		.eq('id', id)
		.single();

	if (!data) {
		notFound();
	}

	return data;
}
