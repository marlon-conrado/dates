import React from "react";
import Appointment from "./Appointment";
import PropTypes from "prop-types";

const AppointmentList = ({ appointments, onRemove }) => {
  const existAppointments = appointments.length > 0;
  return (
    <div>
      {existAppointments ? (
        <h2>Administra tus citas</h2>
      ) : (
        <h2>Agrega una nueva cita</h2>
      )}

      {appointments.map(appointment => (
        <Appointment
          key={appointment.id}
          appointment={appointment}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

AppointmentList.propTypes = {
  appointments: PropTypes.arrayOf(
    PropTypes.shape(Appointment.propTypes.appointment)
  )
};

export default AppointmentList;
