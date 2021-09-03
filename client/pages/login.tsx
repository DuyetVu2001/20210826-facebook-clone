import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useListUsersQuery, useLoginMutation } from '../generated/graphql';
import Avatar from '../public/avatar.jpg';
import Logo from '../public/fb-logo.png';

const Login: NextPage = () => {
	const inputEle: any = useRef(null);
	const [listUsers, setListUsers]: any = useState([]);

	const router = useRouter();
	const [loginMutation, { data }] = useLoginMutation();
	const { data: listUserData } = useListUsersQuery();

	const [idLoginForm, setIdLoginForm] = useState(null);
	const [loginData, setLoginData] = useState({
		username: '',
		password: '',
	});

	// Fetch list users
	useEffect(() => {
		listUserData?.listUsers && setListUsers(listUserData?.listUsers);
	}, [listUserData]);

	// Focus input field
	useEffect(() => {
		if (idLoginForm) {
			inputEle.current.focus();
		}
	}, [idLoginForm]);

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const res = await loginMutation({
			variables: {
				loginInput: loginData,
			},
		});

		res.data?.login.success && router.push('/');

		setLoginData({ ...loginData, password: '' });
	};

	// Theme
	const { theme, setTheme } = useTheme();
	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};
	// Theme

	return (
		<div className="dark:bg-dark-main relative flex items-center justify-center w-screen h-screen">
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
					<div
						className="m-4 flex flex-col items-center"
						key={id}
						onClick={() => {
							setIdLoginForm(id);
						}}
					>
						<Image
							src={Avatar}
							className="rounded-md"
							width="130"
							height="130"
							layout="fixed"
							alt="content"
						/>

						<p className="dark:text-dark-text text-dark-third font-semibold text-center">
							{username}
						</p>
						{idLoginForm === id && (
							<form onSubmit={handleSubmit}>
								<input
									type="password"
									value={loginData.password}
									onChange={(e) =>
										setLoginData({ username, password: e.target.value })
									}
									ref={inputEle}
									className="w-32 rounded-md bg-gray-300"
								/>
								<p className="text-red-500 text-xs font-semibold mt-0.5">
									{data?.login.errors && 'Incorrect password!'}
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
