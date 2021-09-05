import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import AuthContextProvider from '../context/authContext/AuthContext';
import { useApollo } from '../lib/apolloClient';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps);

	return (
		<ApolloProvider client={apolloClient}>
			<ThemeProvider defaultTheme="system" attribute="class">
				<AuthContextProvider>
					<Component {...pageProps} />
				</AuthContextProvider>
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default MyApp;
