import BreadcrumbItem from "../../Common/BreadcrumbItem";
import FormBubbleTheme from "../../views/from/Quill/FormBubbleTheme";
import FormSnowTheme from "../../views/from/Quill/FormSnowTheme";
import React from "react";
import {  Row } from "react-bootstrap";

const Form2Quill = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Quill Editor" />
            <Row>
                <FormSnowTheme />
                <FormBubbleTheme />
            </Row>
        </React.Fragment>
    )
}

export default Form2Quill;