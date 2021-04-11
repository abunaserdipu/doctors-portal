import React from 'react';

const BlogPost = ({blog}) => {
    return (
        <div className="col-md-4 my-5 py-4">
            <div className="card shadow-sm p-3 mb-5 bg-body">
                <img style={{width: '50px'}} src={blog.img} alt=""/>
                <h6>{blog.name}</h6>
                <small>{blog.date}</small>
                <h4>{blog.title}</h4>
                <p className="text-secondary">{blog.description}</p>
            </div>
        </div>
    );
};

export default BlogPost;