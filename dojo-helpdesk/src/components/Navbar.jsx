import Image from 'next/image';
import Link from 'next/link';
import image from './dojo-logo.png';

const Navbar = () => {
	return (
		<nav>
         <Image
            src={image}
            alt='Dojo Helpdesk Logo'
            width={70}
            quality={100}
            placeholder='blur'
         />
			<h1>Dojo Helpdesk</h1>
			<Link href='/'>Dashboard</Link>
			<Link href='/tickets'>Tickets</Link>
		</nav>
	);
};

export default Navbar;
