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


const Offers: React.FC = () => {
    const [projects,setProjects]=useState<any[]>([]);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleAcceptOffer = (offerId: number, offerName: string, offerPrice: number, services: string[]) => {
        dispatch(acceptOffer(offerId, offerName, offerPrice, services));
        navigate("/payment"); 
    };

    const handleGiveOffer=(email:any,userId:any)=>{
        navigate("/giveOffer",{state:{email:email,userId:userId}});
    }

    const { user } = useAuth();

    useEffect(() => {
        const fetchProjects = async () => {
            if (user?.role === "admin") {
                try {
                    const projects = await dispatch(GetAllProjectsThunk()).unwrap();
                    console.log(projects);
                    setProjects(projects.data);
                } catch (error) {
                    if (error instanceof Error) {
                        console.error("Failed to fetch projects:", error.message);
                    } else {
                        console.error("An unknown error occurred");
                    }
                }
            } else if (user?.id) {
                try {
                    const projects = await dispatch(GetProjectsByUserIDThunk(user.id)).unwrap();
                    setProjects(projects.data);
                } catch (error) {
                    if (error instanceof Error) {
                        console.error("Failed to fetch projects:", error.message);
                    } else {
                        console.log(error);
                        console.error("An unknown error occurred");
                    }
                }
            } else {
                console.error("User ID is not defined");
            }
        };
        

        fetchProjects();
    }, [user, dispatch]);

    return (
        <React.Fragment>
            <AuthGuard>
                <>
                    <BaseNavbar NavbarTitle="All Offers" />
                    <Row>
                        {projects.map((item: any, index: number) => (
                            <Col md={6} xl={4} key={index}>
                                <Card className="user-card">
                                    <Card.Body>
                                        {/* <div className="user-cover-bg">
                                            <img src={item.bgImage} alt="image" className="img-fluid" />
                                            <div className="cover-data">

                                            </div>
                                        </div> */}
                                        <div className="chat-avtar card-user-image">
                                        </div>
                                        <div className="d-flex" style={{ marginTop: "40px" }}>
                                            {user?.role=="admin" ? <div className="flex-shrink-0">
                                                <button
                                                    className="btn btn-outline-secondary btn-sm ms-1"
                                                    onClick={() => handleGiveOffer(item.user.email,item.user.id)}
                                                >
                                                    Give Offer
                                                </button>
                                            </div>  : <div className="flex-shrink-0">
                                                <button className="btn btn-primary btn-sm">Reject offer</button>&nbsp;
                                                <button
                                                    className="btn btn-outline-secondary btn-sm ms-1"
                                                    onClick={() => handleAcceptOffer(item.id, item.offerName, item.offerPrice, item.services)}
                                                >
                                                    Accept offer
                                                </button>
                                            </div>}
                                        </div>
                                        <div>from this email {item.user.email}</div>

                                        <div className="saprator my-2">
                                            <span>Services</span>
                                        </div>
                                        <div className="text-center">
                                            {/* {item.services.map((service: string, idx: number) => (
                                                <span key={idx} className="badge bg-light-secondary border rounded-pill border-secondary bg-transparent f-14 me-1 mt-1">
                                                    {service}
                                                </span>
                                            ))} */}
                                        </div>
                                        <div className="saprator my-2">
                                            <span>Waiting for response</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </>
            </AuthGuard>
        </React.Fragment>
    );
};

export default Offers;
