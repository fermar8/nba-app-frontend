import './../../App.css';
import { FC } from 'react';
import { Container, Row, Col } from 'reactstrap';
import UserLeagues from 'app/components/UserLeagues';

const Main:FC = () => {

    return (
        <Container fluid={true}>
            <Row>
                <Col xs='12'>
                    <UserLeagues />
                </Col>
            </Row>
        </Container>
    )
}

export default Main