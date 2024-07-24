import BreadcrumbItem from "../../Common/BreadcrumbItem";
import FormDropzone from "../../views/from/FileUpload/FormDropzone";
import React from "react";
import { Col, Row } from "react-bootstrap";

const FileUpload = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="File Upload" />
            <Row>
                <Col md={12}>
                    <FormDropzone/>
                </Col>
            </Row>
        </React.Fragment>
    )
}



export default FileUpload;