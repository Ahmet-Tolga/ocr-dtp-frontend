import React from 'react'
import { Card, CardBody, CardHeader } from 'react-bootstrap'

const CourseStates = () => {
    
    return (
        <React.Fragment>
            <div className="col-12">
                <Card className="table-card">
                    <CardHeader>
                        <div className="d-flex align-items-center justify-content-between">
                            <h5 className="mb-0">Course States</h5>
                            <button className="btn btn-sm btn-link-primary">View All</button>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Teacher</th>
                                        <th>Rating</th>
                                        <th>Earring</th>
                                        <th>Sale</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Web Designing Course</td>
                                        <td>Airi Satou</td>
                                        <td className="f-w-600">
                                            <i className="fas fa-star text-warning"></i> 4.8
                                        </td>
                                        <td>$200</td>
                                        <td><span className="donut"><svg className="peity" width="32" height="32"><path d="M 16 0 A 16 16 0 1 1 0.4011534050908221 19.560334943301033 L 5.2757929659999405 18.44773027351946 A 11 11 0 1 0 16 5" data-value="5" fill="#ff9900"></path><path d="M 0.4011534050908221 19.560334943301033 A 16 16 0 0 1 15.999999999999996 0 L 15.999999999999998 5 A 11 11 0 0 0 5.2757929659999405 18.44773027351946" data-value="2" fill="#fff4dd"></path></svg></span></td>
                                        <td>
                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-eye f-20"></i>
                                            </a>
                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-edit f-20"></i>
                                            </a>
                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-trash f-20"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>UI/UX Training Course</td>
                                        <td>Ashton Cox</td>
                                        <td className="f-w-600">
                                            <i className="fas fa-star text-warning"></i> 5.0
                                        </td>
                                        <td>$100</td>
                                        <td><span className="donut"><svg className="peity" width="32" height="32"><path d="M 16 0 A 16 16 0 1 1 9.057860174119071 30.415501886438705 L 11.227278869706861 25.91065754692661 A 11 11 0 1 0 16 5" data-value="4" fill="#ff9900"></path><path d="M 9.057860174119071 30.415501886438705 A 16 16 0 0 1 15.999999999999996 0 L 15.999999999999998 5 A 11 11 0 0 0 11.227278869706861 25.91065754692661" data-value="3" fill="#fff4dd"></path></svg></span></td>
                                        <td>
                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-eye f-20"></i>
                                            </a>
                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-edit f-20"></i>
                                            </a>
                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-trash f-20"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>PHP Training Course</td>
                                        <td>Bradley Greer</td>
                                        <td className="f-w-600">
                                            <i className="fas fa-star text-warning"></i> 4.9
                                        </td>
                                        <td>$80</td>
                                        <td><span className="donut"><svg className="peity" width="32" height="32"><path d="M 16 0 A 16 16 0 0 1 31.598846594909176 19.56033494330103 L 26.72420703400006 18.447730273519458 A 11 11 0 0 0 16 5" data-value="2" fill="#ff9900"></path><path d="M 31.598846594909176 19.56033494330103 A 16 16 0 1 1 15.999999999999996 0 L 15.999999999999998 5 A 11 11 0 1 0 26.72420703400006 18.447730273519458" data-value="5" fill="#fff4dd"></path></svg></span></td>
                                        <td>
                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-eye f-20"></i>
                                            </a>
                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-edit f-20"></i>
                                            </a>
                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-trash f-20"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bootstrap 5 Course</td>
                                        <td>Brielle Williamson</td>
                                        <td className="f-w-600">
                                            <i className="fas fa-star text-warning"></i> 4.4
                                        </td>
                                        <td>$150</td>
                                        <td><span className="donut"><svg className="peity" width="32" height="32"><path d="M 16 0 A 16 16 0 1 1 3.4906962805115214 6.024163170260266 L 7.399853692851671 9.141612179553933 A 11 11 0 1 0 16 5" data-value="6" fill="#ff9900"></path><path d="M 3.4906962805115214 6.024163170260266 A 16 16 0 0 1 15.999999999999996 0 L 15.999999999999998 5 A 11 11 0 0 0 7.399853692851671 9.141612179553933" data-value="1" fill="#fff4dd"></path></svg></span></td>
                                        <td>
                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-eye f-20"></i>
                                            </a>
                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-edit f-20"></i>
                                            </a>
                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-trash f-20"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>C Training Course</td>
                                        <td>Cedric Kelly</td>
                                        <td className="f-w-600">
                                            <i className="fas fa-star text-warning"></i> 4.3
                                        </td>
                                        <td>$50</td>
                                        <td><span className="donut"><svg className="peity" width="32" height="32"><path d="M 16 0 A 16 16 0 0 1 22.94213982588093 30.415501886438705 L 20.77272113029314 25.91065754692661 A 11 11 0 0 0 16 5" data-value="3" fill="#ff9900"></path><path d="M 22.94213982588093 30.415501886438705 A 16 16 0 1 1 15.999999999999996 0 L 15.999999999999998 5 A 11 11 0 1 0 20.77272113029314 25.91065754692661" data-value="4" fill="#fff4dd"></path></svg></span></td>
                                        <td>
                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-eye f-20"></i>
                                            </a>
                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-edit f-20"></i>
                                            </a>
                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-trash f-20"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    )
}

export default CourseStates