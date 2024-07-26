import React from "react";
import { Card, Col } from "react-bootstrap";

interface Project {
    id: number; // Ensure each project has a unique ID
    ocr: boolean;
    dtp: boolean;
    user: {
        email: string;
    };
}

interface ListViewProps {
    projects: Project[];
    onGiveOffer: (email: string, user: any) => void;
    onDiscard: (email: string) => void;
}

const ListView: React.FC<ListViewProps> = ({ projects, onGiveOffer, onDiscard }) => {
    console.log(projects);
    return (
        <React.Fragment>
            <Col md={6} xl={8}>
                <Card className="table-card">
                    <Card.Header className="d-flex align-items-center justify-content-between">
                        <h5>Recent Notifications</h5>
                    </Card.Header>
                    <Card.Body className="py-2 px-0">
                        <div className="table-responsive">
                            <table className="table table-hover table-borderless table-sm mb-0">
                                <tbody>
                                    {projects.map((project) => (
                                        <tr > {/* Use a unique key, such as project ID */}
                                            <td>
                                                <div className="d-inline-block align-middle">
                                                    <div className="d-inline-block">
                                                        <h6 className="m-b-0"></h6>
                                                        <p className="m-b-0">{project.user.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="mb-0">
                                                    <i className="ph-duotone text-danger f-12"></i>
                                                    {project.ocr && <span>OCR</span>}
                                                    {project.dtp && <span>{project.ocr ? ', DTP' : 'DTP'}</span>}
                                                </p>
                                            </td>
                                            <td className="text-end">
                                                <button
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={() => onDiscard(project.user.email)}
                                                >
                                                    Discard
                                                </button>
                                                <button
                                                    className="btn btn-outline-success btn-sm ms-2"
                                                    onClick={() => onGiveOffer(project.user.email, project)}
                                                >
                                                    Give Offer
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default ListView;
