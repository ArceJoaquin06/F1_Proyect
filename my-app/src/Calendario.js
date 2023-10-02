import { Calendar, momentLocalizer } from 'react-big-calendar';
import React, { Component } from "react";
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useEffect } from 'react';
import { useState } from "react";
import axios from 'axios'

moment.locale('es');


function EventsCalendar() {

  const [Calendarios, SetCalendarios] = useState([]);
  const [Eventos, SetEventos] = useState([]);

  function agregarCircuito() {
    axios.get("https://ergast.com/api/f1/current.json")
    .then((response) => {
      const races = response.data.MRData.RaceTable.Races;
      const eventos = races.map((race) => ({
        title: race.raceName,
        start: new Date(race.date),
        end: new Date(race.date),
      }));
      SetCalendarios(races);
      SetEventos(eventos);
    })
    .catch((error) => console.log(error));
}

  useEffect(() => {
    agregarCircuito();
  })

  const localizer = momentLocalizer(moment);

  return (
    <div style={{ height: `${400}px` }} className="bigCalendar-container">
      <Calendar
        localizer={localizer}
        events={Eventos}
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





export default EventsCalendar;

//https://ergast.com/api/f1/2023
//esa es la documentacion con la fecha y hora de las corridas de coches

//react-big-calendar/lib/addons/dragAndDrop/styles
//react-big-calendar/lib/sass/styles
//se supone que esos son links para customizar el calendario