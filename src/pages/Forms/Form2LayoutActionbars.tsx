import BreadcrumbItem from "../../Common/BreadcrumbItem";
import SimpleActionBar from "../../views/from/ActionBars/FormActionBar";
import FormActionButtonLink from "../../views/from/ActionBars/FormActionButtonLink";
import FormLayoutButton from "../../views/from/ActionBars/FormLayoutButton";
import FormRightActionBar from "../../views/from/ActionBars/FormRightActionBar";
import HorizontalForm from "../../views/from/ActionBars/HorizontalForm";
import Top_BottomActionsBars from "../../views/from/ActionBars/Top_BottomActionsBars";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Form2LayoutActionbars = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Action Bars" />
            <Row>
                <Col md={6}>
                    <SimpleActionBar/>
                    <FormActionButtonLink/>
                    <FormLayoutButton/>
                </Col>
                <Col md={6}>
                    <FormRightActionBar/>
                    <HorizontalForm/>
                    <Top_BottomActionsBars/>
                </Col>
            </Row>
        </React.Fragment>
    )
}



export default Form2LayoutActionbars;