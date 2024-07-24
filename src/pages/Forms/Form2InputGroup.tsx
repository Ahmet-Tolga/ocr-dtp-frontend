import BreadcrumbItem from "../../Common/BreadcrumbItem";
import FormBasicExample from "../../views/from/InputGroup/FormBasicExample";
import FormInputGroupOptions from "../../views/from/InputGroup/FormInputGroupOptions";
import FormInputGroupSizing from "../../views/from/InputGroup/FormInputGroupSizing";
import React  from "react";
import { Col, Row } from "react-bootstrap";

const Form2InputGroup = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Input Group" />
            <Row>
                <Col sm={6}>
                    <FormBasicExample/>
                    <FormInputGroupSizing />
                </Col>
                <Col sm={6}>
                    <FormInputGroupOptions/>
                </Col>
            </Row>
        </React.Fragment>
    )
}



export default Form2InputGroup;