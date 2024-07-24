// import Image from "next/image";
import React from "react";
import { Card, CardBody, CardHeader, Col, Row, Tab } from "react-bootstrap";

// img
import payCard from '../../../assets/images/application/img-pay-card-bg.png';
import mastercard from '../../../assets/images/application/mastercard.png';
import visa from '../../../assets/images/application/visa.png';
import card from '../../../assets/images/application/card.png';
import paypal from '../../../assets/images/application/paypal.png';
import ProcesstoCheckout from './ProcesstoCheckout';

const Payment = () => {
    return (
        <React.Fragment>
            <Tab.Pane eventKey="ecomtab-3" id="ecomtab-3" role="tabpanel" aria-labelledby="ecomtab-tab-3">
                <CardBody>
                    <Row>
                        <Col xl={8}>
                            <Card>
                                <CardHeader>
                                    <Row className="align-items-center">
                                        <Col>
                                            <div className="progress" style={{ height: "6px" }}>
                                                <div className="progress-bar bg-primary" style={{ width: "99%" }}></div>
                                            </div>
                                        </Col>
                                        <div className="col-auto">
                                            <p className="mb-0 h6">Step 3</p>
                                        </div>
                                    </Row>
                                </CardHeader>
                                <div className="card-body border-bottom">
                                    <h5 className="mb-0">Payment</h5>
                                </div>
                                <CardBody>
                                    <div className="address-check border rounded p-3">
                                        <div className="form-check">
                                            <input type="radio" name="radio11" className="form-check-input input-primary" defaultChecked />
                                            <label className="form-check-label d-block">
                                                <Row className="align-items-center justify-content-between">
                                                    <span className="col-6">
                                                        <span className="h6 mb-0 d-block">Ian Carpenter <small className="text-muted">(Home)</small>
                                                            <span className="badge bg-primary rounded-pill">Default</span></span>
                                                    </span>
                                                    <span className="col-6 text-end">
                                                        <button className="btn btn-primary"><i className="ti ti-edit-circle align-text-bottom me-1"></i>Change</button>
                                                    </span>
                                                </Row>
                                                <span className="text-muted address-details">1754 Ureate Path, 695 Newga View, Seporcus,
                                                    Rhode Island, Belgium - SA5 5BO</span>
                                                <Row className="align-items-center justify-content-between">
                                                    <span className="col-6">
                                                        <span className="text-muted mb-0">+91 1234567890</span>
                                                    </span>
                                                </Row>
                                            </label>
                                        </div>
                                    </div>
                                    <Row className="g-2">
                                        <Col md={6}>
                                            <div className="address-check border rounded">
                                                <div className="form-check paycard"
                                                    style={{ backgroundImage: `url(${payCard})` }}>
                                                    <input type="radio" name="payradio1" className="form-check-input input-primary"
                                                        id="paycard-check-1" defaultChecked />
                                                    <label className="form-check-label d-block" htmlFor="paycard-check-1">
                                                        <CardBody className="p-3 d-block">
                                                            <span className="d-flex align-items-start justify-content-between">
                                                                <span className="h5">John Smith</span>
                                                                <img src={mastercard} alt="images" className="img-fluid" />
                                                            </span>
                                                            <Row className="g-2 align-items-center justify-content-between mt-2 mb-5">
                                                                <span className="col-auto">
                                                                    <span className="h5 mb-0">****</span>
                                                                </span>
                                                                <span className="col-auto">
                                                                    <span className="h5 mb-0">****</span>
                                                                </span>
                                                                <span className="col-auto">
                                                                    <span className="h5 mb-0">****</span>
                                                                </span>
                                                                <span className="col-auto">
                                                                    <span className="h5 mb-0">2599</span>
                                                                </span>
                                                            </Row>
                                                            <Row className="row  align-items-center justify-content-between">
                                                                <span className="col-auto">
                                                                    <span className="mb-0"><span className="text-sm opacity-50">CVV</span> 085</span>
                                                                </span>
                                                                <span className="col-auto">
                                                                    <span className="mb-0"><span className="text-sm opacity-50">Expire Date</span> 05/24</span>
                                                                </span>
                                                            </Row>
                                                        </CardBody>
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="address-check border rounded">
                                                <div className="form-check paycard"
                                                    style={{ backgroundImage: `url(${payCard})` }}>
                                                    <input type="radio" name="payradio1" className="form-check-input input-primary"
                                                        id="paycard-check-2" />
                                                    <label className="form-check-label d-block" htmlFor="paycard-check-2">
                                                        <CardBody className="p-3 d-block">
                                                            <span className="d-flex align-items-start justify-content-between">
                                                                <span className="h5">Jennifer winget</span>
                                                                <img src={visa} alt="images" className="img-fluid" />
                                                            </span>
                                                            <Row className="g-2 align-items-center justify-content-between mt-2 mb-5">
                                                                <span className="col-auto">
                                                                    <span className="h5 mb-0">****</span>
                                                                </span>
                                                                <span className="col-auto">
                                                                    <span className="h5 mb-0">****</span>
                                                                </span>
                                                                <span className="col-auto">
                                                                    <span className="h5 mb-0">****</span>
                                                                </span>
                                                                <span className="col-auto">
                                                                    <span className="h5 mb-0">2599</span>
                                                                </span>
                                                            </Row>
                                                            <Row className="align-items-center justify-content-between">
                                                                <span className="col-auto">
                                                                    <span className="mb-0"><span className="text-sm opacity-50">CVV</span> 085</span>
                                                                </span>
                                                                <span className="col-auto">
                                                                    <span className="mb-0"><span className="text-sm opacity-50">Expire Date</span> 05/24</span>
                                                                </span>
                                                            </Row>
                                                        </CardBody>
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="divider"><span>OR</span></div>
                                    <Row>
                                        <Col xxl={4} className="col-xl-12">
                                            <div className="address-check border rounded">
                                                <div className="form-check">
                                                    <input type="radio" name="payoptradio1" className="form-check-input input-primary"
                                                        id="payopn-check-1" defaultChecked />
                                                    <label className="form-check-label d-block" htmlFor="payopn-check-1">
                                                        <CardBody className="p-3 d-block">
                                                            <span className="h5 mb-3 d-block">Credit Card</span>
                                                            <span className="d-flex align-items-center">
                                                                <span className="f-12 badge bg-success me-3">5% OFF</span>
                                                                <img src={card} alt="img" className="img-fluid ms-1" />
                                                            </span>
                                                        </CardBody>
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={4} className="col-xl-6">
                                            <div className="address-check border rounded">
                                                <div className="form-check">
                                                    <input type="radio" name="payoptradio1" className="form-check-input input-primary"
                                                        id="payopn-check-2" />
                                                    <label className="form-check-label d-block" htmlFor="payopn-check-2">
                                                        <CardBody className="p-3 d-block">
                                                            <span className="h5 mb-3 d-block">Pay with PayPal</span>
                                                            <span className="d-flex align-items-center">
                                                                <span className="f-12 badge bg-success me-3">5% OFF</span>
                                                                <img src={paypal} alt="img"
                                                                    className="img-fluid ms-1" />
                                                            </span>
                                                        </CardBody>
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={4} className="col-xl-6">
                                            <div className="address-check border rounded">
                                                <div className="form-check">
                                                    <input type="radio" name="payoptradio1" className="form-check-input input-primary" id="payopn-check-3" />
                                                    <label className="form-check-label d-block" htmlFor="payopn-check-3">
                                                        <CardBody className="p-3 d-block">
                                                            <span className="d-flex align-items-center">
                                                                <span>
                                                                    <span className="h5 mb-3 d-block">Cash on Delivery</span>
                                                                    <span className="f-12 text-muted">When you use this payment</span>
                                                                </span>
                                                            </span>
                                                        </CardBody>
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <div className="col-12">
                                            <div className="mb-3 row align-items-center g-2">
                                                <label className="col-lg-4 col-form-label py-0">Card Number :<small
                                                    className="text-muted d-block">Enter
                                                    the 16 digit card number on the card</small></label>
                                                <Col lg={8}>
                                                    <input type="text" className="form-control" />
                                                </Col>
                                            </div>
                                            <div className="mb-3 row align-items-center g-2">
                                                <label className="col-lg-4 col-form-label py-0">Expiry Date :<small
                                                    className="text-muted d-block">Enter
                                                    the expiration on the card</small></label>
                                                <Col lg={8}>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <input type="text" className="form-control" placeholder="Month" />
                                                        </div>
                                                        <div className="col-6">
                                                            <input type="text" className="form-control" placeholder="Year" />
                                                        </div>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="mb-3 row align-items-center g-2">
                                                <label className="col-lg-4 col-form-label py-0">CVV Number :<small className="text-muted d-block">Enter
                                                    the 3 or 4 digit number on the card</small></label>
                                                <Col lg={8}>
                                                    <input type="text" className="form-control" />
                                                </Col>
                                            </div>
                                            <div className="form-group row align-items-center g-2">
                                                <label className="col-lg-4 col-form-label py-0">Password :<small className="text-muted d-block">Enter
                                                    your dynamic password</small></label>
                                                <Col lg={8}>
                                                    <input type="password" className="form-control" />
                                                </Col>
                                            </div>
                                            <div className="text-end btn-page mb-0 mt-4">
                                                <button className="btn btn-outline-secondary">Cancel</button>
                                                <button className="btn btn-primary">Save & Continue</button>
                                            </div>
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                            <div className="d-flex justify-content-end mb-3">
                                <button className="btn btn-link-primary"><i
                                    className="ti ti-arrow-narrow-left align-text-bottom me-2"></i>Back to Shipping
                                    Information</button>
                            </div>
                        </Col>
                        <ProcesstoCheckout isCardSummary={true} isPayment={true} />
                    </Row>
                </CardBody>
            </Tab.Pane>
        </React.Fragment>
    );
}

export default Payment;