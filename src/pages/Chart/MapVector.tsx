import BreadcrumbItem from "../../Common/BreadcrumbItem";
import GoogleMap from "../../views/Maps/GoogleMap";
import React from "react";
import { Row } from "react-bootstrap";

const MapVector = () => {
    document.title = "Apex Charts | Light Able Dashboard Template";
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Charts" subTitle="Vector Map" />
            <Row>
                <GoogleMap />
            </Row>
        </React.Fragment >
    );
}



export default MapVector;