import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { Container } from 'react-bootstrap';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { store } from '@/utils/store';

const App = (props: AppProps) => {
	const { Component, pageProps } = props;

	return (
		<Provider store={store}>
			<Container>
				<Component {...pageProps} />
			</Container>
		</Provider>
	);
};

export default appWithTranslation(App);
