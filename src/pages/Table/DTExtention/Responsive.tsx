import React from 'react'
import BreadcrumbItem from '../../../Common/BreadcrumbItem'
import { Row } from 'react-bootstrap'
import Config from '../../../views/Table/DTExtention/Responsive/Config'
import NewConstructor from '../../../views/Table/DTExtention/Responsive/NewConstructor'
import Immediately from '../../../views/Table/DTExtention/Responsive/Immediately'

const Responsive = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="DataTable" subTitle="Responsive" />
            <Row>
                <Config />
                <NewConstructor />
                <Immediately />
            </Row>
        </React.Fragment>
    )
}

export default Responsive