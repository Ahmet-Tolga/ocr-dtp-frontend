import BreadcrumbItem from "../../Common/BreadcrumbItem";
import FormReCaptcha from "../../views/from/ReCaptcha/FormReCaptcha";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Form2Recaptcha = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="ReCaptcha" />
            <Row>
                <Col sm={12}>
                    <FormReCaptcha/>
                </Col>
            </Row>
        </React.Fragment>
    )
}



export default Form2Recaptcha;