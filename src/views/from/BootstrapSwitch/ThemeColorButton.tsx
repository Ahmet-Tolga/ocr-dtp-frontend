import React from 'react'
import { Col, Card, CardHeader, CardBody } from 'react-bootstrap'

const ThemeColorButton = () => {
  return (
    <React.Fragment>
        <Col  lg={12}>
            <Card>
              <CardHeader>
                <h5>Colors</h5>
                <small>Bootstrap Switch Button implements all standard bootstrap 4 button colors.</small>
              </CardHeader>
              <CardBody>
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="primary" />
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="secondary"/>
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="success" />
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="danger" />
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="warning" />
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="info" />
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="light" />
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="dark" />
              </CardBody>
            </Card>
            <Card className="bg-dark">
              <CardHeader>
                <h5 className="text-white">Dark Theme Colors</h5>
                <small className="text-white">Bootstrap Switch Button colors look great on dark backgrounds.</small>
              </CardHeader>
              <CardBody>
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="primary" data-offstyle="secondary" />
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="secondary" data-offstyle="success" />
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="success" data-offstyle="danger"/>
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="danger" data-offstyle="warning" />
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="warning" data-offstyle="info" />
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="info" data-offstyle="light" />
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="light" data-offstyle="dark" data-style="border" />
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="dark" data-offstyle="light" data-style="border" />
              </CardBody>
            </Card>
          </Col>
    </React.Fragment>
  )
}

export default ThemeColorButton
