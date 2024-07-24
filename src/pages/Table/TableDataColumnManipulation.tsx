import React from "react";
import BreadcrumbItem from "../../Common/BreadcrumbItem";
import { Card, Col, Row } from "react-bootstrap";
import TableContainer from "../../Common/TableContainer";
import { tableData } from '../../Common/jsonData'

const TableDataColumnManipulation = () => {
  const columns = [
    { header: "Name", accessorKey: "name", enableColumnFilter: false },
    { header: "Ext.", accessorKey: "ext", enableColumnFilter: false },
    { header: "City", accessorKey: "city", enableColumnFilter: false },
    { header: "Start Date", accessorKey: "date", enableColumnFilter: false },
    {
      header: "Completion",
      accessorKey: "completion",
      cell: (cellProps: any) => {
        const rowData = cellProps.row.original;
        const rowNumber = cellProps.row.index + 2;

        const handleButtonClick = () => {
          // Display the row data in a message or alert
          alert(`This is ${rowNumber} row of 10 rendered rows and row ${JSON.stringify(rowData.id)} of total rows.

The row data is: 
["${rowData.name}", "${rowData.ext}", "${rowData.city}", "${rowData.date}", "${rowData.completion}%"]`);
        };

        return (
          <>
            <span>{cellProps.getValue()}%</span>
            <button
              type="button"
              data-id="0"
              className="btn btn-sm btn-primary mx-2 notify"
              onClick={handleButtonClick}
            >
              Click Me
            </button>
          </>
        );
      },
      enableColumnFilter: false
    },
  ];

  return (
    <React.Fragment>
      <BreadcrumbItem mainTitle="Table" subTitle="Column Manipulation" />
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h5>Column Manipulation</h5>
            </Card.Header>
            <Card.Body className="table-border-style">
              <div id="pc-dt-export">
                <TableContainer
                  columns={columns || []}
                  data={tableData || []}
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



export default TableDataColumnManipulation;
