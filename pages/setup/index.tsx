import SetupGameForm from './components/SetupGameForm';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// @ts-ignore
export const getServerSideProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ['common']))
	}
});

const StartButton = () => <SetupGameForm />;

export default StartButton;
