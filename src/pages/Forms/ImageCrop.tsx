import React  from "react";
import BreadcrumbItem from "../../Common/BreadcrumbItem";
import FormImageCropper from "../../views/from/ImageCropper/FormImageCropper";
import { Col, Row } from "react-bootstrap";

const Imagecrop = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Image Cropper" />
            <Row>
                <Col md={12}>
                    <FormImageCropper/>
                </Col>
            </Row>
        </React.Fragment>
    )
}



export default Imagecrop;