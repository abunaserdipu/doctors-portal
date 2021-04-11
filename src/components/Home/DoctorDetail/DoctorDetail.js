import React from 'react';

const DoctorDetail = ({doctor}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{width: '350px'}} src={doctor.img} alt=""/>
            <h5>{doctor.name}</h5>
            <small className="text-secondary">{doctor.phone}</small>
        </div>
    );
};

export default DoctorDetail;