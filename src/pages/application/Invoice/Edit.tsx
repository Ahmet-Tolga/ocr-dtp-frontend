import React from 'react'
import { Row,Col,Card,CardBody } from 'react-bootstrap'
import BreadcrumbItem from '../../../Common/BreadcrumbItem'
import EditDetailInvoice from '../../../views/Invoice/Edit/EditDetailInvoice'
import { Helmet } from 'react-helmet'

const Edit = () => {
  return (
    <React.Fragment>
        <BreadcrumbItem mainTitle="Invoice" subTitle="Edit" />
        <Helmet title='Edit Invoice | Light Able admin and dashboard template offer a variety of UI elements and pages, ensuring your admin panel is both fast and effective.' />

            <Row>
                <Col sm={12}>
                    <Card>
                        <CardBody>
                                <Row className='g-3'>
                                    <EditDetailInvoice/>
                                </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
    </React.Fragment>
  )
}

export default Edit
