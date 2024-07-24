import React  from "react";
import BreadcrumbItem from "../../Common/BreadcrumbItem";
import { Card, Col, Row } from "react-bootstrap";

const SamplePage = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Other" subTitle="Sample Page" />
            <Row>
                <Col sm={12}>
                    <Card>
                        <div className="card-header">
                        <h5>Hello card</h5>
                        </div>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}


export default SamplePage;