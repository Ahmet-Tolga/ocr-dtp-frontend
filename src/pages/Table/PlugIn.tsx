import React from 'react'
import BreadcrumbItem from '../../Common/BreadcrumbItem'
import { Row } from 'react-bootstrap'
import ApiPlugInMethod from '../../views/Table/DataTable/PlugIn/ApiPlugInMethod'
import OrderingPlug from '../../views/Table/DataTable/PlugIn/OrderingPlug'
import CustomFiltering from '../../views/Table/DataTable/PlugIn/CustomFiltering'

const PlugIn = () => {
  return (
    <React.Fragment>
      <BreadcrumbItem mainTitle="DataTable" subTitle="Plug-ins" />
      <Row>
        <ApiPlugInMethod/>
        <OrderingPlug/>
        <CustomFiltering/>
      </Row>
    </React.Fragment>
  )
}

export default PlugIn
