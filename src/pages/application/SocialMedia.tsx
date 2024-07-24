import React from "react";
import { Col, Row, Tab } from "react-bootstrap";
import BreadcrumbItem from "../../Common/BreadcrumbItem";
import SocialProfile from "../../views/application/SocialMedia/SocialProfile";
import SocialTab from "../../views/application/SocialMedia/SocialTab";
import SocialSideBar from "../../views/application/SocialMedia/SocialSideBar";
import Profile from "../../views/application/SocialMedia/Profile";
import Friends from "../../views/application/SocialMedia/Friends";
import GalleryRequest from "../../views/application/SocialMedia/GalleryRequest";
import FriendsRequest from "../../views/application/SocialMedia/FriendsRequest";

const SocialMedia = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Application" subTitle="Social Media" />
            <Row>
                <Col sm={12}>
                    <SocialProfile />
                    <Tab.Container defaultActiveKey="profile">
                        <SocialTab />
                        <Row>
                            <Col lg={8} xxl={9}>
                                <Tab.Content>
                                    <Profile />
                                    <Friends />
                                    <FriendsRequest />
                                    <GalleryRequest/>
                                </Tab.Content>
                            </Col>
                            <SocialSideBar />

                        </Row>
                    </Tab.Container>
                </Col>
            </Row >
        </React.Fragment>
    )
}



export default SocialMedia;