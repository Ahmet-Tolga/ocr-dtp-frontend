import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.in";

const InputMaskData = () => {
    const [date, setDate] = useState<string>("");
    const [date1, setDate1] = useState<string>("");

    return (
        <React.Fragment>
            <Col md={12}>
                <Card>
                    <Card.Header>
                        <h5>Date</h5>
                        <span className="d-block m-t-5">
                            Add class of <code>.date</code> with <code>date-mark</code> attribute
                        </span>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Row className="mb-3">
                                <Form.Label column lg={3} sm={12} className="text-lg-end">
                                    Insert Date 1
                                </Form.Label>
                                <Col lg={6} md={12} sm={12}>
                                    <Cleave
                                        options={{
                                            date: true,
                                            delimiter: '/',
                                            datePattern: ['d', 'm', 'Y']
                                        }}
                                        value={date}
                                        onChange={(e: any) => setDate(e.target.rawValue)}
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Form.Label column lg={3} sm={12} className="text-lg-end">
                                    Insert Date 2
                                </Form.Label>
                                <Col lg={6} md={12} sm={12}>
                                    <Cleave
                                        options={{
                                            date: true,
                                            delimiter: '-',
                                            datePattern: ['d', 'm', 'Y']
                                        }}
                                        value={date1}
                                        onChange={(e: any) => setDate1(e.target.rawValue)}
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default InputMaskData;