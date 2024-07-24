import React  from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import BreadcrumbItem from "../../Common/BreadcrumbItem";
import Clipboard from "../../views/from/Clipboard";

const Form2Clipboard = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Clipboard" />
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={(event: any) => event.preventDefault()}>
                                <Clipboard />
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}



export default Form2Clipboard;