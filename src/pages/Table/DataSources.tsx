import React from 'react'
import BreadcrumbItem from '../../Common/BreadcrumbItem'
import { Row } from 'react-bootstrap'
import HtmlSourceData from '../../views/Table/DataTable/SourceData/HtmlSourceData'
import JavascriptSourcedData from '../../views/Table/DataTable/SourceData/JavascriptSourcedData'

const DataSources = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="DataTable" subTitle="Source Data" />
            <Row>
               <HtmlSourceData/>
               <JavascriptSourcedData/>
            </Row>
        </React.Fragment>
    )
}

export default DataSources
