import BreadcrumbItem from "../../Common/BreadcrumbItem";
import ProductDescription from "../../views/application/E-ProductAdd/ProductDescription";
import ProductVariant from "../../views/application/E-ProductAdd/ProductVariant";
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const EcomProductAdd = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="E-commerce" subTitle="Add New Product" />
            <Row>
                <ProductDescription />
                <ProductVariant />
                <Col sm={12}>
                    <Card>
                        <Card.Body className="text-end btn-page">
                            <button className="btn btn-primary mb-0">Save product</button>&nbsp;
                            <button className="btn btn-outline-secondary mb-0">Reset</button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};




export default EcomProductAdd;