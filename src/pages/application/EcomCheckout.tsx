import React from "react";
import BreadcrumbItem from "../../Common/BreadcrumbItem";
import CartDetails from "../../views/application/Chekout/CartDetails";
import Payment from "../../views/application/Chekout/Payment";
import ShippingInformation from "../../views/application/Chekout/ShippingInformation";

import { Card, Col, Nav, Row, Tab } from "react-bootstrap";

const EcomCheckout = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="E-commerce" subTitle="Checkout" />
            <Row>
                <Tab.Container defaultActiveKey="ecomtab-1">
                    <Col sm={12}>
                        <Card>
                            <Card.Body className="p-0">
                                <Nav as="ul" className="nav-tabs checkout-tabs mb-0" id="myTab" role="tablist">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="ecomtab-1" id="ecomtab-tab-1" href="#ecomtab-1" role="tab">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="avtar avtar-s">
                                                        <i className="ti ti-shopping-cart"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    <h5 className="mb-0">Cart Details</h5>
                                                </div>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="ecomtab-2" id="ecomtab-tab-2" href="#ecomtab-2" role="tab">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="avtar avtar-s">
                                                        <i className="ti ti-building-skyscraper"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    <h5 className="mb-0">Shipping Information</h5>
                                                </div>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="ecomtab-3" id="ecomtab-tab-3" href="#ecomtab-3" role="tab">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="avtar avtar-s">
                                                        <i className="ti ti-credit-card"></i>
                                                    </div>
                                                </div>
                                                <div className="media-body ms-2">
                                                    <h5 className="mb-0">Payment</h5>
                                                </div>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Body>
                        </Card>
                        <Tab.Content>
                            <CartDetails />
                            <ShippingInformation />
                            <Payment />
                        </Tab.Content>
                    </Col>
                </Tab.Container>
            </Row>

        </React.Fragment >
    );
}



export default EcomCheckout;