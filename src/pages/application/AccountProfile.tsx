import { Col, Row, Tab } from "react-bootstrap";
import BreadcrumbItem from "../../Common/BreadcrumbItem";
import EmailVerification from "../../views/application/Users/EmailVerification";
import UserInfo from "../../views/application/Users/UserInfo";
import ProfileOverview from "../../views/application/Users/ProfileOverview";
import PersonalInfo from "../../views/application/Users/PersonalInfo";
import AccountInfo from "../../views/application/Users/AccountInfo";
import ChangePassword from "../../views/application/Users/ChangePassword";
import EmailSetting from "../../views/application/Users/EmailSetting";

const AccountProfile = () => {
    return (
        <>
            <BreadcrumbItem mainTitle="Users" subTitle="Account Profile" />
            <Row>

                <Col sm={12}>
                    <EmailVerification />
                    <Tab.Container defaultActiveKey="ProfileInfo">
                        <Row>
                            <UserInfo />
                            <Col lg={7} xxl={9}>
                                <Tab.Content id="user-set-tabContent">
                                    <ProfileOverview />
                                    <PersonalInfo />
                                    <AccountInfo />
                                    <ChangePassword />
                                    <EmailSetting />
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                    <div />
                </Col>
            </Row >
        </>
    )
    
}

export default AccountProfile;