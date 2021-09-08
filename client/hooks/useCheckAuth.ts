import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useGetCurrentUserQuery } from '../generated/graphql';

export default function useCheckAuth() {
	const router = useRouter();

	const { data, loading } = useGetCurrentUserQuery();

	useEffect(() => {
		if (!loading) {
			if (data?.getCurrentUser && router.route === '/login') {
				router.replace('/');
			} else if (!data?.getCurrentUser && router.route !== '/login') {
				router.replace('/login');
			}
		}
	}, [data, loading, router]);

	return { data, loading };
}
