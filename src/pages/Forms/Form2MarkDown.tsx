import BreadcrumbItem from "../../Common/BreadcrumbItem";
import SimpleMarkdown from "../../views/from/Markdown/SimpleMarkdown";
import React  from "react";
import { Col, Row } from "react-bootstrap";

const Markdown = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Markdown" />
            <Row>
                <Col lg={12}>
                    <SimpleMarkdown />
                </Col>
            </Row>
        </React.Fragment>
    )
}



export default Markdown;