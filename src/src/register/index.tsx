import { Link } from "react-router-dom";
import React from "react";
import { Card, Row, Col, Form } from "react-bootstrap";


const RegisterPage = () => {
    return (
        <React.Fragment>
            <div className="auth-main v2" >
                <div className="bg-overlay bg-dark-custom"></div>
                <div className="auth-wrapper">
                    <div className="auth-form">
                        <Card className="my-5 mx-3">
                            <Card.Body>
                                <h4 className="f-w-500 mb-1" style={{marginBottom:"25px"}}>Register with your email</h4>
                                <p className="mb-3" style={{marginBottom:"25px"}}>Already have an Account? <Link to="../pages/login-v2" className="link-primary">Log in</Link></p>
                                <Row>
                                    <Col sm={6}>
                                        <div className="mb-3" style={{marginBottom:"25px"}}>
                                            <Form.Control type="text" placeholder="First Name" />
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="mb-3" style={{marginBottom:"25px"}}>
                                            <Form.Control type="text" placeholder="Last Name" />
                                        </div>
                                    </Col>
                                </Row>
                                <div className=" mb-3" style={{marginBottom:"25px"}}>
                                    <Form.Control type="email" placeholder="Email Address" />
                                </div>
                                <div className=" mb-3" style={{marginBottom:"25px"}}>
                                    <Form.Control type="number" placeholder="Phone number" />
                                </div>
                                <div className=" mb-3" style={{marginBottom:"25px"}}>
                                    <Form.Control type="password" placeholder="Password" />
                                </div>
                                <div className=" mb-3">
                                    <Form.Control type="password" placeholder="Confirm Password" />
                                </div>
                                <div className="d-flex mt-1 justify-content-between">
                                    <div className="form-check">
                                        <input className="form-check-input input-primary" type="checkbox" id="customCheckc1" defaultChecked />
                                        <label className="form-check-label text-muted" htmlFor="customCheckc1">I agree to all the Terms & Condition</label>
                                    </div>
                                </div>
                                <div className="d-grid mt-4">
                                    <button type="button" className="btn btn-primary">Create Account</button>
                                </div>
                                <div className="saprator my-3">
                                    <span>Or continue with</span>
                                </div>
                               
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default RegisterPage;