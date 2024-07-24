import BreadcrumbItem from "../../Common/BreadcrumbItem";

import FormColorOptions from "../../views/Checkbox/FormColorOptions";
import FormCustomCheckbox from "../../views/Checkbox/FormCustomCheckbox";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Form2Checkbox = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Checkbox" />
            <Row>
                <Col md={12}>
                    <FormCustomCheckbox/>
                    <FormColorOptions/>
                </Col>
            </Row>
        </React.Fragment>
    )
}



export default Form2Checkbox;