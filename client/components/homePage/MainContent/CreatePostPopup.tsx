import { HomeIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { FormEventHandler, useRef, useState } from 'react';
import { useCreatePostMutation } from '../../../generated/graphql';
import Avatar from '../../../public/avatar.jpg';

interface CreatePostPopupProps {
	setIsPopup: any;
}

export default function CreatePostPopup(props: CreatePostPopupProps) {
	const { setIsPopup } = props;

	const fileInputEle: any = useRef(null);
	const submitInputEle: any = useRef(null);
	const [content, setContent] = useState('');
	const [image, setImage] = useState('');

	const [createPostMutation] = useCreatePostMutation();

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();

		await createPostMutation({
			variables: { createPostInput: { title: 'Mock', content } },
			update(cache, { data }) {
				if (data?.createPost.success) {
					cache.modify({
						fields: {
							getCurrentUser(existing) {
								if (data.createPost.post) {
									// Post:new_id
									const newPostRef = cache.identify(data.createPost.post);

									const newPostsAfterCreation = {
										...existing,
										userPosts: [
											{ __ref: newPostRef },
											...existing.userPosts, // [{__ref: 'Post:1'}, {__ref: 'Post:2'}]
										],
									};

									return newPostsAfterCreation;
								}
							},

							listPosts(existing) {
								if (data.createPost.post) {
									// Post:new_id
									const newPostRef = cache.identify(data.createPost.post);

									const newPostsAfterCreation = {
										...existing,
										totalCount: existing.totalCount + 1,
										paginatedPosts: [
											{ __ref: newPostRef },
											...existing.paginatedPosts, // [{__ref: 'Post:1'}, {__ref: 'Post:2'}]
										],
									};

									return newPostsAfterCreation;
								}
							},
						},
					});
				}
			},
		});
		setIsPopup(false);
	};

	return (
		<div className="fixed z-10 top-0 left-0 bottom-0 right-0 grid place-items-center">
			{/* overlay */}
			<div
				className="absolute w-full h-full bg-gray-300 opacity-60 cursor-pointer"
				onClick={() => setIsPopup(false)}
			/>

			<div className="relative w-[500px] rounded-lg bg-white shadow">
				{/* TITLE */}
				<div className="relative border-b-[1px] border-gray-300">
					<p className="py-3.5 text-center text-xl font-bold">Create Post</p>
					<div
						className="absolute top-1/2 -translate-y-1/2 right-3 w-9 h-9 rounded-full grid place-items-center bg-gray-200 cursor-pointer"
						onClick={() => setIsPopup(false)}
					>
						<HomeIcon className="h-5 text-gray-700" />
					</div>
				</div>

				{/* BODY */}
				<div className="p-4">
					{/* USER */}
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<div className="relative w-10 h-10 cursor-pointer">
								<Image
									src={Avatar}
									className={`object-cover rounded-full`}
									layout="fill"
									alt="content"
								/>
							</div>
							<div className="ml-3 font-semibold">
								<p className="dark:text-dark-text text-sm">Vũ Ngọc Duyệt</p>
								<div className="inline-flex items-center px-2 py-0.5 rounded-md bg-gray-200 cursor-pointer">
									<HomeIcon className="h-3" />
									<p className="mx-1 text-xs cursor-pointer">Only me</p>
									<HomeIcon className="h-3" />
								</div>
							</div>
						</div>
					</div>

					{/* FORM */}
					<form className="mt-4" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="What's on your mind, User?"
							className="w-full outline-none text-2xl"
							value={content}
							onChange={(e) => setContent(e.target.value)}
							autoFocus
						/>
						<input
							type="file"
							hidden
							ref={fileInputEle}
							onChange={(e: any) => setImage(e.target.files[0])}
						/>
						<input
							type="submit"
							hidden
							ref={submitInputEle}
							disabled={content || image ? false : true}
						/>
					</form>

					{/* THEMES */}
					<div className="flex items-center justify-between mt-16">
						<div className="flex items-center">
							<HomeIcon className="h-7 text-main-color" />

							<div className=" items-center hidden">
								<HomeIcon className="h-7 text-main-color" />
								<HomeIcon className="h-7 text-main-color" />
								<HomeIcon className="h-7 text-main-color" />
								<HomeIcon className="h-7 text-main-color" />
								<HomeIcon className="h-7 text-main-color" />
								<HomeIcon className="h-7 text-main-color" />
								<HomeIcon className="h-7 text-main-color" />
								<HomeIcon className="h-7 text-main-color" />
								<HomeIcon className="h-7 text-main-color" />
							</div>
						</div>
						<div className="flex items-center">
							<HomeIcon className="h-7" />
						</div>
					</div>

					{/* ADD TO YOUR POST */}
					<div className="flex items-center justify-between px-4 py-2 my-4 border-[1px] border-gray-400 rounded-md">
						<p className="text-sm font-semibold">Add to Your Post</p>
						<div className="flex items-center space-x-2">
							<HomeIcon
								className="h-7 text-green-500"
								onClick={() => fileInputEle.current.click()}
							/>
							<HomeIcon
								className="h-7 text-main-color"
								onClick={() => fileInputEle.current.click()}
							/>
							<HomeIcon
								className="h-7 text-yellow-500"
								onClick={() => fileInputEle.current.click()}
							/>
							<HomeIcon
								className="h-7 text-red-500"
								onClick={() => fileInputEle.current.click()}
							/>
							<HomeIcon
								className="h-7 text-red-500"
								onClick={() => fileInputEle.current.click()}
							/>
							<HomeIcon className="h-7" />
						</div>
					</div>

					{/* POST BTN */}
					<p
						className={`font-semibold text-sm text-center leading-9 rounded-md ${
							content || image
								? 'bg-main-color text-white cursor-pointer'
								: 'bg-gray-200 text-gray-400 cursor-not-allowed'
						}`}
						onClick={() => submitInputEle.current.click()}
					>
						Post
					</p>
				</div>
			</div>
		</div>
	);
}
