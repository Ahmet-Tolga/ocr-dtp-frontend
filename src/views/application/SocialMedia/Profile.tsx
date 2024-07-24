import React from "react";
import { Card, Col, Dropdown, Row, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

// img
import story1 from "../../../assets/images/application/img-story-1.jpg";
import story2 from "../../../assets/images/application/img-story-2.jpg";
import story3 from "../../../assets/images/application/img-story-3.jpg";
import story4 from "../../../assets/images/application/img-story-4.jpg";
import story5 from "../../../assets/images/application/img-story-5.jpg";
import story6 from "../../../assets/images/application/img-story-6.jpg";
import avatar1 from "../../../assets/images/user/avatar-1.jpg";
import avatar2 from "../../../assets/images/user/avatar-2.jpg";
import avatar3 from "../../../assets/images/user/avatar-3.jpg";
import avatar4 from "../../../assets/images/user/avatar-4.jpg";
import avatar5 from "../../../assets/images/user/avatar-5.jpg";
import post1 from "../../../assets/images/application/img-post-1.jpg";
import post2 from "../../../assets/images/application/img-post-2.jpg";
import post3 from "../../../assets/images/application/img-post-3.jpg";
import post4 from "../../../assets/images/application/img-post-4.jpg";
import post5 from "../../../assets/images/application/img-post-5.jpg";
import post6 from "../../../assets/images/application/img-post-6.jpg";


const Profile = () => {
    return (
        <React.Fragment>
            <Tab.Pane eventKey="profile" id="profile" role="tabpanel">
                <Card>
                    <Card.Body className="user-story-block">
                        <Card className="user-story add-story">
                            <img src={story1} className="card-img" alt="img" height={154} />
                            <div className="card-img-overlay">
                                <div className="btn-plus">
                                    <i className="ti ti-plus"></i>
                                </div>
                                <h6 className="text-white mb-0">Add Story</h6>
                            </div>
                        </Card>
                        <div className="horizontal-scroll">
                            <Link to="#" className="card user-story" data-lightbox={story2}>
                                <img src={story2} className="card-img" alt="img" height={154} />
                                <div className="card-img-overlay">
                                    <img src={avatar2} className="wid-30 rounded-circle img-user" alt="img" height={30} />
                                </div>
                            </Link>
                            <Link to="#" className="card user-story" data-lightbox={story3}>
                                <img src={story3} className="card-img" alt="img" height={154} />
                                <div className="card-img-overlay">
                                    <img src={avatar3} className="wid-30 rounded-circle img-user" alt="img" height={30} />
                                </div>
                            </Link>
                            <Link to="#" className="card user-story" data-lightbox={story4}>
                                <img src={story4} className="card-img" alt="img" height={154} />
                                <div className="card-img-overlay">
                                    <img src={avatar4} className="wid-30 rounded-circle img-user" alt="img" height={30} />
                                </div>
                            </Link>
                            <Link to="#" className="card user-story" data-lightbox={story5}  >
                                <img src={story5} className="card-img" alt="img" height={154} />
                                <div className="card-img-overlay">
                                    <img src={avatar5} className="wid-30 rounded-circle img-user" alt="img" height={30} />
                                </div>
                            </Link>
                            <Link to="#" className="card user-story" data-lightbox={story6}>
                                <img src={story6} className="card-img" alt="img" height={154} />
                                <div className="card-img-overlay">
                                    <img src={avatar1} className="wid-30 rounded-circle img-user" alt="img" height={30} />
                                </div>
                            </Link>
                            <Link to="#" className="card user-story" data-lightbox={story1}>
                                <img src={story1} className="card-img" alt="img" height={154} />
                                <div className="card-img-overlay">
                                    <img src={avatar4} className="wid-30 rounded-circle img-user" alt="img" height={30} />
                                </div>
                            </Link>
                            <Link to="#" className="card user-story" data-lightbox={story2}  >
                                <img src={story2} className="card-img" alt="img" height={154} />
                                <div className="card-img-overlay">
                                    <img src={avatar2} className="wid-30 rounded-circle img-user" alt="img" height={30} />
                                </div>
                            </Link>
                            <Link to="#" className="card user-story" data-lightbox={story3} >
                                <img src={story3} className="card-img" alt="img" height={154} />
                                <div className="card-img-overlay">
                                    <img src={avatar3} className="wid-30 rounded-circle img-user" alt="img" height={30} />
                                </div>
                            </Link>
                            <Link to="#" className="card user-story" data-lightbox={story4}  >
                                <img src={story4} className="card-img" alt="img" height={154} />
                                <div className="card-img-overlay">
                                    <img src={avatar4} className="wid-30 rounded-circle img-user" alt="img" height={30} />
                                </div>
                            </Link>
                            <Link to="#" className="card user-story" data-lightbox={story5}  >
                                <img src={story5} className="card-img" alt="img" height={154} />
                                <div className="card-img-overlay">
                                    <img src={avatar5} className="wid-30 rounded-circle img-user" alt="img" height={30} />
                                </div>
                            </Link>
                            <Link to="#" className="card user-story" data-lightbox={story6} >
                                <img src={story6} className="card-img" alt="img" height={154} />
                                <div className="card-img-overlay">
                                    <img src={avatar1} className="wid-30 rounded-circle img-user" alt="img" height={30} />
                                </div>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <textarea className="form-control border-0 shadow-none" placeholder="What’s new, Stebin?" rows={1}></textarea>
                        <Row className="align-items-center mt-3">
                            <Col>
                                <ul className="list-inline ms-auto mb-0">
                                    <li className="list-inline-item border-end pe-2 me-2">
                                        <Link to="#" className="avtar avtar-s btn-link-warning">
                                            <i className="ti ti-mood-smile f-18"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#" className="avtar avtar-s btn-link-secondary">
                                            <i className="ti ti-photo f-18"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#" className="avtar avtar-s btn-link-secondary">
                                            <i className="ti ti-paperclip f-18"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col className="text-end">
                                <button className="btn btn-primary">Post</button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                            <div className="flex-shrink-0">
                                <div className="chat-avtar">
                                    <img className="rounded-circle img-fluid wid-40" src={avatar1} alt="User image" />
                                    <div className="bg-success chat-badge"></div>
                                </div>
                            </div>
                            <div className="flex-grow-1 mx-2">
                                <h5 className="mb-0">John Doe</h5>
                                <span className="text-sm text-muted">Technical Department</span>
                            </div>
                            <div className="flex-shrink-0">
                                <Dropdown>
                                    <Dropdown.Toggle as="a" href="#"
                                        className="avtar avtar-xs btn-link-secondary arrow-none"
                                    ><i className="material-icons-two-tone f-18">more_vert</i></Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-end">
                                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#">Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <p className="mb-3"
                        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                            of Lorem Ipsum.</p>
                        <Row className="g-2">
                            <Col md={6}>
                                <Link to="#" className="img-post card mb-2" data-lightbox={post1}>
                                    <img src={post1} alt="img" className="card-img" height={423} />
                                    <div className="card-img-overlay">
                                        <i className="ti ti-search"></i>
                                    </div>
                                </Link>
                                <Row className="-2">
                                    <Col md={6}>
                                        <Link to="#" className="img-post card" data-lightbox={post2}>
                                            <img src={post2} alt="img" className="card-img" height={208} />
                                            <div className="card-img-overlay">
                                                <i className="ti ti-search"></i>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col md={6}>
                                        <Link to="#" className="img-post card" data-lightbox={post3}>
                                            <img src={post3} alt="img" className="card-img" height={208} />
                                            <div className="card-img-overlay">
                                                <i className="ti ti-search"></i>
                                            </div>
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <Row className="g-2 mb-2">
                                    <Col md={6}>
                                        <Link to="#" className="img-post card" data-lightbox={post4}>
                                            <img src={post4} alt="img" className="card-img" height={208} />
                                            <div className="card-img-overlay">
                                                <i className="ti ti-search"></i>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col md={6}>
                                        <Link to="#" className="img-post card" data-lightbox={post5}>
                                            <img src={post5} alt="img" className="card-img" height={208} />
                                            <div className="card-img-overlay">
                                                <i className="ti ti-search"></i>
                                            </div>
                                        </Link>
                                    </Col>
                                </Row>
                                <Link to="#" className="img-post card" data-lightbox={post6}>
                                    <img src={post6} alt="img" className="card-img" height={423} />
                                    <div className="card-img-overlay">
                                        <i className="ti ti-search"></i>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <div className="col">
                                <Link to="#" className="btn btn-link-dark">
                                    <i className="ph-duotone ph-thumbs-up me-1"></i> 450K <small className="text-muted">Likes</small></Link>
                                <Link to="#" className="btn btn-link-secondary">
                                    <i className="ph-duotone ph-chat-teardrop-dots me-1"></i>500 <small className="text-muted">Comments</small></Link>
                                <Link to="#" className="btn btn-link-secondary">
                                    <i className="ph-duotone ph-share-network me-1"></i>100 <small className="text-muted">Share</small></Link>
                                <Link to="#" className="btn btn-link-secondary">
                                    <i className="ph-duotone ph-book-bookmark me-1"></i>20 <small className="text-muted">Saved</small></Link>
                            </div>
                            <div className="col-auto text-end">
                                <div className="d-flex align-items-center">
                                    <p className="mb-0 me-2">30 Comments</p>
                                    <div className="user-group post-user-group">
                                        <img src={avatar1} alt="user-image" className="avtar" />
                                        <img src={avatar2} alt="user-image" className="avtar" />
                                        <span className="avtar bg-danger text-white"><span className="f-12">K</span></span>
                                        <img src={avatar3} alt="user-image" className="avtar" />
                                        <span className="avtar bg-success text-white">
                                            <svg className="pc-icon m-0"></svg>
                                        </span>
                                        <img src={avatar4} alt="user-image" className="avtar" />
                                        <span className="avtar bg-light-primary text-primary"><span className="f-12">+2</span></span>
                                    </div>
                                </div>
                            </div>
                        </Row>
                        <div className="comment-block">
                            <div className="comment">
                                <div className="d-flex align-items-start">
                                    <div className="chat-avtar flex-shrink-0">
                                        <img className="rounded-circle img-fluid wid-40" src={avatar1} alt="User image" />
                                        <div className="bg-success chat-badge"></div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="mb-0">John Doe</h5>
                                        <span className="text-sm text-muted">2 hour ago</span>
                                    </div>
                                </div>
                                <div className="comment-content">
                                    <p className="mb-2 mt-3">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                        scrambled it t make a type specimen book.</p>
                                    <Link to="#" className="link-primary mb-1">https://phoenixcoded.net/</Link>
                                </div>
                            </div>
                            <div className="comment-content">
                                <div className="mb-4">
                                    <Link to="#" className="btn btn-link-dark"> <i className="ph-duotone ph-heart me-1 text-danger"></i> 450</Link>
                                    <Link to="#" className="btn btn-link-secondary"> <i className="ph-duotone ph-share-network me-1"></i>100</Link>
                                </div>
                            </div>
                            <div className="comment sub-comment">
                                <div className="d-flex align-items-start">
                                    <div className="chat-avtar flex-shrink-0">
                                        <img className="rounded-circle img-fluid wid-40" src={avatar1} alt="User image" />
                                        <div className="bg-success chat-badge"></div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="mb-0">John Doe</h5>
                                        <span className="text-sm text-muted">2 hour ago</span>
                                    </div>
                                </div>
                                <div className="comment-content">
                                    <Card className="mt-3 mb-0">
                                        <Card.Body>
                                            <h6>Lorem Ipsum is simply dummy</h6>
                                            <p className="mb-2">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                            <Link to="#" className="link-primary mb-1">https://phoenixcoded.net/</Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="comment-content">
                                <div className="mb-4">
                                    <Link to="#" className="btn btn-link-dark"> <i className="ph-duotone ph-heart me-1 text-danger"></i> 450</Link>
                                    <Link to="#" className="btn btn-link-secondary"> <i className="ph-duotone ph-share-network me-1"></i>100</Link>
                                </div>
                            </div>
                            <div className="comment">
                                <div className="d-flex align-items-start">
                                    <div className="chat-avtar flex-shrink-0">
                                        <img className="rounded-circle img-fluid wid-40" src={avatar1} alt="User image" />
                                        <div className="bg-success chat-badge"></div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="mb-0">John Doe</h5>
                                        <span className="text-sm text-muted">2 hour ago</span>
                                    </div>
                                </div>
                                <div className="comment-content">
                                    <p className="mb-2 mt-3">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type specimen book.</p>
                                    <Link to="#" className="link-primary mb-1">https://phoenixcoded.net/</Link>
                                </div>
                            </div>
                            <div className="comment-content">
                                <div className="mb-4">
                                    <Link to="#" className="btn btn-link-dark"> <i className="ph-duotone ph-heart me-1 text-danger"></i> 450</Link>
                                    <Link to="#" className="btn btn-link-secondary"> <i className="ph-duotone ph-share-network me-1"></i>100</Link>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <div className="flex-shrink-0">
                            <img
                                className="img-radius d-none d-sm-inline-flex me-3 wid-40 rounded-circle"
                                src={avatar1}
                                width={40}
                                alt="User image"
                            />
                            </div>
                            <div className="flex-grow-1 me-3">
                                <div className="input-comment">
                                    <input type="email" className="form-control" placeholder="Type a something..." />
                                    <ul className="list-inline start-0 mb-0">
                                        <li className="list-inline-item border-end pe-2 me-2">
                                            <Link to="#" className="avtar avtar-xs btn-link-warning">
                                                <i className="ti ti-mood-smile f-18"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="list-inline end-0 mb-0">
                                        <li className="list-inline-item">
                                            <Link to="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-photo f-18"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-paperclip f-18"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                            <Link to="#" className="avtar avtar-s btn btn-primary">
                                <i className="ti ti-send f-18"></i>
                            </Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                            <div className="flex-shrink-0">
                            <div className="chat-avtar">
                                <img className="rounded-circle img-fluid wid-40" src={avatar1} alt="User image" />
                                <div className="bg-success chat-badge"></div>
                            </div>
                            </div>
                            <div className="flex-grow-1 mx-2">
                                <h5 className="mb-0">John Doe</h5>
                                <span className="text-sm text-muted">Technical Department</span>
                            </div>
                            <div className="flex-shrink-0">
                            <Dropdown>
                                <Dropdown.Toggle as="a" href="#"
                                    className="avtar avtar-xs btn-link-secondary dropdown-toggle arrow-none"
                                ><i className="material-icons-two-tone f-18">more_vert</i></Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end">
                                    <Dropdown.Item href="#">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#">Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>
                        </div>
                        <p className="mb-3"
                        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                            of Lorem Ipsum.</p>
                        <Row className="g-2">
                            <Col xs={12}>
                                <div className="ratio ratio-21x9 rounded overflow-hidden">
                                    <iframe src="https://www.youtube.com/embed/7lsRnCJpFp4" title="YouTube video" allowFullScreen></iframe>
                                </div>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <div className="col">
                                <Link to="#" className="btn btn-link-dark">
                                    <i className="ph-duotone ph-thumbs-up me-1"></i> 450K <small className="text-muted">Likes</small></Link>
                                <Link to="#" className="btn btn-link-secondary">
                                    <i className="ph-duotone ph-chat-teardrop-dots me-1"></i>500 <small className="text-muted">Comments</small></Link>
                                <Link to="#" className="btn btn-link-secondary">
                                    <i className="ph-duotone ph-share-network me-1"></i>100 <small className="text-muted">Share</small></Link>
                                <Link to="#" className="btn btn-link-secondary">
                                    <i className="ph-duotone ph-book-bookmark me-1"></i>20 <small className="text-muted">Saved</small></Link>
                            </div>
                            <div className="col-auto text-end">
                                <div className="d-flex align-items-center">
                                    <p className="mb-0 me-2">30 Comments</p>
                                    <div className="user-group post-user-group">
                                        <img src={avatar1} width={197} height={197} alt="user-image" className="avtar" />
                                        <img src={avatar2} alt="user-image" className="avtar" />
                                        <span className="avtar bg-danger text-white"><span className="f-12">K</span></span>
                                        <img src={avatar3} alt="user-image" className="avtar" />
                                        <span className="avtar bg-success text-white">
                                            <svg className="pc-icon m-0">
                                                <use xlinkHref="#custom-user"></use>
                                            </svg>
                                        </span>
                                        <img src={avatar4} alt="user-image" className="avtar" />
                                        <span className="avtar bg-light-primary text-primary"><span className="f-12">+2</span></span>
                                    </div>
                                </div>
                            </div>
                        </Row>
                        <div className="comment-block">
                            <div className="comment">
                                <div className="d-flex align-items-start">
                                    <div className="chat-avtar flex-shrink-0">
                                        <img className="rounded-circle img-fluid wid-40" width={40} src={avatar1} alt="User image" />
                                        <div className="bg-success chat-badge"></div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="mb-0">John Doe</h5>
                                        <span className="text-sm text-muted">2 hour ago</span>
                                    </div>
                                </div>
                                <div className="comment-content">
                                    <p className="mb-2 mt-3">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type specimen book.</p>
                                    <Link to="#" className="link-primary mb-1">https://phoenixcoded.net/</Link>
                                </div>
                            </div>
                            <div className="comment-content">
                                <div className="mb-4">
                                    <Link to="#" className="btn btn-link-dark"> <i className="ph-duotone ph-heart me-1 text-danger"></i> 450</Link>
                                    <Link to="#" className="btn btn-link-secondary"> <i className="ph-duotone ph-share-network me-1"></i>100</Link>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <div className="flex-shrink-0">
                            <img
                                className="img-radius d-none d-sm-inline-flex me-3 wid-40 rounded-circle"
                                src={avatar1}
                                alt="User image"
                                width={40}
                            />
                            </div>
                            <div className="flex-grow-1 me-3">
                                <div className="input-comment">
                                    <input type="email" className="form-control" placeholder="Type a something..." />
                                    <ul className="list-inline start-0 mb-0">
                                        <li className="list-inline-item border-end pe-2 me-2">
                                            <Link to="#" className="avtar avtar-xs btn-link-warning">
                                                <i className="ti ti-mood-smile f-18"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="list-inline end-0 mb-0">
                                        <li className="list-inline-item">
                                            <Link to="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-photo f-18"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-paperclip f-18"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Link to="#" className="avtar avtar-s btn btn-primary">
                                <i className="ti ti-send f-18"></i>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Tab.Pane>
        </React.Fragment>
    );
}

export default Profile;