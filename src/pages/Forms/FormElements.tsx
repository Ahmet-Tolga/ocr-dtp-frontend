import BreadcrumbItem from "../../Common/BreadcrumbItem";

import FormChecksAndRadios from "../../views/from/Elements/FormChecksAndRadios";
import FormControls from "../../views/from/Elements/FormControls";
import FormCustom from "../../views/from/Elements/FormCustom";
import FormDataList from "../../views/from/Elements/FormDataList";
import FormGrid from "../../views/from/Elements/FormGrid";
import FormHorizontal from "../../views/from/Elements/FormHorizontal";
import InlineForm from "../../views/from/Elements/FormInline";
import FormInputGroup from "../../views/from/Elements/FormInputGroup";
import FormSizing from "../../views/from/Elements/FormSizing";
import FormSupportedElements from "../../views/from/Elements/FormSupportedElements";
import FormTooltips from "../../views/from/Elements/FormTooltips";
import FormValidation from "../../views/from/FormValidation/FormValidation";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Formelements = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Elements" />
            <Row>
                <Col md={12}>
                    <FormControls />
                    <FormSizing />
                    <FormDataList />
                    <InlineForm />
                    <FormGrid/>
                    <FormHorizontal/>
                    <FormValidation />
                    <FormSupportedElements />
                    <FormTooltips/>
                    <FormChecksAndRadios/>
                    <FormInputGroup/>
                    <FormCustom/>
                </Col>
            </Row>
        </React.Fragment>
    )
}


export default Formelements;