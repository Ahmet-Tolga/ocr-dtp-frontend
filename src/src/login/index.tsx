import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardBody } from "react-bootstrap";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e:any) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/'); // Giriş başarılı olduğunda ana sayfaya yönlendirme
        } catch (error) {
            console.error('Login failed', error);
            // Hata durumunda kullanıcıya mesaj gösterebilirsiniz
        }
    };

    return (
        <React.Fragment>
            <div className="auth-main v2">
                <div className="auth-wrapper">
                    <div className="auth-form">
                        <Card className="my-5 mx-3">
                            <CardBody>
                                <form onSubmit={handleLogin}>
                                    <h4 className="f-w-500 mb-1" style={{ marginBottom: "25px" }}>Login with your email</h4>
                                    <p className="mb-3" style={{ marginBottom: "25px" }}>Don&apos;t have an Account? <Link to="/offer" className="link-primary ms-1">Create a new project</Link></p>
                                    <div className="mb-3" style={{ marginBottom: "25px" }}>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="floatingInput" 
                                            placeholder="Email Address" 
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)} 
                                        />
                                    </div>
                                    <div className="mb-3" style={{ marginBottom: "25px" }}>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            id="floatingInput1" 
                                            placeholder="Password" 
                                            value={password} 
                                            onChange={(e) => setPassword(e.target.value)} 
                                        />
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
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LoginPage;
