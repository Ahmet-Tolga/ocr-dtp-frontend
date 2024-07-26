import React from 'react';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import './AdvancedLoadingPage.css';

const AdvancedLoadingPage: React.FC = () => {
    return (
        <Container fluid className="loading-container">
            <Row className="justify-content-center align-items-center h-100">
                <Col xs="auto">
                    <div className="loading-content text-center">
                        <Spinner animation="grow" role="status" className="loading-spinner">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        <h4 className="mt-3">Please wait, loading...</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AdvancedLoadingPage;
