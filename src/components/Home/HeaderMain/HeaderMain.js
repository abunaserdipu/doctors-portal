import React from "react";
import chair from "../../../images/chair.png";

const HeaderMain = () => {
  return (
    <main style={{height: '600px'}} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
          <h1 style={{color: '#3A4256'}}>Your New Smile <br/> Starts Here</h1>
          <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus provident magni dolor quae distinctio.</p>
          <button style={{backgroundImage: 'linear-gradient(rgba(19,209,210))'}} className="btn btn-primary">GET APPOINTMENT</button>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
