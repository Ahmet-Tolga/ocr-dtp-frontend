import React from "react";
import { Card, Col, Form, Row} from "react-bootstrap";

const FormTypeAhead = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <Form>
                        <Row className="mb-0">
                            <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Simple Demo</label>
                            <Col lg={5} md={9} sm={12}>
                                <div className="typeahead">
                                    <Form.Control id="pc-typeahead-1" type="text" dir="ltr" placeholder="States of USA" />
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormTypeAhead;