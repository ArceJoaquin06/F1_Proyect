import { Calendar, momentLocalizer } from 'react-big-calendar';
import React, { Component } from "react";
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('es');

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    title: 'evaluacion de mates',
    start: new Date('2023-09-29 10:22:00'),
    end: new Date('2023-09-29 10:42:00'),
  },
  {
    title: 'tu mama',
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

//https://malcoded.medium.com/implementa-react-big-calendar-en-tus-proyecto-con-react-js1-6-ffc36f10af5e