import React from 'react'
import BreadcrumbItem from '../../../Common/BreadcrumbItem'
import { Row,Col, Card } from 'react-bootstrap'
import SettingTop from '../../../views/Membership/Setting/SettingTop'

const Setting = () => {
  return (
    <React.Fragment>
        <BreadcrumbItem mainTitle="Membership" subTitle="Setting" />
        <Row>
            <Col>
                <Card>
                    <SettingTop/>
                </Card>
            </Col>
        </Row>
    </React.Fragment>
  )
}

export default Setting
