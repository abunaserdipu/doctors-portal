import React from 'react';

const TestimonialDetail = ({testimonial}) => {
    return (
        <div className="col-md-4 my-5">
           <div className="card border-0 shadow-sm p-3 mb-5 bg-body">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, pariatur iste voluptatibus enim minus quisquam ad reiciendis consequatur magni voluptatum et nam voluptas a suscipit veniam, omnis rerum incidunt! Mollitia.</p>
           <img style={{width: '50px'}} src={testimonial.img} alt=""/>
           <h6 style={{ color: "#1CC7C1" }}>{testimonial.name}</h6>
           <p className="text-secondary">{testimonial.address}</p>
           </div>
        </div>
    );
};

export default TestimonialDetail;