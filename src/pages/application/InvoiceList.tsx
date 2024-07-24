import React from "react";
import { Card, Col, Form, Row} from "react-bootstrap";
import BreadcrumbItem from "../../Common/BreadcrumbItem";
import { invoiceData} from "../../Common/jsonData";


const InvoiceList = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Invoice" subTitle="List" />
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-between ali mb-3 g-3">
                                <div className="col-sm-auto">
                                    <form className="form-search">
                                        <i className="ph-duotone ph-magnifying-glass icon-search"></i>
                                        <input type="search" className="form-control" placeholder="Search..." />
                                        <button className="btn btn-light-secondary btn-search">Search</button>
                                    </form>
                                </div>
                                <div className="col-sm-auto">
                                    <input type="date" className="form-control" />
                                </div>
                            </Row>
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Customer name</th>
                                            <th>Status</th>
                                            <th>Amount</th>
                                            <th>Txid</th>
                                            <th>Quantity</th>
                                            <th className="text-center">Payment method</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(invoiceData || []).map((row: any, index: number) => (
                                            <tr key={index}>
                                                <td>
                                                    <Form.Check>
                                                        <Form.Check.Input type="checkbox" />
                                                    </Form.Check>
                                                </td>
                                                <td>
                                                    <Row className="align-items-center">
                                                        <div className="col-auto pe-0">
                                                            <img src={row.customer.image} alt="user-image" className="wid-40 rounded-circle" height={40} />
                                                        </div>
                                                        <div className="col">
                                                            <h5 className="mb-0">{row.customer.name}</h5>
                                                        </div>
                                                    </Row>
                                                </td>
                                                <td><i className={row.status}></i></td>
                                                <td>{row.amount}</td>
                                                <td>{row.txid}</td>
                                                <td>{row.quantity}</td>
                                                <td className="text-center">
                                                    <img src={row.paymentMethod} alt="img" className="img-fluid" />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>
    );
};



export default InvoiceList;

