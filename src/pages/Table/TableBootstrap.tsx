import BreadcrumbItem from "../../Common/BreadcrumbItem";
import BasicTable from "../../views/Table/Bootstrap/BootstrapTable/BasicTable";
import ContextualClassesTable from "../../views/Table/Bootstrap/BootstrapTable/ContextualClasses";
import DarkTable from "../../views/Table/Bootstrap/BootstrapTable/DarkTable";
import HoverTable from "../../views/Table/Bootstrap/BootstrapTable/HoverTable";
import React  from "react";
import { Col, Row } from "react-bootstrap";

const TableBootstrap = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Table" subTitle="Bootstrap Table" />
            <Row>
                <Col md={6}>
                    <BasicTable />
                    <DarkTable />
                </Col>
                <Col md={6}>
                    <HoverTable />
                    
                </Col>
                <Col md={12}>
                    <ContextualClassesTable />
                </Col>
            </Row>
        </React.Fragment>
    )
}



export default TableBootstrap;