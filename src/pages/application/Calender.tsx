import React from "react";
import BreadcrumbItem from "../../Common/BreadcrumbItem";
import FullCalendars from "../../views/application/Calendar/FullCalendar";


const Calendar = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Application" subTitle="Calendar" />
            <FullCalendars />
        </React.Fragment >
    );
}

export default Calendar;