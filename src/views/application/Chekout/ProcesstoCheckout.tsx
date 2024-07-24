// import Image from "next/image";
import React from "react";
import { Card, CardBody, Col, Row } from "react-bootstrap";


// img 
import product2 from '../../../assets/images/application/img-prod-2.jpg';
import product3 from '../../../assets/images/application/img-prod-3.jpg';
import product4 from '../../../assets/images/application/img-prod-4.jpg';
import coupon from '../../../assets/images/application/img-coupon.png';
import { Link } from "react-router-dom";

const ProcesstoCheckout = ({ isPayment, isCardSummary }: any) => {
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
                    <CardBody>
                        <button type="button" className="btn btn-sm btn-link-secondary" data-bs-toggle="modal"
                            data-bs-target="#couponModal">
                            Have a coupon code?
                        </button>
                        <div className="input-group my-2">
                            <input type="text" className="form-control" placeholder="Discount Coupon" />
                            <button className="btn btn-outline-secondary" type="button">Apply</button>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    {isCardSummary && <Card.Header>
                        <h5>Order Summary</h5>
                    </Card.Header>}
                    <CardBody className="py-2">
                        <ul className="list-group list-group-flush">
                            {!isCardSummary && <li className="list-group-item px-0">
                                <h5 className="mb-0">Order Summary</h5>
                            </li>}
                            {isCardSummary && <React.Fragment>
                                <li className="list-group-item px-0">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                        <img className="bg-light rounded img-fluid flex-shrink-0" width={60} src={product2} alt="User image" />
                                        </div>
                                        <div className="flex-grow-1  mx-2">
                                            <h5 className="mb-1">Canon EOS 1500D 24.1</h5>
                                            <p className="text-muted text-sm mb-2">SLR Camera (Black) with EF</p>
                                            <h5 className="mb-1"><b>$275</b><span
                                                className="mx-2 text-sm text-decoration-line-through text-muted f-w-400">$325</span></h5>
                                        </div>
                                        <div className="flex-shrink-0">
                                        <Link to="#" className="avtar avtar-s btn-link-danger btn-pc-default flex-shrink-0">
                                            <i className="ti ti-trash f-20"></i>
                                        </Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item px-0">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                        <img className="bg-light rounded img-fluid flex-shrink-0" width={60} src={product3} alt="User image" />
                                        </div>
                                        <div className="flex-grow-1 mx-2">
                                            <h5 className="mb-1">Canon EOS 1500D 24.1</h5>
                                            <p className="text-muted text-sm mb-2">SLR Camera (Black) with EF</p>
                                            <h5 className="mb-1"><b>$275</b><span
                                                className="mx-2 text-sm text-decoration-line-through text-muted f-w-400">$325</span></h5>
                                        </div>
                                        <Link to="#" className="avtar avtar-s btn-link-danger btn-pc-default flex-shrink-0">
                                            <i className="ti ti-trash f-20"></i>
                                        </Link>
                                    </div>
                                </li>
                                <li className="list-group-item px-0">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                        <img className="bg-light rounded img-fluid flex-shrink-0" width={60} src={product4} alt="User image" />
                                        </div>
                                        <div className="flex-grow-1 mx-2">
                                            <h5 className="mb-1">Canon EOS 1500D 24.1</h5>
                                            <p className="text-muted text-sm mb-2">SLR Camera (Black) with EF</p>
                                            <h5 className="mb-1"><b>$275</b><span
                                                className="mx-2 text-sm text-decoration-line-through text-muted f-w-400">$325</span></h5>
                                        </div>
                                        <Link to="#" className="avtar avtar-s btn-link-danger btn-pc-default flex-shrink-0">
                                            <i className="ti ti-trash f-20"></i>
                                        </Link>
                                    </div>
                                </li></React.Fragment>}
                            <li className="list-group-item px-0">
                                <div className="float-end">
                                    <h5 className="mb-0">$300.00</h5>
                                </div><span className="text-muted">Sub Total</span>
                            </li>
                            <li className="list-group-item px-0">
                                <div className="float-end">
                                    <h5 className="mb-0">-</h5>
                                </div><span className="text-muted">Estimated Delivery</span>
                            </li>
                            <li className="list-group-item px-0">
                                <div className="float-end">
                                    <h5 className="mb-0">-</h5>
                                </div><span className="text-muted">Voucher</span>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="py-2">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item px-0">
                                <div className="float-end">
                                    <h5 className="mb-0">$300.00</h5>
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
                <div className="d-grid mb-3">
                    <button className="btn btn-primary">{isPayment ? "Process to Payment" : isCardSummary ? "Process to Checkout" : "Place an Order"}</button>
                </div>
            </Col>
        </React.Fragment>
    );
}

export default ProcesstoCheckout;