import React from "react";
import jimmy from "../../../images/jimmy.png";
import susan from "../../../images/susan.png";
import BlogPost from "../BlogPost/BlogPost";
const blogsData = [
  {
    name: "Rashed Kabir",
    date: "13 January 2021",
    title: "Check at last a doctor in a year for your teeth",
  },
  {
    img: jimmy,
    name: "Dr. Caudi",
    date: "13 April 2021",
    title: "2 times brush in a day can keep you healthy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis accusantium iste qui delectus, tempore animi doloremque velit perferendis unde debitis ducimus omnis distinctio illo aut dolores expedita libero veritatis!",
  },
  {
    img: susan,
    name: "Dr.John Mitchel",
    date: "13 April 2021",
    title: "The tooth cancer is taking a challenge",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis accusantium iste qui delectus, tempore animi doloremque velit perferendis unde debitis ducimus omnis distinctio illo aut dolores expedita libero veritatis!",
  },
];

const Blogs = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="text-center">
          <h5 className="my-3" style={{ color: "#1CC7C1" }}>
            OUR BLOG
          </h5>
          <h2 style={{ color: "#3A4256" }}>From Our Blog News</h2>
        </div>
        <div className="row">
          {blogsData.map((blog) => (
            <BlogPost blog={blog}></BlogPost>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
