import React from 'react'
import BreadcrumbItem from '../../../Common/BreadcrumbItem'
import { Row, Col } from 'react-bootstrap'
import NewPublish from '../../../views/Gallary/Grid/NewPublish'
import OldPublish from '../../../views/Gallary/Grid/OldPublish'



const Grid = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Gallery" subTitle="Grid" />
            <Row>
                <Col>
                    <NewPublish/>
                    <OldPublish/>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Grid
