import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'react-bootstrap'

const CustomeButton = () => {
    return (
        <React.Fragment>
            <Col lg={6}>
                <Card>
                    <CardHeader>
                        <h5>Custom Text</h5>
                        <small>The text can be changed easily with attributes or options.</small>
                    </CardHeader>
                    <CardBody>
                        <input
                            type="checkbox"
                            data-toggle="switchbutton"
                            checked
                            data-onlabel="Ready"
                            data-offlabel="Not Ready"
                            data-onstyle="success"
                            data-offstyle="danger"
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col lg={6}>
                <Card>
                    <CardHeader>
                        <h5>HTML, Icons, Images</h5>
                        <small>You can easily add icons or images since html is supported for on/off text.</small>
                    </CardHeader>
                    <CardBody>
                        <input
                            type="checkbox"
                            data-toggle="switchbutton"
                            checked
                            data-onlabel="<i className='fa fa-play'></i> Play"
                            data-offlabel="<i className='fa fa-pause'></i> Pause"
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col lg={6}>
                <Card>
                    <CardHeader>
                        <h5>Multiple Lines of Text</h5>
                        <small>Toggles with multiple lines will adjust its heights.</small>
                    </CardHeader>
                    <CardBody>
                        <input type="checkbox" data-toggle="switchbutton" checked data-onlabel="Hello<br>World" data-offlabel="Goodbye<br>World" />
                    </CardBody>
                </Card>
            </Col>
            <Col lg={6}>
                <Card>
                    <CardHeader>
                        <h5>Animation Speed</h5>
                        <small
                        >Transition speed can be easily controlled with css <code>transition</code> property on <code>.switch-group</code>. You
                            can also turn animation off completely.</small>
                    </CardHeader>
                    <CardBody>
                        <input type="checkbox" data-toggle="switchbutton" checked data-style="slow" />
                        <input type="checkbox" data-toggle="switchbutton" checked data-style="fast" />
                        <input type="checkbox" data-toggle="switchbutton" checked data-style="quick" />
                    </CardBody>
                </Card>
            </Col>
            <Col lg={6}>
                <Card>
                    <CardHeader>
                        <h5>Stacked checkboxes</h5>
                        <small>Simply add <code>data-toggle="switchbutton"</code> to convert checkboxes into toggles.</small>
                    </CardHeader>
                    <CardBody>
                        <div className="form-check ps-0">
                            <input id="stackedCheck1" className="form-check-input" type="checkbox" data-toggle="switchbutton" checked />
                            <label htmlFor="stackedCheck1" className="form-check-label">Enabled</label>
                        </div>
                        <div className="form-check ps-0">
                            <input id="stackedCheck2" className="form-check-input" type="checkbox" data-toggle="switchbutton" disabled />
                            <label htmlFor="stackedCheck2" className="form-check-label">Disabled</label>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={6}>
                <Card>
                    <CardHeader>
                        <h5>Event Propagation</h5>
                        <small>Note All events are propagated to and from input element to the switch-button.</small>
                    </CardHeader>
                    <CardBody>
                        <input id="switch_event" type="checkbox" data-toggle="switchbutton" />
                        <div id="console_event"></div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default CustomeButton
