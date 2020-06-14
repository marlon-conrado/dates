import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const initialFormValues = {
  petName: "",
  owner: "",
  date: "",
  time: "",
  symptoms: ""
};

const Form = ({ createAppointment }) => {
  const [appointment, setAppointment] = useState(initialFormValues);
  const [error, setError] = useState(false);

  const handleChange = e => {
    setError(false);
    const { name: inputName, value: inputValue } = e.target;

    setAppointment({
      ...appointment,
      [inputName]: inputValue
    });
  };

  const { petName, owner, date, time, symptoms } = appointment;

  const submitForm = e => {
    e.preventDefault();

    appointment.id = Date.now();

    createAppointment(appointment);
    setAppointment(initialFormValues);
  };

  return (
    <Fragment>
      <h2>Crear cita</h2>
      <form onSubmit={submitForm}>
        <label>Nombre de mascota</label>
        <input
          type="text"
          name="petName"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={handleChange}
          value={petName}
        />

        <label>Propietario</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre de propietario"
          onChange={handleChange}
          value={owner}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />

        <label>Hora</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
          value={time}
        />

        <label>Síntoma</label>
        <textarea
          name="symptoms"
          className="u-full-width"
          onChange={handleChange}
          value={symptoms}
        ></textarea>

        {error ? (
          <p className="alerta-error">Todos los campos son obligarios</p>
        ) : (
          ""
        )}

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  createAppointment: PropTypes.func.isRequired
};

export default Form;
