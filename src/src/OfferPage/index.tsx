import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // UseNavigate for navigation
import { acceptOffer } from "../store/Actions/OfferAction";
import { userCard } from "../Common/jsonData";
import BaseNavbar from "../Common/components/BaseComponent";

// Define TypeScript interfaces for item data
interface Item {
    id: number;
    offerName: string;
    offerPrice: number;
    bgImage: string;
    avatar: string;
    color: string;
    services: string[];
}

const Offers: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Hook for navigation

    // Updated to include services parameter
    const handleAcceptOffer = (offerId: number, offerName: string, offerPrice: number, services: string[]) => {
        dispatch(acceptOffer(offerId, offerName, offerPrice, services));
        navigate("/payment"); // Navigate to payment page
    };

    return (
        <React.Fragment>
            <BaseNavbar NavbarTitle="All Offers" />
            <Row>
                {(userCard || [])?.map((item: Item, index: number) => (
                    <Col md={6} xl={4} key={index}>
                        <Card className="user-card">
                            <Card.Body>
                                <div className="user-cover-bg">
                                    <img src={item.bgImage} alt="image" className="img-fluid" />
                                    <div className="cover-data">
                                        <div className="d-inline-flex align-items-center">
                                            <i className="ph-duotone ph-star text-warning me-1"></i>
                                            {item.offerPrice}$
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-avtar card-user-image">
                                    <img src={item.avatar} alt="user-image" className="img-thumbnail rounded-circle" />
                                    <i className={`chat-badge bg-${item.color}`}></i>
                                </div>
                                <div className="d-flex">
                                    <div className="flex-grow-1 ms-2">
                                        <h6 className="mb-1">{item.offerName}</h6>
                                    </div>
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
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    );
};

export default Offers;
