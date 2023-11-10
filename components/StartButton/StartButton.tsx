import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { StartGameForm } from './Form/StartGameForm';

function StartButton() {
	const { t } = useTranslation();
	const [show, setShow] = useState(false);

	return (
		<>
			<Button className="m-auto" size="lg" onClick={() => setShow(true)}>
				{t('home.start')}
			</Button>

			<Modal size="lg" show={show} onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>{t('home.form.title')}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<StartGameForm />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={() => setShow(false)}>
						{t('home.form.start')}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default StartButton;
