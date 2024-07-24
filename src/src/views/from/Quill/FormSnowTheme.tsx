import React, { useState, useEffect, useRef } from "react";
import { Card, Col } from "react-bootstrap";
import "react-quill/dist/quill.snow.css";


import ReactQuill from "react-quill";

const FormSnowTheme = () => {
  const [isClient, setIsClient] = useState(false);
  const quillRef = useRef(null)

  useEffect(() => {
    setIsClient(true); // Set isClient to true when component mounts on the client
  }, []);

  return (
    <React.Fragment>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <h5>Basic snow theme</h5>
          </Card.Header>
          <Card.Body>
            {isClient && ( // Render ReactQuill only on the client-side
              <ReactQuill
                ref={quillRef}
                placeholder="Type your text here..."
                theme="snow"
                value={`
                <div id="pc-quil-1" style="height: 325px">
                <h1 className="ql-align-center">Quill Rich Text Editor</h1>
                <p><br></p>
                <p
                  >Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web.
                  With its <a href="https://quilljs.com/docs/modules/">modular architecture</a> and expressive
                  <a href="https://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.</p
                >
                <p><br></p>
                <iframe
                  className="ql-video ql-align-center"
                  src="https://player.vimeo.com/video/253905163"
                  width="500"
                  height="280"
                  allowfullscreen
                ></iframe>
                <p><br></p>
                <h2 className="ql-align-center">Getting Started is Easy</h2>
                <p><br></p>
              </div>
              </div>
                `}
              />
            )}
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default FormSnowTheme;
