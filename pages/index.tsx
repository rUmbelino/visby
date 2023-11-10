import { useTranslation } from 'next-i18next';
import { Button } from 'react-bootstrap';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import StartButton from '@/components/StartButton/StartButton';

// @ts-ignore
export const getServerSideProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ['common']))
	}
});

export default function Home() {
	const { t } = useTranslation();

	return (
		<div className="d-flex flex-column justify-content-around" style={{ height: '80vh' }}>
			<h1 className="text-center">{t('home.welcome_message')}</h1>
			<div className="d-flex">
				<StartButton />
			</div>
		</div>
	);
}
