import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { Container } from 'react-bootstrap';
import { appWithTranslation } from 'next-i18next';
import { GameSetupContextProvider } from '@/hooks/useGameSetup';
import { useEffect } from 'react';

const App = (props: AppProps) => {
	const { Component, pageProps } = props

	useEffect(() => {
		console.log('MOUNTING APP')
		console.log(pageProps)
		return () => console.log('UNMOUNTING APP')
	}, [])

	return (
		<GameSetupContextProvider>
			<Container>
				<Component {...pageProps} />
			</Container>
		</GameSetupContextProvider>
	);
};

export default appWithTranslation(App);
