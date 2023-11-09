import Navbar from '../../src/components/Navbar';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function DashboardLayout({ children }) {
	const supabase = createServerComponentClient({ cookies });

	const { data } = await supabase.auth.getSession();

	console.log('data', data);

	return (
		<>
			<Navbar user={data.session?.user} />
			{children}
		</>
	);
}
