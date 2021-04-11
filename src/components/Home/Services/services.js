import React from "react";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
const serviceData = [
  {
    img: fluoride,
    title: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam voluptatum asperiores officia, nesciunt accusantium",
  },
  {
    img: cavity,
    title: "Cavity Filling",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam voluptatum asperiores officia, nesciunt accusantium",
  },
  {
    img: whitening,
    title: "Teeth Whitening",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam voluptatum asperiores officia, nesciunt accusantium",
  },
];

const services = () => {
  return (
    <section className="service-container mt-5">
      <div className="text-center">
        <h6 className="mb-3" style={{ color: "#1CC7C1" }}>OUR SERVICES</h6>
        <h2 style={{ color: "#3A4256" }}>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
          <div className="row w-75 mt-5 pt-5">
              {
                  serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
              }
          </div>
      </div>
    </section>
  );
};

export default services;
