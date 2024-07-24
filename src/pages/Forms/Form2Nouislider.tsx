import BreadcrumbItem from "../../Common/BreadcrumbItem";
import FormBasicSetup from "../../views/from/NoUiSlider/FormBasicSetup";
import FormInput from "../../views/from/NoUiSlider/FormInput";
import FormPipsSlider from "../../views/from/NoUiSlider/FormPipsSlider";
import FormSliderTooltip from "../../views/from/NoUiSlider/FormSliderTooltip";
import FormSoftLimits from "../../views/from/NoUiSlider/FormSoftLimits";
import FormVerticalSlider from "../../views/from/NoUiSlider/FormVerticalSlider";
import FormWorkingDates from "../../views/from/NoUiSlider/FormWorkingDates";
import React from "react";
import { Col, Row, Card } from "react-bootstrap";


const Form2Nouislider = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="NoUiSlider" />
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <FormBasicSetup />
                            <FormWorkingDates />
                            <FormPipsSlider />
                            <FormSliderTooltip />
                            <FormInput />
                            <FormSoftLimits />
                            <FormVerticalSlider />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment >
    );
}



export default Form2Nouislider;