import React from "react";

import { Link } from "react-router-dom";
import { Card, CardBody } from "react-bootstrap";


const LoginPage = () => {
    return (
        <React.Fragment>
            <div className="auth-main v2">
    <div className="auth-wrapper">
        <div className="auth-form">
            <Card className="my-5 mx-3">
                <CardBody>
                    <h4 className="f-w-500 mb-1" style={{ marginBottom: "25px" }}>Login with your email</h4>
                    <p className="mb-3" style={{ marginBottom: "25px" }}>Don&apos;t have an Account? <a href="register" className="link-primary ms-1">Create Account</a></p>
                    <div className="mb-3" style={{ marginBottom: "25px" }}>
                        <input type="email" className="form-control" id="floatingInput" placeholder="Email Address" />
                    </div>
                    <div className="mb-3" style={{ marginBottom: "25px" }}>
                        <input type="password" className="form-control" id="floatingInput1" placeholder="Password" />
                    </div>
                    <div className="d-flex mt-1 justify-content-between align-items-center" style={{ marginBottom: "25px" }}>
                        <div className="form-check">
                            <input className="form-check-input input-primary" type="checkbox" id="customCheckc1" defaultChecked />
                        </div>
                        <Link to="/forgetPassword">
                            <h6 className="text-secondary f-w-400 mb-0">Forgot Password?</h6>
                        </Link>
                    </div>
                    <div className="d-grid mt-4">
                        <button type="button" className="btn btn-primary">Login</button>
                    </div>
                </CardBody>
            </Card>
        </div>
    </div>
</div>

        </React.Fragment>
    );
}



export default LoginPage;