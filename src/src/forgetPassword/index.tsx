import React from "react";
import {Link} from "react-router-dom";
import { Card, Form } from "react-bootstrap";
import BcakImg from '../../assets/images/authentication/img-auth-bg.jpg'

const ForgotPassowordPage = () => {
    return (
        <React.Fragment>
            <div className="auth-main v2" style={{backgroundImage: `url(${BcakImg})`}}>
                <div className="bg-overlay bg-dark-custom"></div>
                <div className="auth-wrapper">
                    <div className="auth-form">
                        <Card className="my-5 mx-3">
                            <Card.Body>
                                <h4 className="f-w-500 mb-1">Forgot Password</h4>
                                <p className="mb-3">Back to <Link to="../pages/login-v2" className="link-primary">Log in</Link></p>
                                <div className="mb-3">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" id="floatingInput" placeholder="Email Address" />
                                </div>
                                <div className="d-grid mt-3">
                                    <button type="button" className="btn btn-primary">Send reset email</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ForgotPassowordPage;
