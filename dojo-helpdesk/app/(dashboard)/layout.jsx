import Navbar from '../../src/components/Navbar';

export default function DashboardLayout({ children }) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
