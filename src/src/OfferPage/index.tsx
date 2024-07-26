import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { acceptOffer } from "../store/Actions/OfferAction";
import BaseNavbar from "../Common/components/BaseComponent";
import AuthGuard from "../utils/route-guard/authGuard";
import useAuth from "../hooks/useAuth";
import { GetAllProjectsThunk, GetProjectsByUserIDThunk } from "../store/Thunks/UploadProjectThunk";
import { AppDispatch } from "../store/store";
import ListView from "./components/ListView";

const Offers: React.FC = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleAcceptOffer = (offerId: number, offerName: string, offerPrice: number, services: string[]) => {
        dispatch(acceptOffer(offerId, offerName, offerPrice, services));
        navigate("/payment");
    };

    const handleGiveOffer = (email: string, project: any) => {
        navigate("/giveOffer", { state: { email: email, project: project } });
    };

    const { user } = useAuth();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                if (user?.role === "admin") {
                    const projects = await dispatch(GetAllProjectsThunk()).unwrap();
                    setProjects(projects.data);
                } else if (user?.id) {
                    const projects = await dispatch(GetProjectsByUserIDThunk(user.id)).unwrap();
                    setProjects(projects.data);
                } else {
                    console.error("User ID is not defined");
                }
            } catch (error) {
                if (error instanceof Error) {
                    console.error("Failed to fetch projects:", error.message);
                } else {
                    console.error("An unknown error occurred");
                }
            }
        };

        fetchProjects();
    }, [user, dispatch]);

    return (
        <React.Fragment>
            <AuthGuard>
                <>
                    <BaseNavbar NavbarTitle="All Offers" />
                    {user?.role === "admin" ? (
                        <ListView
                            projects={projects}
                            onGiveOffer={handleGiveOffer}
                            onDiscard={(email) => console.log(`Discard offer from ${email}`)}
                        />
                    ) : (
                        <Row>
                            {projects.map((item: any, index: number) => (
                                <Col md={6} xl={4} key={index}>
                                    <Card className="user-card">
                                        <Card.Body>
                                            <div className="chat-avtar card-user-image">
                                                {/* Add user image here if needed */}
                                            </div>
                                            <div className="d-flex" style={{ marginTop: "40px" }}>
                                                <div className="flex-shrink-0">
                                                    <div className="flex-shrink-0">
                                                        <button className="btn btn-primary btn-sm">Reject offer</button>&nbsp;
                                                        <button
                                                            className="btn btn-outline-secondary btn-sm ms-1"
                                                            onClick={() => handleAcceptOffer(item.id, item.offerName, item.offerPrice, item.services)}
                                                        >
                                                            Accept offer
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>from this email {item.user.email}</div>
                                                <div className="saprator my-2">
                                                    <span>Services</span>
                                                </div>
                                                <div className="text-center">
                                                    {item.services.map((service: string, idx: number) => (
                                                        <span key={idx} className="badge bg-light-secondary border rounded-pill border-secondary bg-transparent f-14 me-1 mt-1">
                                                            {service}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="saprator my-2">
                                                    <span>Waiting for response</span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    )}
                </>
            </AuthGuard>
        </React.Fragment>
    );
};

export default Offers;
