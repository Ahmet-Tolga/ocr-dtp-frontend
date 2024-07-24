import BreadcrumbItem from "../../Common/BreadcrumbItem";
import { filterdata } from "../../Common/jsonData";
import TableContainer from "../../Common/TableContainer";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const TableDataFilters = () => {
  const columns = [
    { header: "Name", accessorKey: "Name", enableColumnFilter: false },
    { header: "Job", accessorKey: "Job", enableColumnFilter: false },
    { header: "Company", accessorKey: "Company", enableColumnFilter: false },
    { header: "Ext.", accessorKey: "Ext", enableColumnFilter: false },
    { header: "Start Date", accessorKey: "Start", enableColumnFilter: false },
    { header: "Email", accessorKey: "Email", enableColumnFilter: false },
    { header: "Phone No.", accessorKey: "Phone", enableColumnFilter: false }
  ];

  return (
    <React.Fragment>
      <BreadcrumbItem mainTitle="Table" subTitle="Filters" />
      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <h5>Filters</h5>
            </Card.Header>
            <Card.Body className="table-border-style">
              <div id="pc-dt-filter">
                <TableContainer
                  columns={columns || []}
                  data={filterdata || []}
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



export default TableDataFilters;
