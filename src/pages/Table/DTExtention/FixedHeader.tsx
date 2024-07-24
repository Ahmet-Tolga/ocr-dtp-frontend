import React from 'react'
import BreadcrumbItem from '../../../Common/BreadcrumbItem'
import { Row } from 'react-bootstrap'
import BasicInitialization from '../../../views/Table/DTExtention/FixedHeader/BasicInitialization'
import HeaderAndFooter from '../../../views/Table/DTExtention/FixedHeader/HeaderAndFooter'
import ColReorder from '../../../views/Table/DTExtention/FixedHeader/ColReorder'

const FixedHeader = () => {
  return (
    <React.Fragment>
        <BreadcrumbItem mainTitle="DataTable" subTitle="Fixed Header" />
                <Row>
                    <BasicInitialization />
                    <HeaderAndFooter />
                    <ColReorder />
                </Row>
    </React.Fragment>
  )
}

export default FixedHeader