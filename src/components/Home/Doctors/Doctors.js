import React from "react";
import doctor from "../../../images/appointment.png";
import DoctorDetail from "../DoctorDetail/DoctorDetail";
const doctorsData = [
  {
    img: doctor,
    name: "Dr. Jimmy",
    phone: "+222 666 999",
  },
  {
    img: doctor,
    name: "Dr. Jimmy",
    phone: "+222 666 999",
  },
  {
    img: doctor,
    name: "Dr. Jimmy",
    phone: "+222 666 999",
  },
];

const Doctors = () => {
  return (
    <section className="my-5 py-5">
      <div className="container">
        <div className="text-center">
          <h5 style={{ color: "#1CC7C1" }}>Our Doctors</h5>
        </div>
        <div className="row">
        {
            doctorsData.map(doctor => <DoctorDetail doctor={doctor}></DoctorDetail>)
        }
        </div>
      </div>
    </section>
  );
};

export default Doctors;
