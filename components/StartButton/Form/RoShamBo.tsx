import Image from 'react-bootstrap/Image';
import { useTranslation } from 'next-i18next';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';


const items = ['rock', 'paper', 'scissors']

const RoShamBo: React.FC = () => {
    const { t } = useTranslation();
    const [roshambo, setRoshambo] = useState(items[0])

    return (
        <>
            <Form.Label>{t('home.form.ro_sham_bo_title')}</Form.Label>
            <Container>
                <Row className='justify-content-center'>
                    {items.map(item => {
                        const selectedItem = roshambo === item ? 'border-primary' : 'border-white'
                        return (
                            <Col className={`my-3 py-3 rounded shadow-sm border ${selectedItem}`} key={item} xs={6} lg={4}>
                                <Image src={`/img/${item}.png`} onClick={() => setRoshambo(item)} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default RoShamBo