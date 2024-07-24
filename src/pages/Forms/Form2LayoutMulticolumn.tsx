import BreadcrumbItem from "../../Common/BreadcrumbItem";
import ColumnsFormLayout from "../../views/from/MultiLayout/ColumnsFormLayout";
import ColumnsHorizontalLayout from "../../views/from/MultiLayout/ColumnsHorizontalLayout";
import ThreeColumnsHorizontal from "../../views/from/MultiLayout/ThreeColumnsHorizontal";
import ThreeColumnsLayout from "../../views/from/MultiLayout/ThreeColumnsLayout";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Form2LayoutMulticolumn = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Multi Layout" />
            <Row>
                <Col md={12}>
                    <ColumnsFormLayout/>
                    <ColumnsHorizontalLayout/>
                    <ThreeColumnsLayout/>
                    <ThreeColumnsHorizontal/>
                </Col>

            </Row>
        </React.Fragment>
    )
}



export default Form2LayoutMulticolumn;