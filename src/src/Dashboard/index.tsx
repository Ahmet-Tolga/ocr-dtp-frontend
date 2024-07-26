import { Row } from "react-bootstrap";

import Widgets from "../views/Dashboard/widgets";
import { widgetData, socialWidgetsData } from "../Common/jsonData";
import UnitedStatesMap from "../views/Dashboard/UnitedStatesMap";
import UsersCharts from "../views/Dashboard/UsersCharts";
import SocialWidgets from "../views/Dashboard/SocialWidgets";
import RecentUsers from "../views/Dashboard/RecentUsers";
import AuthGuard from "../utils/route-guard/authGuard";

const Dashboard = () => {
  return (
    <>
      <AuthGuard>
        <Row style={{ paddingTop: "80px" }}>
          <Widgets widgetData={widgetData} />
          <UnitedStatesMap />
          <UsersCharts />
          <SocialWidgets socialWidgetsData={socialWidgetsData} />
          <RecentUsers />
        </Row>
      </AuthGuard>
    </>
  )
}


export default Dashboard;