import React from 'react';
import appointment from '../../../images/appointment.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="appointment-container my-5 py-5">
            <div className="container">
               <div className="appointment-bg">
               <div className="row">
                    <div className="col-md-5">
                        <img className="img-fluid" src={appointment} alt=""/>
                    </div>
                    <div className="col-md-7 my-5 py-5">
                        <h5 style={{color: '#1CC7C1'}}>Appointment</h5>
                        <h2 className="my-4 text-white" style={{color: '#3A4256'}}>Make an appointment <br/> Today</h2>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio sit omnis inventore ea deserunt atque repellendus voluptates quaerat? Perferendis!
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
               </div>
            </div>
        </section>
    );
};

export default MakeAppointment;