import BreadcrumbItem from "../../Common/BreadcrumbItem";
import BasicTable from "../../views/Table/VenillaTable/BasicTable";
import React from "react";
import { Col, Row } from "react-bootstrap";

const TableDataSimple = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Table" subTitle="Basic initialization" />
            <Row>
                <Col md={12}>
                    <BasicTable />
                </Col>
            </Row>
        </React.Fragment>
    )
}



export default TableDataSimple;