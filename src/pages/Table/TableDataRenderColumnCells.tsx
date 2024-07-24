import BreadcrumbItem from "../../Common/BreadcrumbItem";
import RenderColumnCells from '../../views/Table/VenillaTable/RenderColumnCells';

import React from "react";
import { Col, Row } from "react-bootstrap";

const TableDataRenderColumnCells = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Table" subTitle="Render Column Cells" />
            <Row>
                <Col md={12}>
                    <RenderColumnCells />
                </Col>
            </Row>
        </React.Fragment>
    )
}



export default TableDataRenderColumnCells;