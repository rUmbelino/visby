import { useTranslation } from 'next-i18next';
import { Button } from 'react-bootstrap';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

// @ts-ignore
export const getServerSideProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
});

export default function Home() {
	const { t } = useTranslation();
	const router = useRouter();

	return (
		<div className="d-flex flex-column justify-content-around" style={{ height: '80vh' }}>
			<h1 className="text-center">{t('home.welcome_message')}</h1>
			<div className="d-flex">
				<Button className="m-auto" size="lg" onClick={() => router.push('/setup')}>
					{t('home.start')}
				</Button>
			</div>
		</div>
	);
}
