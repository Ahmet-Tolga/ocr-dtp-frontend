import { apimethod } from "../../Common/jsonData";
import TableContainer from "../../Common/TableContainer";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import BreadcrumbItem from "../../Common/BreadcrumbItem";

const TableDataFetchApi = () => {

  const columns = [
    { header: "Name", enableColumnFilter: false, accessorKey: "Name" },
    { header: "Ext.", enableColumnFilter: false, accessorKey: "Ext" },
    { header: "City", enableColumnFilter: false, accessorKey: "City" },
    {
      header: "Start Date",
      enableColumnFilter: false,
      accessorKey: "StartDate"
    }
  ];

  return (
    <React.Fragment>
      <BreadcrumbItem subTitle="Fetch API" mainTitle="Table" />
      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <h5>Fetch API</h5>
            </Card.Header>
            <Card.Body className="table-border-style">
              <div id="pc-dt-fetchapi">
                <TableContainer
                  columns={columns || []}
                  data={apimethod || []}
                  isGlobalFilter={true}
                  isBordered={false}
                  customPageSize={10}
                  isPagination={true}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};



export default TableDataFetchApi;
