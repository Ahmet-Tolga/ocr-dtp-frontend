import BreadcrumbItem from "../../Common/BreadcrumbItem";
import FormControlDivider from "../../views/from/FormLayout/FormControlDivider";
import HorizontalFormLayout from "../../views/from/FormLayout/HorizontalFormLayout";
import InputLabelAlignment from "../../views/from/FormLayout/InputLabelAlignment";
import SimpleFormLayout from "../../views/from/FormLayout/SimpleFormLayout";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Form2LayoutDefault = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Simple Form Layout" />
            <Row>
                <Col md={6}>
                    <SimpleFormLayout/>
                    <FormControlDivider/>
                </Col>
                <Col md={6}>
                    <HorizontalFormLayout/>
                    <InputLabelAlignment/>
                </Col>
            </Row>
        </React.Fragment>
    )
}



export default Form2LayoutDefault;