import BreadcrumbItem from "../../Common/BreadcrumbItem";

import FormSizing from "../../views/from/Option/FormSizing";
import FormBasicInputs from "../../views/from/Option/FormBasicInputs";
import FormHtmlInputTypes from "../../views/from/Option/FormHtmlInputTypes";
import FormInputAttributes from "../../views/from/Option/FormInputAttributes";
import React  from "react";
import { Col, Row } from "react-bootstrap";
import FormAdvanceInputAttributes from "../../views/from/Option/FormAdvanceInputAttributes";

const Form2Basic = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Form Option" />
            <Row>
                <Col sm={6}>
                    <FormBasicInputs />
                    <FormHtmlInputTypes />
                </Col>
                <Col sm={6}>
                    <FormSizing />
                    <FormInputAttributes />
                    <FormAdvanceInputAttributes />
                </Col>
            </Row>
        </React.Fragment>
    )
}


export default Form2Basic;