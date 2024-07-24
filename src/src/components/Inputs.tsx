import React, { useState, useEffect } from "react";
import { Form, Button, Card, Alert, Col } from 'react-bootstrap';
// import FormDropzone from "./DropBox";

const FormInputs = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [videoDuration, setVideoDuration] = useState<string | null>(null);
    const [imageResolution, setImageResolution] = useState<string | null>(null);
    const [fileSize, setFileSize] = useState<string | null>(null);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isOsrSelected, setIsOsrSelected] = useState<boolean>(false);
    const [isDtpSelected, setIsDtpSelected] = useState<boolean>(false);
    const [emailValue, setEmailValue] = useState<string>("");

    useEffect(() => {
        if (selectedFile) {
            const extension = selectedFile.name.split('.').pop()?.toLowerCase() || "";
            const fileSizeInMB = selectedFile.size / (1024 * 1024);

            setFileSize(fileSizeInMB < 1000 ? fileSizeInMB.toFixed(2) + " MB" : (fileSizeInMB / 1024).toFixed(2) + " GB");


            if (["mp4", "webm", "ogg"].includes(extension)) {
                const videoElement = document.createElement("video");
                videoElement.src = URL.createObjectURL(selectedFile);
                videoElement.onloadedmetadata = () => {
                    setVideoDuration(videoElement.duration.toFixed(2) + " seconds");
                };
            }

            if (["jpg", "jpeg", "png", "gif"].includes(extension)) {
                const imageElement = new Image();
                imageElement.src = URL.createObjectURL(selectedFile);
                imageElement.onload = () => {
                    setImageResolution(imageElement.width + "x" + imageElement.height);
                };
            }
        }
    }, [selectedFile]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            setSelectedFile(file);
            setVideoDuration(null);
            setImageResolution(null);
            setFileSize(null);
        }
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    const handleCheckOsrChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsOsrSelected(event.target.checked);
    };

    const handleCheckDtpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsDtpSelected(event.target.checked);
    };



    const handleReset = () => {
        setSelectedFile(null);
        setVideoDuration(null);
        setImageResolution(null);
        setFileSize(null);
        setIsChecked(false);
        setEmailValue("");
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailContent = {
            email: emailValue,
            file: selectedFile,
            videoDuration: videoDuration,
            imageResolution: imageResolution,
            fileSize: fileSize,
            translationFrom: isChecked ? "Selected" : "Not Selected",
            ocrSelected: isOsrSelected ? "Selected" : "Not Selected",
            dtpSelected: isDtpSelected ? "Selected" : "Not Selected"
        };
        console.log("Email content:", emailContent);
    };

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Send Email</h5>
                </Card.Header>
                <Card.Body>
                    <Alert variant="primary">
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                                <i className="ti ti-info-circle h2 f-w-400 mb-0"></i>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                Here are the different input types you can use in HTML. Check more at
                                <a href="https://www.w3schools.com/html/html_form_input_types.asp" rel="nofollow">W3Schools</a>
                            </div>
                        </div>
                    </Alert>
                    <div className="mb-5">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    id="email"
                                    placeholder="example@example.com"
                                    value={emailValue}
                                    onChange={(e) => setEmailValue(e.target.value)}
                                />
                            </Form.Group>

                            {/* <FormDropzone onChange={handleFileChange}></FormDropzone> */}
                            <Form.Group>
                                <Form.Label htmlFor="demo-input-file">File</Form.Label>
                                <Form.Control type="file" id="demo-input-file" onChange={handleFileChange} />
                            </Form.Group>

                            <Form.Label column sm={3} className="text-sm-end">
                                Services
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="checkbox"
                                    id="ocr"
                                    label="OCR"
                                    className="mb-2"
                                    onChange={handleCheckOsrChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="dtp"
                                    label="DTP"
                                    className="mb-2"
                                    onChange={handleCheckDtpChange}
                                />

                                <Form.Check
                                    type="checkbox"
                                    id="translation"
                                    label="Translation"
                                    className="mb-2"
                                    onChange={handleCheckboxChange}
                                />
                            </Col>

                            {fileSize && (
                                <Form.Group>
                                    <Form.Label>File Size</Form.Label>
                                    <Form.Control type="text" readOnly value={fileSize} />
                                </Form.Group>
                            )}

                            {videoDuration && (
                                <Form.Group>
                                    <Form.Label>Video Duration</Form.Label>
                                    <Form.Control type="text" readOnly value={videoDuration} />
                                </Form.Group>
                            )}

                            {imageResolution && (
                                <Form.Group>
                                    <Form.Label>Image Resolution</Form.Label>
                                    <Form.Control type="text" readOnly value={imageResolution} />
                                </Form.Group>
                            )}

                            {isChecked && (
                                <>
                                    <Form.Group>
                                        <Form.Label>Translate From</Form.Label>
                                        <Form.Control as="select">
                                            <option value="en">English</option>
                                            <option value="es">Spanish</option>
                                            <option value="fr">French</option>
                                            <option value="tr">Turkish</option>
                                            <option value="ch">Chinese</option>
                                            <option value="jp">Japan</option>
                                            <option value="gr">German</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group style={{marginTop:"25px"}}>
                                        <Form.Label>Translate To</Form.Label>
                                        <Form.Control as="select">
                                            <option value="en">English</option>
                                            <option value="es">Spanish</option>
                                            <option value="fr">French</option>
                                            <option value="tr">Turkish</option>
                                            <option value="ch">Chinese</option>
                                            <option value="jp">Japan</option>
                                            <option value="gr">German</option>
                                        </Form.Control>
                                    </Form.Group>
                                </>
                            )}

                            <div style={{marginTop:"30px",display:"flex",width:"30%",alignItems:"center",justifyContent:"space-between"}}>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                <Button variant="secondary" type="button" onClick={handleReset}>
                                    Reset
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormInputs;
