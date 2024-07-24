import BreadcrumbItem from "../../Common/BreadcrumbItem";
import FormStickyActionBar from "../../views/from/StickyActionBar/FormStickyActionBar";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Form2LayoutStickyActionbars = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Sticky Action Bar" />
            <Row>
                <Col sm={12}>
                    <FormStickyActionBar/>
                </Col>
            </Row>
        </React.Fragment>
    )
}


export default Form2LayoutStickyActionbars;