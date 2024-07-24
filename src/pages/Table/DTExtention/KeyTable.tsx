import React from 'react'
import BreadcrumbItem from '../../../Common/BreadcrumbItem'
import { Row } from 'react-bootstrap'
import BasicInitialization from '../../../views/Table/DTExtention/FixedHeader/BasicInitialization'
import ScrollingTable from '../../../views/Table/DTExtention/KeyTable/ScrollingTable'
import FocusCell from '../../../views/Table/DTExtention/KeyTable/FocusCell'

const KeyTable = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="DataTable" subTitle="KeyTable" />
            <Row>
                <BasicInitialization />
                <ScrollingTable />
                <FocusCell />
            </Row>
        </React.Fragment>
    )
}

export default KeyTable