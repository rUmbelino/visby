import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import { useGameSetup } from '../useGameSetup';
import RoShamBo from './RoShamBo';
import DisabledSection from './DisabledSection';

const SetupGameForm = () => {
    const { t } = useTranslation();
    const { buddySkill, setBuddySkill, buddySkillDescription, trickComplexity, setTickComplexity, skillTrickDescription } = useGameSetup()

    return (
        <Form className='my-3'>
            <h2 className='mb-3'>{t('setup.form.title')}</h2>
            <Form.Group className="mb-3">
                <Form.Label>{t('setup.form.trick_range_label')}</Form.Label>
                <Form.Range value={trickComplexity} onChange={e => setTickComplexity(Number(e.target.value))} />
                <small>{t(skillTrickDescription)}</small>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>{t('setup.form.buddy_range_label')}</Form.Label>
                <Form.Range value={buddySkill} onChange={e => setBuddySkill(Number(e.target.value))} />
                <small>{t(buddySkillDescription)}</small>
            </Form.Group>
            <RoShamBo />
            <DisabledSection />
            <Button size='lg' className='my-3 d-block m-auto'>{t('setup.form.start')}</Button>
        </Form>
    )
}

export default SetupGameForm