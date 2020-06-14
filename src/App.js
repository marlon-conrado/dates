import React, { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import AppointmentList from "./components/AppointmentList/AppointmentList";

function App() {
  const innitialAppointmentList =
    JSON.parse(localStorage.getItem("appointments")) || [];

  const [appointmentList, setAppointmentList] = useState(
    innitialAppointmentList
  );

  const createAppointment = appointment => {
    setAppointmentList([...appointmentList, appointment]);
  };

  const removeAppointment = appointment => {
    const newAppointmentList = appointmentList.filter(
      itemAppointment => appointment.id !== itemAppointment.id
    );

    setAppointmentList(newAppointmentList);
  };

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointmentList));
  }, [appointmentList]);

  return (
    <div>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <AppointmentList
              appointments={appointmentList}
              onRemove={removeAppointment}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
