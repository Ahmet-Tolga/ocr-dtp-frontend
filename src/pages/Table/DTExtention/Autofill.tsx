import React from 'react'
import BreadcrumbItem from '../../../Common/BreadcrumbItem'
import { Row } from 'react-bootstrap'
import AutoFillTable from '../../../views/Table/DTExtention/Autofill'
import KeyTable from '../../../views/Table/DTExtention/KeyTable'
import ScrollingTable from '../../../views/Table/DTExtention/ScrollingTable'
import ColumnSelector from '../../../views/Table/DTExtention/Button/ColumnSelector'

const Autofill = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="DataTable" subTitle="AutoFill" />
            <Row>
                <AutoFillTable />
                <KeyTable />
                <ColumnSelector />
                <ScrollingTable />
            </Row>
        </React.Fragment>
    )
}

export default Autofill