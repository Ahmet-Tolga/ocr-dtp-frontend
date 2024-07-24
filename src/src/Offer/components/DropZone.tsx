import React, { useState } from "react";
import { Card, Row, Col } from 'react-bootstrap';
import Dropzone from "react-dropzone";
import { useDispatch } from "react-redux";
import { UploadFileAction } from "../../store/Actions/UploadFileAction";

const FormDropzone = () => {
    const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
    const dispatch = useDispatch();

    function handleAcceptedFiles(files: File[]) {
        console.log("Accepted files: ", files);
        if (files.length === 0) {
            console.error("No files received");
            return;
        }

        try {
            const filePreviews = files.map(file => {
                if (!(file instanceof File)) {
                    throw new Error("Invalid file object");
                }
                const objectURL = URL.createObjectURL(file);
                return {
                    ...file,
                    preview: objectURL,
                    revokeObjectURL: () => URL.revokeObjectURL(objectURL)
                };
            });
            setSelectedFiles(filePreviews);
            dispatch(UploadFileAction(files));
        } catch (error) {
            console.error("Error creating object URL for file: ", error);
        }
    }

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>File Upload</h5>
                </Card.Header>
                <Card.Body>
                    <Dropzone onDrop={acceptedFiles => handleAcceptedFiles(acceptedFiles)}>
                        {({ getRootProps, getInputProps }) => (
                            <div className="dropzone dz-clickable text-center">
                                <div className="dz-message needsclick" {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <div className="mb-3">
                                        <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                                    </div>
                                    <p className="my-4">Drop files here to upload</p>
                                </div>
                            </div>
                        )}
                    </Dropzone>
                    <div className="list-unstyled mb-0" id="file-previews">
                        {selectedFiles.map((file, index) => (
                            <Card
                                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                key={index}
                            >
                                <div className="p-2">
                                    <Row className="align-items-center">
                                        <Col className="col-auto">
                                            <img
                                                height="80"
                                                width="100"
                                                className="avatar-sm rounded bg-light"
                                                alt={file.name}
                                                src={file.preview}
                                            />
                                        </Col>
                                        <Col>
                                            <a href="#" className="text-muted font-weight-bold">
                                                {file.name}
                                            </a>
                                            <p className="mb-0">
                                                <strong>{(file.size / 1024 / 1024).toFixed(2)} MB</strong>
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default FormDropzone;
