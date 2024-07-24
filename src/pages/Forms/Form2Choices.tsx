import React from "react";
import { Col, Row } from "react-bootstrap";
import BreadcrumbItem from "../../Common/BreadcrumbItem";
import FormChoicesjs from "../../views/from/Select/FormChoicesjs";
import FormInteraction from "../../views/from/Select/FormInteraction";
import Multipleselectinput from "../../views/from/Select/Multipleselectinput";
import SingleSelectInput from "../../views/from/Select/SingleSelectInput";

const Form2Choices = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Choices" />
            <Row>
                <Col md={12}>
                    <FormChoicesjs />
                    <Multipleselectinput />
                    <SingleSelectInput />
                    <FormInteraction />
                </Col>
            </Row>
        </React.Fragment>
    )
}



export default Form2Choices;