import { Link } from "react-router-dom";
import React from "react";
import { Dropdown } from "react-bootstrap";
import SimpleBar from "simplebar-react";

//import images
import avatar1 from "../assets/images/user/avatar-1.jpg";
import avatar2 from "../assets/images/user/avatar-2.jpg";
import avatar3 from "../assets/images/user/avatar-3.jpg";


const TopBar = () => {


    return (
        <React.Fragment>
            <header className="pc-header">
                <div className="header-wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div className="me-auto pc-mob-drp">
                        <ul className="list-unstyled">
                           
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <div className="ms-auto">
                        <ul className="list-unstyled">
                            <Dropdown
                                as="li"
                                className="pc-h-item">
                                <Dropdown.Toggle
                                    as="a"
                                    className="pc-head-link arrow-none me-0" data-bs-toggle="dropdown" href="#"
                                    aria-haspopup="false">
                                    <i className="ph-duotone ph-bell"></i>
                                    <span className="badge bg-success pc-h-badge">3</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-notification dropdown-menu-end pc-h-dropdown">
                                    <div className="dropdown-header d-flex align-items-center justify-content-between">
                                        <h4 className="m-0">Notifications</h4>
                                        <ul className="list-inline ms-auto mb-0">
                                            <li className="list-inline-item">
                                                <Link to="/application/mail" className="avtar avtar-s btn-link-hover-primary">
                                                    <i className="ti ti-link f-18"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <SimpleBar className="dropdown-body text-wrap header-notification-scroll position-relative h-100"
                                        style={{ maxHeight: "calc(100vh - 235px)" }}
                                    >
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <p className="text-span">Today</p>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar2} alt="user-image" className="user-avtar avtar avtar-s" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <div className="d-flex">
                                                            <div className="flex-grow-1 me-3 position-relative">
                                                                <h6 className="mb-0 text-truncate">Keefe Bond added new tags to 💪
                                                                    Design system</h6>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <span className="text-sm">2 min ago</span>
                                                            </div>
                                                        </div>
                                                        <p className="position-relative text-muted mt-1 mb-2"><br /><span className="text-truncate">Lorem Ipsum has been
                                                            the industry&apos;s standard dummy text ever since the 1500s.</span></p>
                                                        <span className="badge bg-light-primary border border-primary me-1 mt-1">web design</span>
                                                        <span className="badge bg-light-warning border border-warning me-1 mt-1">Dashobard</span>
                                                        <span className="badge bg-light-success border border-success me-1 mt-1">Design System</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="avtar avtar-s bg-light-primary">
                                                            <i className="ph-duotone ph-chats-teardrop f-18"></i>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <div className="d-flex">
                                                            <div className="flex-grow-1 me-3 position-relative">
                                                                <h6 className="mb-0 text-truncate">Message</h6>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <span className="text-sm text-muted">1 hour ago</span>
                                                            </div>
                                                        </div>
                                                        <p className="position-relative text-muted mt-1 mb-2"><br /><span className="text-truncate">Lorem Ipsum has been
                                                            the industry&apos;s standard dummy text ever since the 1500s.</span></p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <p className="text-span">Yesterday</p>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="avtar avtar-s bg-light-danger">
                                                            <i className="ph-duotone ph-user f-18"></i>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <div className="d-flex">
                                                            <div className="flex-grow-1 me-3 position-relative">
                                                                <h6 className="mb-0 text-truncate">Challenge invitation</h6>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <span className="text-sm text-muted">12 hour ago</span>
                                                            </div>
                                                        </div>
                                                        <p className="position-relative text-muted mt-1 mb-2"><br /><span className="text-truncate"><strong> Jonny aber
                                                        </strong> invites to join the challenge</span></p>
                                                        <button className="btn btn-sm rounded-pill btn-outline-secondary me-2">Decline</button>
                                                        <button className="btn btn-sm rounded-pill btn-primary">Accept</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="avtar avtar-s bg-light-info">
                                                            <i className="ph-duotone ph-notebook f-18"></i>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <div className="d-flex">
                                                            <div className="flex-grow-1 me-3 position-relative">
                                                                <h6 className="mb-0 text-truncate">Forms</h6>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <span className="text-sm text-muted">2 hour ago</span>
                                                            </div>
                                                        </div>
                                                        <p className="position-relative text-muted mt-1 mb-2">Lorem Ipsum is simply dummy text of the printing and
                                                            typesetting industry. Lorem Ipsum has been the industry&apos;s standard
                                                            dummy text ever since the 1500s.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar2} alt="user-image" className="user-avtar avtar avtar-s" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <div className="d-flex">
                                                            <div className="flex-grow-1 me-3 position-relative">
                                                                <h6 className="mb-0 text-truncate">Keefe Bond <span className="text-body"> added new tags to </span> 💪
                                                                    Design system</h6>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <span className="text-sm">2 min ago</span>
                                                            </div>
                                                        </div>
                                                        <p className="position-relative text-muted mt-1 mb-2"><br /><span className="text-truncate">Lorem Ipsum has been
                                                            the industry&apos;s standard dummy text ever since the 1500s.</span></p>
                                                        <span className="badge bg-light-primary border border-primary me-1 mt-1">web design</span>
                                                        <span className="badge bg-light-warning border border-warning me-1 mt-1">Dashobard</span>
                                                        <span className="badge bg-light-success border border-success me-1 mt-1">Design System</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="avtar avtar-s bg-light-primary">
                                                            <i className="ph-duotone ph-chats-teardrop f-18"></i>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <div className="d-flex">
                                                            <div className="flex-grow-1 me-3 position-relative">
                                                                <h6 className="mb-0 text-truncate">Message</h6>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <span className="text-sm text-muted">1 hour ago</span>
                                                            </div>
                                                        </div>
                                                        <p className="position-relative text-muted mt-1 mb-2"><br /><span className="text-truncate">Lorem Ipsum has been
                                                            the industry&apos;s standard dummy text ever since the 1500s.</span></p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <p className="text-span">Yesterday</p>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="avtar avtar-s bg-light-danger">
                                                            <i className="ph-duotone ph-user f-18"></i>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <div className="d-flex">
                                                            <div className="flex-grow-1 me-3 position-relative">
                                                                <h6 className="mb-0 text-truncate">Challenge invitation</h6>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <span className="text-sm text-muted">12 hour ago</span>
                                                            </div>
                                                        </div>
                                                        <p className="position-relative text-muted mt-1 mb-2"><br /><span className="text-truncate"><strong> Jonny aber
                                                        </strong> invites to join the challenge</span></p>
                                                        <button className="btn btn-sm rounded-pill btn-outline-secondary me-2">Decline</button>
                                                        <button className="btn btn-sm rounded-pill btn-primary">Accept</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="avtar avtar-s bg-light-info">
                                                            <i className="ph-duotone ph-notebook f-18"></i>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <div className="d-flex">
                                                            <div className="flex-grow-1 me-3 position-relative">
                                                                <h6 className="mb-0 text-truncate">Forms</h6>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <span className="text-sm text-muted">2 hour ago</span>
                                                            </div>
                                                        </div>
                                                        <p className="position-relative text-muted mt-1 mb-2">Lorem Ipsum is simply dummy text of the printing and
                                                            typesetting industry. Lorem Ipsum has been the industry&apos;s standard
                                                            dummy text ever since the 1500s.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar2} alt="user-image" className="user-avtar avtar avtar-s" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <div className="d-flex">
                                                            <div className="flex-grow-1 me-3 position-relative">
                                                                <h6 className="mb-0 text-truncate">Keefe Bond <span className="text-body"> added new tags to </span> 💪
                                                                    Design system</h6>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <span className="text-sm text-muted">2 min ago</span>
                                                            </div>
                                                        </div>
                                                        <p className="position-relative text-muted mt-1 mb-2"><br /><span className="text-truncate">Lorem Ipsum has been
                                                            the industry&apos;s standard dummy text ever since the 1500s.</span></p>
                                                        <button className="btn btn-sm rounded-pill btn-outline-secondary me-2">Decline</button>
                                                        <button className="btn btn-sm rounded-pill btn-primary">Accept</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="avtar avtar-s bg-light-success">
                                                            <i className="ph-duotone ph-shield-checkered f-18"></i>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <div className="d-flex">
                                                            <div className="flex-grow-1 me-3 position-relative">
                                                                <h6 className="mb-0 text-truncate">Security</h6>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <span className="text-sm text-muted">5 hour ago</span>
                                                            </div>
                                                        </div>
                                                        <p className="position-relative text-muted mt-1 mb-2">Lorem Ipsum is simply dummy text of the printing and
                                                            typesetting industry. Lorem Ipsum has been the industry&apos;s standard
                                                            dummy text ever since the 1500s.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </SimpleBar>
                                    <div className="dropdown-footer">
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <div className="d-grid"><button className="btn btn-primary">Archive all</button></div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-grid"><button className="btn btn-outline-secondary">Mark all as read</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as="li" className="pc-h-item header-user-profile">
                                <Dropdown.Toggle className="pc-head-link arrow-none me-0" data-bs-toggle="dropdown" href="#"
                                    aria-haspopup="false" data-bs-auto-close="outside" aria-expanded="false" style={{ border: "none" }}>
                                    <img src={avatar2} alt="user-image" width={40} className="user-avtar" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-user-profile dropdown-menu-end pc-h-dropdown">
                                    <div className="dropdown-header d-flex align-items-center justify-content-between">
                                        <h4 className="m-0">Profile</h4>
                                    </div>
                                    <div className="dropdown-body">
                                        <SimpleBar className="profile-notification-scroll position-relative" style={{ maxHeight: "calc(100vh - 225px)" }}>
                                            <ul className="list-group list-group-flush w-100">
                                                <li className="list-group-item">
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            <img src={avatar2} alt="user-image" width={50} className="wid-50 rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1 mx-3">
                                                            <h5 className="mb-0">Carson Darrin</h5>
                                                            <a className="link-primary" href="mailto:carson.darrin@company.io">carson.darrin@company.io</a>
                                                        </div>
                                                        <span className="badge bg-primary">PRO</span>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <Dropdown.Item>
                                                        <span className="d-flex align-items-center">
                                                            <i className="ph-duotone ph-key"></i>
                                                            <Link to="/forgetPassword">Change Password</Link>
                                                        </span>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <span className="d-flex align-items-center">
                                                            <i className="ph-duotone ph-envelope-simple"></i>
                                                            <span>Recently mail</span>
                                                        </span>
                                                        <div className="user-group">
                                                            <img src={avatar1} alt="user-image" className="avtar" />
                                                            <img src={avatar2} alt="user-image" className="avtar" />
                                                            <img src={avatar3} alt="user-image" className="avtar" />
                                                        </div>
                                                    </Dropdown.Item>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="dropdown-item">
                                                        <span className="d-flex align-items-center">
                                                            <i className="ph-duotone ph-globe-hemisphere-west"></i>
                                                            <span>Languages</span>
                                                        </span>
                                                        <span className="flex-shrink-0">
                                                            <select className="form-select bg-transparent form-select-sm border-0 shadow-none">
                                                                <option value="1">English</option>
                                                                <option value="2">Spain</option>
                                                                <option value="3">Arbic</option>
                                                            </select>
                                                        </span>
                                                    </div>
                                                    <Dropdown.Item>
                                                        <span className="d-flex align-items-center">
                                                            <i className="ph-duotone ph-flag"></i>
                                                            <span>Country</span>
                                                        </span>
                                                    </Dropdown.Item>
                                                </li>
                                                <li className="list-group-item">
                                                    <Dropdown.Item>
                                                        <span className="d-flex align-items-center">
                                                            <i className="ph-duotone ph-gauge"></i>
                                                            <Link to="/">Dashboard</Link>
                                                        </span>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <span className="d-flex align-items-center">
                                                            <i className="ph-duotone ph-calendar-blank"></i>
                                                            <Link to="/projects">My Projects</Link>
                                                        </span>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <span className="d-flex align-items-center">
                                                            <i className="ph-duotone ph-flag"></i>
                                                            <Link to="/offerPage">My Offers</Link>
                                                        </span>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <span className="d-flex align-items-center">
                                                            <i className="ph-duotone ph-gear-six"></i>
                                                            <Link to="/offer">Create new Offer</Link>
                                                        </span>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <span className="d-flex align-items-center">
                                                            <i className="ph-duotone ph-user-circle"></i>
                                                            <Link to="/profile">My Profile</Link>
                                                        </span>
                                                    </Dropdown.Item>

                                                    <Dropdown.Item>
                                                        <span className="d-flex align-items-center">
                                                            <i className="ph-duotone ph-gauge"></i>
                                                            <Link to="/payment">Payment</Link>
                                                        </span>
                                                    </Dropdown.Item>
                                                    
                                                </li>
                                                <li className="list-group-item">
                                                    
                                                    <Dropdown.Item>
                                                        <span className="d-flex align-items-center">
                                                            <i className="ph-duotone ph-power"></i>
                                                            <span>Logout</span>
                                                        </span>
                                                    </Dropdown.Item>
                                                </li>
                                            </ul>
                                        </SimpleBar>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ul>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default TopBar;