import React from "react";
import { Row } from "react-bootstrap";
import BreadcrumbItem from "../../Common/BreadcrumbItem";

import InputMaskData from "../../views/from/InputMask/InputData";
import InputTime from "../../views/from/InputMask/InputTime";
import InputPhoneNo from "../../views/from/InputMask/InputPhoneNo";
import InputNetwork from "../../views/from/InputMask/InputNetwork";

const Form2Inputmask = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Input Mask" />
            <Row>
                <InputMaskData />
                <InputTime />
                <InputPhoneNo />
                <InputNetwork />
            </Row>
        </React.Fragment>
    )
}



export default Form2Inputmask;