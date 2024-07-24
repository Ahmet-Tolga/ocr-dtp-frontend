import React from 'react'
import BreadcrumbItem from '../../../Common/BreadcrumbItem'
import { Row } from 'react-bootstrap'
import SimpleIni from '../../../views/Table/DTExtention/SelectTable/SimpleIni'
import MultiItem from '../../../views/Table/DTExtention/SelectTable/MultiItem'
import CellSelection from '../../../views/Table/DTExtention/SelectTable/CellSelection'
import Buttons from '../../../views/Table/DTExtention/SelectTable/Buttons'

const SelectTable = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="DataTable" subTitle="Select" />
            <Row>
                <SimpleIni />
                <MultiItem />
                <CellSelection />
                <Buttons />
            </Row>
        </React.Fragment>
    )
}

export default SelectTable