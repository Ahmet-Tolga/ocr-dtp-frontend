import BreadcrumbItem from "../../Common/BreadcrumbItem";
import React  from "react";
import { Row } from "react-bootstrap";
import BasicTinymce from "../../views/from/FormTinymce/BasicTinymce";
import ToolbarTinymce from "../../views/from/FormTinymce/ToolbarTinymce";
import PluginsTinymce from "../../views/from/FormTinymce/PluginsTinymce";
import TinymceAllFeatures from "../../views/from/FormTinymce/TinymceAllFeatures";

const Form2Tinymce = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="TinyMCE" />
            <Row>
                <BasicTinymce />
                <ToolbarTinymce />
                <PluginsTinymce />
                <TinymceAllFeatures />
            </Row>
        </React.Fragment >
    );
}


export default Form2Tinymce;