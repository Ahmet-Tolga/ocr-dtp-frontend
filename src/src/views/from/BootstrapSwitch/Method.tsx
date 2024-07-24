import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'react-bootstrap'

const Method = () => {
  return (
    <React.Fragment>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <h5>Methods</h5>
            <small>Methods can be used to control a switch button directly.</small>
          </CardHeader>
          <CardBody>
            <input id="switch-demo" type="checkbox" data-toggle="switchbutton" />
            <div className="table-responsive mt-2">
              <table className="table switch-table">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Demo</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><em>initialize</em></td>
                    <td
                    ><button className="btn btn-outline-secondary btn-sm">Initialize</button>
                    </td>
                    <td>Initializes the switch-button with options</td>
                  </tr>
                  <tr>
                    <td>destroy</td>
                    <td
                    ><button className="btn btn-outline-secondary btn-sm">Destroy</button>
                    </td>
                    <td>Destroys the switch-button</td>
                  </tr>
                  <tr>
                    <td>on</td>
                    <td
                    ><button
                      className="btn btn-outline-secondary btn-sm">On</button>
                    </td>
                    <td>Sets the switch-button to 'On' state</td>
                  </tr>
                  <tr>
                    <td>off</td>
                    <td
                    ><button
                      className="btn btn-outline-secondary btn-sm">Off</button>
                    </td>
                    <td>Sets the switch-button to 'Off' state</td>
                  </tr>
                  <tr>
                    <td>toggle</td>
                    <td
                    ><button
                      className="btn btn-outline-secondary btn-sm">Toggle</button>
                    </td>
                    <td>Toggles the state of the switch-button</td>
                  </tr>
                  <tr>
                    <td>enable</td>
                    <td
                    ><button
                      className="btn btn-outline-secondary btn-sm">Enable</button>
                    </td>
                    <td>Enables the switch-button</td>
                  </tr>
                  <tr>
                    <td>disable</td>
                    <td
                    ><button
                      className="btn btn-outline-secondary btn-sm">Disable</button>
                    </td>
                    <td>Disables the switch-button</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default Method
