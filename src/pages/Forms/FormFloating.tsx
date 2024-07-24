import BreadcrumbItem from "../../Common/BreadcrumbItem";
import FormFloatingLabels from "../../views/from/Floating/FormFloatingLabels";
import FormSelect from "../../views/from/Floating/FormSelect";
import FormTextareas from "../../views/from/Floating/FormTextareas";
import React  from "react";
import { Col, Row } from "react-bootstrap";

const Formfloating = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Floating Label" />
            <Row>
                <Col md={12}>
                   <FormFloatingLabels/>
                   <FormTextareas/>
                   <FormSelect />
                </Col>
            </Row>
        </React.Fragment>
    )
}



export default Formfloating;