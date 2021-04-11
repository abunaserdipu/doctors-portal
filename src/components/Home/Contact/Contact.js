import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="contact-bg">
          <div className="text-center">
            <h5 style={{ color: "#1CC7C1" }}>CONTACT US</h5>
            <h2 style={{ color: "#3A4256" }}>Always Connect with us</h2>
          </div>
          <div className="text-center p-5">
            <form action="">
              <input
                className="form-control my-2 p-3"
                type="email"
                name="email"
                id=""
                placeholder="Email Address*"
              />
              <input
                className="form-control my-2 p-3"
                type="text"
                name=""
                id=""
                placeholder="Subject*"
              />
              <input
                className="form-control my-2 p-5"
                type="text"
                name=""
                id=""
                placeholder="Your Message*"
              />
              <input type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
