import React from 'react'
import BreadcrumbItem from '../../../Common/BreadcrumbItem'
import { Row } from 'react-bootstrap'
import MemberTicketList from '../../../views/Helpdesk/Ticketlist/MemberTicketList'
import TicketCategories from '../../../views/Helpdesk/Ticketlist/TickeCategories'
import ToggleContent from '../../../views/Helpdesk/Ticketlist/ToggleContent'

const Ticketlist = () => {


  
  return (
    <React.Fragment>
       <BreadcrumbItem mainTitle="Helpdesk" subTitle="Ticket list" />
        <Row>
           <MemberTicketList />
           <ToggleContent/>
           <TicketCategories/>
        </Row>
    </React.Fragment>
  )
}

export default Ticketlist
