import React from 'react';
import './css/blogpost.css';
import Img1 from './imgs/img2.jpeg'

const BlogPostCard2 = () => {
  return (
    <div className="blog-post-card">
      <div className="card-row">
        <img src={Img1} alt="Blog Post" />
      </div>
      <div className="card-row">
        <div className="post-details">
          <h2>Fitness</h2>
          <p>
          Fitness is a holistic journey that encompasses physical, mental, and emotional well-being. Engaging in regular exercise not only strengthens the body but also enhances mood and reduces stress. A balanced fitness routine includes cardio, strength training, and flexibility exercises, contributing to improved overall health. Making healthy lifestyle choices, such as nutritious eating and adequate sleep, complements fitness efforts, promoting longevity and vitality. Ultimately, fitness is a lifelong commitment to self-care, empowering individuals to lead active, fulfilling lives.          </p>
        </div>
      </div>
      <div className="card-row">
        <div className="post-meta">
          <div className="meta-column">
            <span>Timestamp</span>
            <p>December 6, 2023</p>
          </div>
          <div className="meta-column">
            <span>Category</span>
            <p>Health and Fitness</p>
          </div>
          <div className="meta-column">
            <span>Author</span>
            <p>Amrutha </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard2;


