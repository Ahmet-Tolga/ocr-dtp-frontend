import React from 'react'
import BreadcrumbItem from '../../../Common/BreadcrumbItem'
import Overview from '../../../views/Invoice/List/Overview'
import InvoiceMemberInfo from '../../../views/Invoice/List/InvoiceMemberInfo'
import { Row } from 'react-bootstrap'

const List = () => {
  return (
    <React.Fragment>
         <BreadcrumbItem mainTitle="Invoice" subTitle="List" />
            <Row>
                <Overview/>
                <InvoiceMemberInfo/>
            </Row>
    </React.Fragment>
  )
}

export default List
