import Link from 'next/link';
import React from 'react';

const AuthLayout = ({children}) => {
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
