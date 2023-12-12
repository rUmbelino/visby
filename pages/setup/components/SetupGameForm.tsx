import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import DisabledSection from './DisabledSection';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { AppDispatch, RootState } from '@/utils/store';
import { setBuddySkill, setTrickComplexity } from '@/utils/gameSlice';

const SetupGameForm = () => {
	const router = useRouter();
	const { t } = useTranslation();
	const { buddySkill, trickComplexity, buddySkillDescription, trickComplexityDescription } = useSelector(
		(state: RootState) => state.game
	);
	const dispatch = useDispatch<AppDispatch>();

	const onChangeComplexity = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		dispatch(setTrickComplexity(value));
	};

	const onChangeBuddySkill = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		dispatch(setBuddySkill(value));
	};

	return (
		<Form className="my-3">
			<h2 className="mb-3">{t('setup.form.title')}</h2>
			<Form.Group className="mb-3">
				<Form.Label>{t('setup.form.trick_range_label')}</Form.Label>
				<Form.Range value={trickComplexity} onChange={onChangeComplexity} />
				<small>{t(trickComplexityDescription)}</small>
			</Form.Group>
			<hr />
			<Form.Group className="mb-3">
				<Form.Label>{t('setup.form.buddy_range_label')}</Form.Label>
				<Form.Range value={buddySkill} onChange={onChangeBuddySkill} />
				<small>{t(buddySkillDescription)}</small>
			</Form.Group>
			<hr />
			<DisabledSection />

			<Button className="m-auto mt-4 d-block m-auto" size="lg" onClick={() => router.push('/game')}>
				{t('setup.form.start')}
			</Button>
		</Form>
	);
};

export default SetupGameForm;
