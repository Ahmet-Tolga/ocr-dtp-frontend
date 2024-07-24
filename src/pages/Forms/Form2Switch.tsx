
import BreadcrumbItem from "../../Common/BreadcrumbItem";
import FormInlineSwitch from "../../views/from/Switch/FormInlineSwitch";
import FormSizing from "../../views/from/Switch/FormSizing";
import FormSwitchHorizontal from "../../views/from/Switch/FormSwitchHorizontal";
import FormSwitchV1 from "../../views/from/Switch/FormSwitchV1";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Form2Switch = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Switch" />
            <Row>
                <Col md={12}>
                    <FormSwitchV1 />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormInlineSwitch />
                    <FormSwitchHorizontal />
                </Col>
                <Col md={6}>
                    <FormSizing/>
                </Col>
            </Row>
        </React.Fragment>
    )
}



export default Form2Switch;