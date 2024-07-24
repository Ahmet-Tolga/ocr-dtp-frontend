import React from "react";
import BreadcrumbItem from "../../Common/BreadcrumbItem";
import { Row } from "react-bootstrap";
import EarningsChart from "../../views/widgets/Wchart/EarningsChart";
import UserActivities from "../../views/widgets/Wchart/UserActivities";
import YearlySummaryChart from "../../views/widgets/Wchart/YearlySummaryChart";
import Overview from "../../views/widgets/Wchart/Overview";
import TotalSalesChart from "../../views/widgets/Wchart/TotalSalesChart";
import TeamPerformance from "../../views/widgets/Wchart/TeamPerformance";
import Overview2Charts from '../../views/widgets/Wchart/Overview2Charts'
import OtherWidgets from "../../views/widgets/WStatistics/OtherWidgets";
import ReportsChart from "../../views/widgets/Wchart/ReportsChart";
import OtherWidgets2 from "../../views/widgets/Wchart/OtherWidgets2";

const WidgetCharts = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Widget" subTitle="Chart" />
            <Row>
                <EarningsChart />
                <UserActivities />
                <YearlySummaryChart />
                <Overview />
                <TotalSalesChart />
                <TeamPerformance />
                <Overview2Charts />
                <OtherWidgets />
                <ReportsChart />
                <OtherWidgets2 />
            </Row>
        </React.Fragment>
    )
}


export default WidgetCharts;