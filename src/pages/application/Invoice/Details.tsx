import React from 'react'
import BreadcrumbItem from '../../../Common/BreadcrumbItem';
import DetailInvoicePage from '../../../views/Invoice/Details/DetailInvoicePage';
import { Helmet } from 'react-helmet';

const Details = () => {
  return (
    <React.Fragment>
        <BreadcrumbItem mainTitle="Invoice" subTitle="Detail" />
        <Helmet title='Detail Invoice | Light Able admin and dashboard template offer a variety of UI elements and pages, ensuring your admin panel is both fast and effective.' />
        <DetailInvoicePage/>
    </React.Fragment>
  )
}

export default Details;
