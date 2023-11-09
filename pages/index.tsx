import useTranslation from '@/hooks/useTranslation';
import { Button } from 'react-bootstrap';

export default function Home() {
	const { t } = useTranslation();

	t('home');

	return (
		<div className="d-flex flex-column justify-content-around" style={{ height: '80vh' }}>
			<h1 className="text-center">Visby comming to Life!</h1>
			<div className="d-flex">
				<Button className="m-auto" size="lg">
					Start
				</Button>
			</div>
		</div>
	);
}
