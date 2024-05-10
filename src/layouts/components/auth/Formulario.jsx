import './Formulario.css';
import { useState } from 'react';
// import { useNavigate } from "react-router-dom";

const Formulario = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventList, setEventList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEvent = {
      name: eventName,
      date: eventDate,
      location: eventLocation,
      description: eventDescription,
    };
    setEventList([...eventList, newEvent]);
    setEventName('');
    setEventDate('');
    setEventLocation('');
    setEventDescription('');
  };

  // const VerRegistrosClick = () => {
  //   navigate("/Vregistro", { state: { registros } }); 
  // };


  return (
    <div>
      <form className="formularioR" onSubmit={handleSubmit}>
        <h1 className="tituloform">Formulario de Registro</h1>
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">
            Nombre del evento:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            value={eventName}
            onChange={(event) => setEventName(event.target.value)}
          />
          <br />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputDate" className="form-label">
            Fecha:
          </label>
          <input
            type="date"
            className="form-control"
            id="inputDate"
            value={eventDate}
            onChange={(event) => setEventDate(event.target.value)}
          />
          <br />
        </div>
        <div className="col-12">
          <label htmlFor="inputLocation" className="form-label">
            Ubicación:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLocation"
            value={eventLocation}
            onChange={(event) => setEventLocation(event.target.value)}
            placeholder="..."
          />
          <br />
        </div>
        <div className="col-12">
          <label htmlFor="inputDescription" className="form-label">
            Descripción del evento:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputDescription"
            value={eventDescription}
            onChange={(event) => setEventDescription(event.target.value)}
            placeholder="..."
          />
          <br />
        </div>
        <div className="col-12">
          <button type="submit" className="btn">
            Enviar
          </button> <br /><br />
          <button type="submit" className="btn" >
            Ver Registros
          </button>
        </div>
      </form>
      <EventList events={eventList} />
    </div>
  );
};

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h2>{event.name}</h2>
      <p>Fecha: {event.date}</p>
      <p>Ubicación: {event.location}</p>
      <p>Descripción: {event.description}</p>
    </div>
  );
};

export default Formulario;


