import { Form } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import { useStartButton } from '../useStartButton';
import RoShamBo from './RoShamBo';
import DisabledSection from './DisabledSection';

export const StartGameForm = () => {
    const { t } = useTranslation();
    const { buddySkill, setBuddySkill, buddySkillDescription, trickComplexity, setTickComplexity, skillTrickDescription } = useStartButton()

    return (
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
            <RoShamBo />
            <DisabledSection />
        </Form>
    )
}