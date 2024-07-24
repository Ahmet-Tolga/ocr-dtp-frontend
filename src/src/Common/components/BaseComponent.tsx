import { Card, Col, Nav, Row, Tab } from "react-bootstrap";

const BaseNavbar = (props: any) => {
    return (
        <>
            <Row>
                <Tab.Container>
                    <Col sm={12}>
                        <Card style={{marginTop:"30px",height:"10vh"}}>
                            <Card.Body className="p-2" style={{display:"flex",alignItems:"center"}}>
                                <Nav as="ul" className="nav-tabs checkout-tabs mb-0" id="myTab" role="tablist">
                                    <Nav.Item >
                                        <div className="d-flex align-items-center">

                                            <div className="flex-grow-1 ms-2">
                                                <h5 className="mb-0">{props.NavbarTitle}</h5>
                                            </div>
                                        </div>
                                    </Nav.Item>
                                </Nav>
                            </Card.Body>
                        </Card>
                    </Col>
                </Tab.Container>
            </Row>
        </>
    )
}

export default BaseNavbar;