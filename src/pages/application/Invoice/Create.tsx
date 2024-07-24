import React from 'react'
import { Row, Col } from 'react-bootstrap'
import BreadcrumbItem from '../../../Common/BreadcrumbItem'
import InvoiceCreate from '../../../views/Invoice/Create/InvoiceCreate'
const Create = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Invoice" subTitle="Create" />
            <Row>
                <Col sm={12}>
                    <InvoiceCreate />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Create