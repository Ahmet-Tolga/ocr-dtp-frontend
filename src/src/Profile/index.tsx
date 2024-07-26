import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import AuthGuard from "../utils/route-guard/authGuard";
import useAuth from "../hooks/useAuth";

const ProfilePage = () => {
    const {user}=useAuth();
    return (
        <React.Fragment>
            <AuthGuard>
                <>
                    
                    <Card>
                        <Card.Header>
                            <h5>Personal Details</h5>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item px-0 pt-0">
                                    <Row>
                                        <Col md={6}>
                                            <p className="mb-1 text-muted">Full Name</p>
                                            <p className="mb-0">Surname</p>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Control value={user?.name}></Form.Control>
                                            <Form.Control value="surname"></Form.Control>
                                        </Col>
                                    </Row>
                                </li>
                                <li className="list-group-item px-0">
                                    <Row>
                                        <Col md={6}>
                                            <p className="mb-1 text-muted">Phone</p>
                                            <Form.Control value="+90 551 177 3373"></Form.Control>
                                        </Col>
                                        <Col md={6}>
                                            <p className="mb-1 text-muted">Country</p>
                                            <Form.Control as="select">
                                                <option value="en">USA</option>
                                                <option value="es">CHINA</option>
                                                <option value="fr">UNITED KINGDOM</option>
                                                <option value="tr">SOUTH KOREA</option>
                                                <option value="ch">TURKEY</option>
                                                <option value="jp">JAPAN</option>
                                                <option value="gr">GERMANY</option>
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </li>
                                <li className="list-group-item px-0">
                                    <Row>
                                        <Col md={6}>
                                            <p className="mb-1 text-muted">Email</p>
                                            <p className="mb-0">{user?.email}</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li className="list-group-item px-0 pb-0">
                                    <p className="mb-1 text-muted">Address</p>
                                    <p className="mb-0">Street 110-B Kalians Bag, Dewan, M.P. New York</p>
                                </li>
                            </ul>
                        </Card.Body>
                        <Card.Body style={{ display: "flex", alignItems: "center" }}>
                            <div className="form-group row mb-0">
                                <span className="col-form-label col-sm-3 text-sm-end"></span>
                                <Col lg={6} sm={7}>
                                    <button className="btn btn-primary me-2">Apply Change</button>
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </>
            </AuthGuard>
        </React.Fragment>
    );
}

export default ProfilePage;