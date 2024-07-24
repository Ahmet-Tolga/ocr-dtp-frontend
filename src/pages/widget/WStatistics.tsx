import React from "react";
import BreadcrumbItem from "../../Common/BreadcrumbItem";
import { Row } from "react-bootstrap";
import Widget1 from "../../views/widgets/WStatistics/Widget1";
import Widget2 from "../../views/widgets/WStatistics/Widgets2";
import OtherWidgets from "../../views/widgets/WStatistics/OtherWidgets";
import Earnings from "../../views/widgets/WStatistics/Earnings";
import Widgets3 from "../../views/widgets/WStatistics/Widgets3";

const WStatistics = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Widget" subTitle="Statistics" />
            <Row>
                <Widget1 />
                <Widget2 />
                <OtherWidgets /> 
                <Earnings />
                <Widgets3 />
            </Row>
        </React.Fragment>   
    )
}


export default WStatistics;