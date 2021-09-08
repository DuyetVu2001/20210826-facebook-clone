import type { NextPage } from 'next';
import { useGetCurrentUserQuery } from '../generated/graphql';

const Test: NextPage = () => {
	const { data } = useGetCurrentUserQuery();

	console.log(data);

	return <h1>hhh</h1>;
};

export default Test;
