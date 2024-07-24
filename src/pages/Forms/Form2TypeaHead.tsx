import BreadcrumbItem from "../../Common/BreadcrumbItem";
import FormTypeAhead from "../../views/from/TypeAhead/FormTypeAhead";
import React from "react";
import {  Col, Row } from "react-bootstrap";

const Form2TypeaHead = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="TypeAhead" />
            <Row>
                <Col lg={12}>
                    <FormTypeAhead/>
                </Col>
            </Row>
        </React.Fragment>
    );
}


export default Form2TypeaHead;