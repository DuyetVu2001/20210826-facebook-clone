import { useMutation } from '@apollo/client';
import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState } from 'react';
import { loginMutation } from '../graphql/mutations';
import Avatar from '../public/avatar.jpg';
import Logo from '../public/fb-logo.png';

const Register: NextPage = () => {
	interface UserMutationResponse {
		code: number;
		success: boolean;
		message: string;
		user: string;
		errors: string;
	}

	interface LoginInput {
		username: string;
		password: string;
	}

	const [loginUser, { data, error }] = useMutation<
		{ login: UserMutationResponse },
		{ loginInput: LoginInput }
	>(loginMutation);
	const [isLogin, setIsLogin] = useState(false);
	const [loginData, setLoginData] = useState({
		username: 'Duyệt Vũ',
		password: '',
	});

	const handleSubmit = (e: any) => {
		e.preventDefault();

		loginUser({
			variables: {
				loginInput: loginData,
			},
		});

		setLoginData({ ...loginData, password: '' });
	};

	// Theme
	const { theme, setTheme } = useTheme();
	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};
	// Theme

	// const arr = [1, 1, 1, 1, 1, 1, 1];
	const arr = [1];

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
				{arr.map((_item, index) => (
					<div
						className="m-4 flex flex-col items-center"
						key={index}
						onClick={() => setIsLogin(true)}
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
							Duyệt Vũ
						</p>
						<form className={`${!isLogin && 'hidden'}`} onSubmit={handleSubmit}>
							<input
								type="password"
								value={loginData.password}
								onChange={(e) =>
									setLoginData({ ...loginData, password: e.target.value })
								}
								className="w-32 rounded-md bg-gray-300"
							/>
							<p className="text-red-500 text-xs font-semibold mt-1">
								{data?.login.errors && 'Incorrect password!'}
							</p>
						</form>
					</div>
				))}
			</div>
		</div>
	);
};

export default Register;
