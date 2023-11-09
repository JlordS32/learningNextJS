import Link from 'next/link';
import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const AuthLayout = async ({ children }) => {
	const supabase = createServerComponentClient({ cookies });

	const { data } = await supabase.auth.getSession();

	if (data.session) {
		redirect('/');
	}

	return (
		<>
			<nav>
				<Link href='/'>
					<h1>Dojo Helpdesk</h1>
				</Link>
				<Link href='/signup'>Sign in</Link>
				<Link href='/login'>Log in</Link>
			</nav>
			{children}
		</>
	);
};

export default AuthLayout;
