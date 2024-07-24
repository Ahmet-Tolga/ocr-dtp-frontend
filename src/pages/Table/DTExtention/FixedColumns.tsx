import React from 'react'
import BreadcrumbItem from '../../../Common/BreadcrumbItem'
import { Row } from 'react-bootstrap'
import LeftTable from '../../../views/Table/DTExtention/FixedColumns/LeftTable'
import RightTable from '../../../views/Table/DTExtention/FixedColumns/RightTable'

const FixedColumns = () => {
        return (
            <React.Fragment>
                <BreadcrumbItem mainTitle="DataTable" subTitle="FixedColumns" />
                <Row>
                    <LeftTable />
                    <RightTable />
                </Row>
            </React.Fragment>
        )
    }

export default FixedColumns