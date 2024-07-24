import React from "react";
import BreadcrumbItem from "../../Common/BreadcrumbItem";
import FormExample from "../../views/from/MegaOption/FormExample";
import FormHorizontal from "../../views/from/MegaOption/FormHorizontal";
import { Col, Row } from "react-bootstrap";

const Form2Megaoption = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Mega Option" />
            <Row>
                <Col md={12}>
                    <FormExample/>
                    <FormHorizontal/>
                </Col>
            </Row>
        </React.Fragment>
    )
}


export default Form2Megaoption;