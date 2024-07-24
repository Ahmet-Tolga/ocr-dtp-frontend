import React from 'react'
import BreadcrumbItem from '../../Common/BreadcrumbItem'
import { Row, Col, Card } from 'react-bootstrap'
import TeamMemberAddForm from '../../views/application/Users/TeamMemberAddForm'
import TeamMember from '../../views/application/Users/TeamMember'

const Team = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Application" subTitle="Team" />
            <Row>
                <Col sm={12}>
                    <Card className='table-card'>
                       <TeamMemberAddForm/>
                       <TeamMember/>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Team
