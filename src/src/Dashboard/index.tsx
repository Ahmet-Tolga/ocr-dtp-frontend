import React from "react";
import { Row } from "react-bootstrap";

import Widgets from "../views/Dashboard/widgets";
import { widgetData, socialWidgetsData } from "../Common/jsonData";
import UnitedStatesMap from "../views/Dashboard/UnitedStatesMap";
import UsersCharts from "../views/Dashboard/UsersCharts";
import SocialWidgets from "../views/Dashboard/SocialWidgets";
import RecentUsers from "../views/Dashboard/RecentUsers";
import RecentTableData from "../views/Dashboard/RecentTableData";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Row style={{paddingTop:"80px"}}>
        <Widgets widgetData={widgetData} />
        <UnitedStatesMap />
        <UsersCharts />
        <SocialWidgets socialWidgetsData={socialWidgetsData} />
        <RecentUsers />
        <RecentTableData />
      </Row>
    </React.Fragment>
  )
}


export default Dashboard;