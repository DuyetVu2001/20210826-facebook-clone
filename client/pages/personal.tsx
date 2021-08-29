import type { NextPage } from 'next';
import HeaderPersonal from '../components/HeaderPersonal';
import Header from '../components/Header';

const Personal: NextPage = () => {
	return (
		<div className="relative bg-gray-100 dark:bg-dark-main">
			<Header />

			<main className="relative">
				{/* Header */}
				<HeaderPersonal />

				{/*  */}
			</main>
		</div>
	);
};

export default Personal;
