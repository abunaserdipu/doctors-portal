import React from "react";
import service from "../../../images/service.png";

const FeaturedService = () => {
  return (
    <section className="my-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-md-5">
            <img className="img-fluid" src={service} alt="" />
          </div>
          <div className="col-md-7 align-self-center">
              <h2 style={{ color: "#3A4256"}}>Exceptional Dental <br/> Care on Your Terms</h2>
              <p className="text-secondary my-5" style={{lineHeight: '30px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor commodi excepturi ut molestias. Labore nam illum ipsam facere quam recusandae dolores blanditiis consequuntur. Optio officiis totam corporis debitis dolorem impedit aliquam pariatur distinctio voluptatem sed. Rerum totam modi ut repellendus doloremque nulla cupiditate est, voluptatum, nobis, quasi possimus. Officiis, sapiente?</p>
              <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
