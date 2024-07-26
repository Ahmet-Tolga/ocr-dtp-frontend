import React from "react";
import { Card, Col, Button } from "react-bootstrap";

interface Project {
  ocr: boolean;
  dtp: boolean; 
  user: {
    email: string;
  };
}

interface RecentTableDataProps {
  projects: Project[];
  onGiveOffer: (userEmail: string) => void; // Function to handle "Give an offer" button click
  onDiscard: (userEmail: string) => void; // Function to handle "Discard it" button click
}

const RecentTableData: React.FC<RecentTableDataProps> = ({ projects, onGiveOffer, onDiscard }) => {
  console.log("gelen props", projects);

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
                  {projects.map(({ ocr, dtp, user }, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-inline-block align-middle">
                          <div className="d-inline-block">
                            <h6 className="m-b-0"></h6>
                            <p className="m-b-0">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0">
                          <i className="ph-duotone text-danger f-12"></i>
                          {ocr && <span>OCR</span>}
                          {dtp && <span>{ocr ? ', DTP' : 'DTP'}</span>}
                        </p>
                      </td>
                      <td className="text-end">
                        <Button 
                          variant="danger" 
                          className="btn-sm me-1"
                          onClick={() => onGiveOffer(user.email)}
                        >
                          Give an offer
                        </Button>
                        <Button 
                          variant="success" 
                          className="btn-sm"
                          onClick={() => onDiscard(user.email)}
                        >
                          Discard it
                        </Button>
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

export default RecentTableData;
