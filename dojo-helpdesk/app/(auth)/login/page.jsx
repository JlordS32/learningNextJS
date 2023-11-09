'use client';

import { useState } from 'react';
import AuthForm from '../AuthForm';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
	const router = useRouter();
	const [error, setError] = useState();

	const handleSubmit = async (e, email, password) => {
		e.preventDefault();
		setError('');

		const supabase = createClientComponentClient();
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			setError(error);
		}

		if (!error) {
			router.push('/');
		}
	};

	return (
		<main>
			<h2 className='text-center'>Log in</h2>
			<AuthForm handleSubmit={handleSubmit} />

			{error && <div className='error'>{error}</div>}
		</main>
	);
};

export default LoginPage;
