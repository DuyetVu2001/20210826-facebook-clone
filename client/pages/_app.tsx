import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AuthContextProvider from '../context/authContext/AuthContext';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache(),
	credentials: 'include',
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider defaultTheme="system" attribute="class">
				<AuthContextProvider>
					<Component {...pageProps} />
				</AuthContextProvider>
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default MyApp;
