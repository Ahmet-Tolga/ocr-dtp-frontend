import BreadcrumbItem from "../../Common/BreadcrumbItem";
import FormColorOptions from "../../views/from/Radio/FormColorOptions";
import FormCustomRadio from "../../views/from/Radio/FormCustomRadio";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Form2Radio = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Radio" />
            <Row>
                <Col md={12}>
                    <FormCustomRadio />
                    <FormColorOptions />
                </Col>
            </Row>
        </React.Fragment>
    )
}



export default Form2Radio;