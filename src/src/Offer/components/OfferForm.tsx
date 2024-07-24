import React  from "react";
import { Col, Row } from "react-bootstrap";
import FormInputs from "./FormInputs";
import styled from "styled-components";

const StyledRow=styled(Row)(()=>({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
}));

const Form = () => {
    return (
        <React.Fragment>
            <StyledRow>
                <Col sm={6}>
                    <FormInputs />
                </Col>
            </StyledRow>
        </React.Fragment>
    )
}


export default Form;