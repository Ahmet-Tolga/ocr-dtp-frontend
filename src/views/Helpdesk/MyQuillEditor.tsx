import { useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const MyQuillEditor = () => {
  const quillRef = useRef(null);
  const editorRef = useRef(null); // Ref for Quill editor instance

  useEffect(() => {
    if (quillRef.current) {
      editorRef.current = quillRef.current;
      console.log("Quill instance:", editorRef.current);
    }
  }, []);

  return (
    <ReactQuill
      ref={quillRef}
      id="tinymce-editor"
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["image", "code-block"],
        ],
      }}
      placeholder="Hello...."
      theme="snow"
    />
  );
};

export default MyQuillEditor;
