import React from "react";
import TestimonialDetail from "../TestimonialDetail/TestimonialDetail";
import jimmy from "../../../images/jimmy.png";
import micky from "../../../images/micky.png";
import susan from "../../../images/susan.png";
const testimonialData = [
  {
    img: jimmy,
    name: "Jimmy Anderson",
    address: "California",
  },
  {
    img: micky,
    name: "Micky Tulip",
    address: "Washington",
  },
  {
    img: susan,
    name: "Susan Hanson",
    address: "Atlanta",
  },
];

const Testimonials = () => {
  return (
    <section className="my-5 py-5">
      <div className="container">
        <h5 style={{ color: "#1CC7C1" }}>TESTIMONIAL</h5>
        <h1 style={{ color: "#3A4256" }}>
          What's Our Patients <br /> Says
        </h1>
        <div className="row">
          {testimonialData.map((testimonial) => (
            <TestimonialDetail testimonial={testimonial}></TestimonialDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
