import React from 'react'
import BreadcrumbItem from '../../../../Common/BreadcrumbItem'
import { Row } from 'react-bootstrap'
import Basic from '../../../../views/Table/DTExtention/Button/BasicButton'
import ClassicButton from '../../../../views/Table/DTExtention/Button/ClassicButton'
import KeyboardActivation from '../../../../views/Table/DTExtention/Button/KeyboardActivation'
import MultiLevelCollection from '../../../../views/Table/DTExtention/Button/MultiLevelConnection'
import MultipleButton from '../../../../views/Table/DTExtention/Button/MultipleButton'

const BasicButton = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="DataTable" subTitle="Button extension" />
            <Row>
                <Basic />
                <ClassicButton />
                <KeyboardActivation />
                <MultiLevelCollection />
                <MultipleButton />
            </Row>
        </React.Fragment>
    )
}

export default BasicButton