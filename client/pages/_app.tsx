import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import ChatContextProvider from '../context/isDisPlayChat/IsDisPlayChat';
import { useApollo } from '../lib/apolloClient';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps);

	return (
		<ApolloProvider client={apolloClient}>
			<ThemeProvider defaultTheme="system" attribute="class">
				<ChatContextProvider>
					<Component {...pageProps} />
				</ChatContextProvider>
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default MyApp;
