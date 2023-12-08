import React from 'react';
import './css/blogpost.css';
import Img1 from './imgs/img1.jpeg'

const BlogPostCard = () => {
  return (
    <div className="blog-post-card">
      <div className="card-row">
        <img src={Img1} alt="Blog Post" />
      </div>
      <div className="card-row">
        <div className="post-details">
          <h2>Wellness</h2>
          <p>
          Wellness encompasses the holistic balance of physical, mental, and emotional well-being. It involves conscious choices and practices that promote a healthy lifestyle, including regular exercise, nutritious eating, and adequate rest. Prioritizing wellness fosters resilience, reduces stress, and enhances overall quality of life. By nurturing both mind and body, individuals can achieve a state of harmony that positively impacts their daily experiences and long-term health. Embracing wellness is a journey towards self-care and self-discovery.
          </p>
        </div>
      </div>
      <div className="card-row">
        <div className="post-meta">
          <div className="meta-column">
            <span>Timestamp</span>
            <p>December 1, 2023</p>
          </div>
          <div className="meta-column">
            <span>Category</span>
            <p>Health and Wellness</p>
          </div>
          <div className="meta-column">
            <span>Author</span>
            <p>Raj K</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;


