import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
	GetCurrentUserDocument,
	GetCurrentUserQuery,
	useListUsersQuery,
	useLoginMutation,
} from '../generated/graphql';
import useCheckAuth from '../hooks/useCheckAuth';
import Avatar from '../public/avatar.jpg';
import Logo from '../public/fb-logo.png';
import Loading from '../public/loading.gif';

const Login: NextPage = () => {
	const router = useRouter();
	const [listUsers, setListUsers]: any = useState([]);
	const [idLoginForm, setIdLoginForm] = useState(null);
	const [formLoginData, setFormLoginData] = useState({
		username: '',
		password: '',
	});

	const { loading: checkAuthLoading } = useCheckAuth();
	const { data: listUserData } = useListUsersQuery();
	const [loginMutation, { data: loginData }] = useLoginMutation();

	// Fetch list users
	useEffect(() => {
		listUserData?.listUsers && setListUsers(listUserData?.listUsers);
	}, [listUserData]);

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const res = await loginMutation({
			variables: {
				loginInput: formLoginData,
			},
			update(cache, { data }) {
				cache.writeQuery<GetCurrentUserQuery>({
					query: GetCurrentUserDocument,
					data: {
						getCurrentUser: data?.login.user,
					},
				});
			},
		});

		res.data?.login.success && router.push('/');

		setFormLoginData({ ...formLoginData, password: '' });
	};

	// Theme
	const { theme, setTheme } = useTheme();
	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};
	// Theme

	return (
		<div className="dark:bg-dark-main relative flex items-center justify-center w-screen h-screen">
			{/* LOADING... */}
			{checkAuthLoading && (
				<div className="fixed z-10 top-0 left-0 right-0 bottom-0 grid place-items-center opacity-70 bg-gray-100">
					<div className="relative w-10 h-10">
						<Image
							src={Loading}
							className={`object-cover rounded-full`}
							layout="fill"
							alt="content"
						/>
					</div>
				</div>
			)}

			{/* Logo */}
			<div
				className="absolute left-1/2 top-8 -translate-x-1/2 cursor-pointer"
				onClick={toggleTheme}
			>
				<Image src={Logo} width="56" height="56" layout="fixed" alt="Logo" />
			</div>

			{/* List user */}
			<div className="flex flex-wrap items-center justify-center w-2/5 cursor-pointer">
				{listUsers.map(({ id, username }: any) => (
					<div className="m-4 flex flex-col items-center" key={id}>
						<Image
							src={Avatar}
							className="rounded-md"
							width="130"
							height="130"
							layout="fixed"
							alt="content"
							onClick={() => {
								setFormLoginData({ ...formLoginData, password: '' });
								setIdLoginForm(idLoginForm === id ? null : id);
							}}
						/>

						<p className="dark:text-dark-text text-dark-third font-semibold text-center">
							{username}
						</p>
						{idLoginForm === id && (
							<form
								onSubmit={handleSubmit}
								className="dark:bg-dark-third flex flex-col h-6 p-1 rounded-md bg-gray-300"
							>
								<input
									type="password"
									value={formLoginData.password}
									onChange={(e) =>
										setFormLoginData({ username, password: e.target.value })
									}
									autoFocus
									className="w-28 h-full outline-none bg-transparent"
								/>
								<p className="text-red-500 text-xs font-semibold mt-0.5">
									{loginData?.login.errors && 'Incorrect password!'}
								</p>
							</form>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Login;
