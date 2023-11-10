import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { Container } from 'react-bootstrap';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// @ts-ignore
export const getServerSideProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ['common']))
	}
});

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Container>
			<Component {...pageProps} />
		</Container>
	);
};

export default appWithTranslation(App);
