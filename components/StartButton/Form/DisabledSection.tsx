import { Accordion, Form } from "react-bootstrap"
import { useTranslation } from "next-i18next";

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

const DisabledSection = () => {
    const { t } = useTranslation('home.form');

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{t('comming_soon_title')}</Accordion.Header>
                <Accordion.Body style={{ background: 'var(--bs-gray-300)' }}>
                    <DisableCheckboxItem description={t('allow_pressure')} />
                    <DisableCheckboxItem description={t('allow_no_comply')} />
                    <DisableCheckboxItem description={t('allow_late_flips')} />
                    <DisableCheckboxItem description={t('allow_quarter')} />
                    <DisableCheckboxItem description={t('allow_grinds')} />
                    <DisableCheckboxItem description={t('allow_slides')} />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default DisabledSection