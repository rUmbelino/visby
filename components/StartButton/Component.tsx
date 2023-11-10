import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { Accordion, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useStartButton } from './useStartButton';

interface DisableCheckboxItemArgs {
	description: string
}

const DisableCheckboxItem: React.FC<DisableCheckboxItemArgs> = ({ description }) => (
	<Form.Group className="mb-3" >
		<div className='d-flex'>
			<Form.Check disabled />
			<Form.Label style={{ marginLeft: '1rem' }}>{description}</Form.Label>
		</div>
	</Form.Group>
)

function StartButton() {
	const { t } = useTranslation();
	const [show, setShow] = useState(false);
	const { buddySkill, setBuddySkill, buddySkillDescription, trickComplexity, setTickComplexity, skillTrickDescription } = useStartButton()

	return (
		<>
			<Button className="m-auto" size="lg" onClick={() => setShow(true)}>
				{t('home.start')}
			</Button>

			<Modal show={show} onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>{t('home.form.title')}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>{t('home.form.trick_range_label')}</Form.Label>
							<Form.Range value={trickComplexity} onChange={e => setTickComplexity(Number(e.target.value))} />
							<small>{t(skillTrickDescription)}</small>
						</Form.Group>
						<Form.Group className="mb-3" >
							<Form.Label>{t('home.form.buddy_range_label')}</Form.Label>
							<Form.Range value={buddySkill} onChange={e => setBuddySkill(Number(e.target.value))} />
							<small>{t(buddySkillDescription)}</small>
						</Form.Group>
						<Accordion>
							<Accordion.Item eventKey="0">
								<Accordion.Header>{t('home.form.comming_soon_title')}</Accordion.Header>
								<Accordion.Body style={{ background: 'var(--bs-gray-300)' }}>
									<DisableCheckboxItem description={t('home.form.allow_pressure')} />
									<DisableCheckboxItem description={t('home.form.allow_no_comply')} />
									<DisableCheckboxItem description={t('home.form.allow_late_flips')} />
									<DisableCheckboxItem description={t('home.form.allow_quarter')} />
									<DisableCheckboxItem description={t('home.form.allow_grinds')} />
									<DisableCheckboxItem description={t('home.form.allow_slides')} />
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Form>
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
