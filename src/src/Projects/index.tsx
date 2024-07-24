import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { userCard } from "../../Common/jsonData";
import BaseNavbar from "../Common/components/BaseComponent";


const UserCards = () => {
    return (
        <React.Fragment>
            <BaseNavbar NavbarTitle="All Projects"></BaseNavbar>
            <Row>
                {
                    (userCard || [])?.map((item: any, index: number) => (
                        <Col md={6} xl={4} key={index}>
                            <Card className="user-card">
                                <Card.Body>
                                    <div className="user-cover-bg">
                                        <img src={item.bgImage} alt="image" className="img-fluid" />
                                        <div className="cover-data">
                                            <div className="d-inline-flex align-items-center">
                                                <i className="ph-duotone ph-star text-warning me-1"></i>
                                                80$
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-avtar card-user-image">
                                        <img src={item.avatar} alt="user-image" className="img-thumbnail rounded-circle " />
                                        <i className="chat-badge bg-danger"></i>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-1">William Bond</h6>
                                        </div>
                                    </div>
                                    
                                    <div className="saprator my-2">
                                        <span>Services</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="badge bg-light-secondary border rounded-pill border-secondary bg-transparent f-14 me-1 mt-1">OCR</span>&nbsp;
                                        <span className="badge bg-light-secondary border rounded-pill border-secondary bg-transparent f-14 me-1 mt-1">DTP</span>&nbsp;
                                        <span className="badge bg-light-secondary border rounded-pill border-secondary bg-transparent f-14 me-1 mt-1">TRANSLATION</span>
                                    </div>
                                    <div className="saprator my-2">
                                        <span>Task completed</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1 me-2">
                                            <div className="progress" style={{ height: "8px" }}>
                                                <div className={"progress-bar bg-" + item.color} style={{ width: item.task_completion }}></div>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <h6 className="mb-0">{item.task_completion}</h6>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row >
        </React.Fragment>
    )
}



export default UserCards;