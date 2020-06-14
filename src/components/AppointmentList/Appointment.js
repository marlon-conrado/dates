import React from "react";
import PropTypes from "prop-types";

const Appointment = ({ appointment, onRemove }) => {
  const { id, petName, owner, date, time, symptoms } = appointment;

  return (
    <div className="cita">
      <p># Id: {id}</p>
      <p>Mascota: {petName}</p>
      <p>Propietario: {owner}</p>
      <p>Fecha: {date}</p>
      <p>Hora: {time}</p>
      <p>Sintomas: {symptoms}</p>
      <button
        className="button eliminar u-full-width"
        onClick={() => onRemove(appointment)}
      >
        Eliminar &times;
      </button>
    </div>
  );
};

Appointment.propTypes = {
  appointment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    petName: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    symptoms: PropTypes.string.isRequired
  }).isRequired,
  onRemove: PropTypes.func.isRequired
};

export default Appointment;
