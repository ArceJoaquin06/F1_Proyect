import { Calendar, momentLocalizer } from 'react-big-calendar';
import React, { Component } from "react";
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('es');

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    title: 'mi cumple waza',
    start: new Date('2023-09-29 10:22:00'),
    end: new Date('2023-09-29 10:42:00'),
  },
  {
    title: 'messi',
    start: new Date('2023-10-02 12:22:00'),
    end: new Date('2023-10-02 13:42:00'),
  },
];

class EventsCalendar extends Component {
  render() {
    return (
      <div style={{ height: `${400}px` }} className="bigCalendar-container">
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          messages={{
            next: 'sig',
            previous: 'ant',
            today: 'Hoy',
            month: 'Mes',
            week: 'Semana',
            day: 'Día',
          }}
        />
      </div>
    );
  }
}

export default EventsCalendar;

//https://ergast.com/api/f1/2023
//esa es la documentacion con la fecha y hora de las corridas de coches