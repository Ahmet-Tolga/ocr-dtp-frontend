import React, {  useState } from "react";
import { Col, Row } from "react-bootstrap";
import BreadcrumbItem from "../../Common/BreadcrumbItem";
import EcomFilter from "../../views/application/E-comerece/EcomFilter";
import EcomContent from "../../views/application/E-comerece/EcomContent";

const EcomProduct = () => {
    const [collapse, setCollapse] = useState<any>(true);
    const handleCollapse = () => {
        setCollapse(!collapse);
    };
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="E-commerce" subTitle="Products" />
            <Row>
                <Col sm={12}>
                    <div className="ecom-wrapper">
                        <EcomFilter collapse={collapse} />
                        <EcomContent handleCollapse={handleCollapse} collapse={collapse} />
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
}



export default EcomProduct;