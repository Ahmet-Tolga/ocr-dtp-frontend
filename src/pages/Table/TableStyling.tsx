import BreadcrumbItem from "../../Common/BreadcrumbItem";
import CustomTableColor from "../../views/Table/Bootstrap/StylingTable/CustomTableColor";
import CustomTableColorHover from '../../views/Table/Bootstrap/StylingTable/CustomTableColorHover'
import DefaultStylingTable from "../../views/Table/Bootstrap/StylingTable/DefaultStylingTable";
import TableFooterStyling from "../../views/Table/Bootstrap/StylingTable/TableFooterStyling";
import React from "react";
import { Col, Row } from "react-bootstrap";

const TableStyling = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Table" subTitle="Styling" />
            <Row>
                <Col md={6}>
                    <DefaultStylingTable />
                    <CustomTableColor />
                </Col>
                <Col md={6}>
                    <TableFooterStyling />
                    <CustomTableColorHover />
                </Col>
            </Row>
        </React.Fragment>
    )
}



export default TableStyling;