import BreadcrumbItem from "../../Common/BreadcrumbItem";
import FormValidation from "../../views/from/FormValidation/FormValidation";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Formvalidation = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Form Validation" />
            <Row>
                <Col md={12}>
                    <FormValidation/>
                </Col>
            </Row>
        </React.Fragment>
    )
}



export default Formvalidation;