// default
import './globals.css';
import { Rubik } from 'next/font/google';

// components
import Navbar from '@/src/components/Navbar';

const rubik  = Rubik({ subsets: ['latin'] });

export const metadata = {
	title: 'Dojo Helpdesk',
	description: 'A helpdesk',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={rubik.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
