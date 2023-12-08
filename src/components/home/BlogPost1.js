import React from 'react';
import './css/blogpost.css';
import Img1 from './imgs/img3.jpeg'

const BlogPostCard1 = () => {
  return (
    <div className="blog-post-card">
      <div className="card-row">
        <img src={Img1} alt="Blog Post" />
      </div>
      <div className="card-row">
        <div className="post-details">
          <h2>Blood Donation</h2>
          <p>
          Blood donation is a selfless act that saves lives. By giving a small part of ourselves, we contribute to the well-being of others in need. Each donation provides vital support for surgeries, trauma care, and medical treatments. Be a hero – donate blood and make a significant impact on someone's life. It's a simple yet powerful gesture that embodies the spirit of compassion and community that positively impacts their daily experiences and long-term health. Embracing wellness is a journey towards self-care and self-discovery.
          </p>
        </div>
      </div>
      <div className="card-row">
        <div className="post-meta">
          <div className="meta-column">
            <span>Timestamp</span>
            <p>December 4, 2023</p>
          </div>
          <div className="meta-column">
            <span>Category</span>
            <p>Health</p>
          </div>
          <div className="meta-column">
            <span>Author</span>
            <p>Raghu </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard1;


