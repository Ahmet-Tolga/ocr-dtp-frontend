// import Image from "next/image";
import React from "react";
import { Card, CardBody, Col, Row } from "react-bootstrap";



import coupon from '../../../assets/images/application/img-coupon.png';


const ProcesstoCheckout = ({ isPayment,totalAmount}: any) => {
    return (
        <React.Fragment>
            <Col xl={4}>
                {isPayment && <Card className="coupon-card bg-warning">
                    <CardBody>
                        <Row className="align-items-center">
                            <div className="col-6 d-flex flex-column align-items-start justify-content-between">
                                <h4 className="text-white">Claim your rewards</h4>
                                <span className="badge bg-warning f-14 py-2 px-3">ABLEPRO50</span>
                            </div>
                            <div className="col-6 text-end">
                                <img src={coupon} alt="img" className="img-fluid" />
                            </div>
                        </Row>
                    </CardBody>
                </Card>}
            
                <Card>
                    <CardBody className="py-2">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item px-0">
                                <div className="float-end">
                                    <h5 className="mb-0">${totalAmount}</h5>
                                </div>
                                <h5 className="mb-0 d-inline-block">Total</h5>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <div className="d-flex align-items-center text-muted">
                            <div className="avtar avtar-s bg-light-primary flex-shrink-0 me-2">
                                <i className="material-icons-two-tone text-primary f-20">security</i>
                            </div>
                            <span className="text-muted text-sm w-100">Safe & Secure Payment. Easy returns. 100% Athentic
                                products.</span>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default ProcesstoCheckout;