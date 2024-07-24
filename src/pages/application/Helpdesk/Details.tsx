import React from 'react'
import { Row } from 'react-bootstrap'
import ThemeCustomization from '../../../views/Helpdesk/Details/ThemeCustomization'
import TicketDetails from '../../../views/Helpdesk/Details/TicketDetails'
import BreadcrumbItem from '../../../Common/BreadcrumbItem'

const Details = () => {
  
  return (
    <React.Fragment>
         <BreadcrumbItem mainTitle="Helpdesk" subTitle="Ticket Details" />
            <Row>
                <ThemeCustomization/>
                <TicketDetails />
            </Row>
    </React.Fragment>
  )
}

export default Details
