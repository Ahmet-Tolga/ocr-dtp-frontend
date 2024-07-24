import React from 'react'
import { Row } from 'react-bootstrap'
import BreadcrumbItem from '../../Common/BreadcrumbItem'
import SimpleChart from '../../views/ChartPeity/SimpleChart'
import OtherOptionChart from '../../views/ChartPeity/OtherOptionChart'
import FullWidthChart from '../../views/ChartPeity/FullWidthChart'

const ChartPiety = () => {
  return (
    <React.Fragment>
      <BreadcrumbItem mainTitle="Charts" subTitle="Peity Charts" />
      <Row>
        <SimpleChart />
        <OtherOptionChart />
        <FullWidthChart />
      </Row>
    </React.Fragment>
  )
}

export default ChartPiety
