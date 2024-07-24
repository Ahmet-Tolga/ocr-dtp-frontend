import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Dashboard from "./Dashboard";
import LoginPage from "./login";
import RegisterPage from "./register";
import OfferPage from "./Offer";
import ForgotPassowordPage from "./forgetPassword";
import ProfilePage from "./Profile";
import UserCards from "./Projects";
import Offers from "./OfferPage/index";
import Sidebar from "./Dashboard/components/Sidebar";
import TopBar from "./Navbar";
import PaymentPage from "./payment";

const App = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <BrowserRouter>
            {isMobile && <TopBar />}
            <Row>
                {!isMobile && (
                    <Col md={3}>
                        <Sidebar></Sidebar>
                    </Col>
                )}
                <Col md={isMobile ? 12 : 9} style={{ marginTop: isMobile ? "60px" : "0px" }}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/projects" element={<UserCards />} />
                        <Route path="/offerPage" element={<Offers />} />
                        <Route path="/offer" element={<OfferPage />} />
                        <Route path="/payment" element={<PaymentPage></PaymentPage>} />
                        <Route path="/forgetPassword" element={<ForgotPassowordPage />} />
                    </Routes>
                </Col>
            </Row>
        </BrowserRouter>
    );
}

export default App;