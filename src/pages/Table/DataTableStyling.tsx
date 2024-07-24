import BreadcrumbItem from "../../Common/BreadcrumbItem";
import Basic from "../../views/Table/DataTable/Basic";
import Hoverable from "../../views/Table/DataTable/Hoverable";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const DatatableStyling = () => {
  return (
    <React.Fragment>
      <BreadcrumbItem mainTitle="DataTable" subTitle="DataTable Styling" />
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <h5>Basic Table</h5>
              <small>
              The DataTables default style file has a number of features which can be enabled based on the class name of the table
              </small>
            </Card.Header>
            <Card.Body>
              <div className="dt-responsive">
                <Basic />
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <h5>Compact Grid</h5>
              <small>
              This example shows DataTables with just the hover class specified. This class instructs DataTables&apos; styling to highlight a row when the mouse is hovered over it.
              </small>
            </Card.Header>
            <Card.Body>
              <div className="dt-responsive">
                <Hoverable />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};



export default DatatableStyling;
