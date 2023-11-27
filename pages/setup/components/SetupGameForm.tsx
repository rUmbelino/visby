import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import { useGameSetup } from '../useGameSetup';
import DisabledSection from './DisabledSection';
import { useRouter } from 'next/router';


const SetupGameForm = () => {
    const router = useRouter()
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
            <DisabledSection />

            <Button className='m-auto mt-4 d-block m-auto' size='lg' onClick={() => router.push('/game')}>
                {t('setup.form.start')}
            </Button>
        </Form>
    )
}

export default SetupGameForm