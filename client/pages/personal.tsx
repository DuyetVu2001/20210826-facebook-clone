import type { NextPage } from 'next';
import Header from '../screens/personal/Header';
import Navbar from '../components/Navbar';

const Personal: NextPage = () => {
	return (
		<div className="relative bg-gray-100 dark:bg-dark-main">
			<Navbar />

			<main className="relative">
				<Header />
			</main>
		</div>
	);
};

export default Personal;
