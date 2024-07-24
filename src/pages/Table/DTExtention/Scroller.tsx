import React from 'react'
import BreadcrumbItem from '../../../Common/BreadcrumbItem'
import { Row } from 'react-bootstrap'
import BasicTableScroll from '../../../views/Table/DTExtention/Scroller/BasicTableScroll'
import StateSaving from '../../../views/Table/DTExtention/Scroller/StateSaving'
import Api from '../../../views/Table/DTExtention/Scroller/Api'

const Scroller = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="DataTable" subTitle="Scroller" />
            <Row>
                <BasicTableScroll />
                <StateSaving />
                <Api />
            </Row>
        </React.Fragment>
    )
}

export default Scroller