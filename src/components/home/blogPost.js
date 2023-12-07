import React from 'react';
import './css/blogpost.css';

const BlogPostCard = () => {
  return (
    <div className="blog-post-card">
      <div className="card-row">
        <img src="https://placekitten.com/300/200" alt="Blog Post" />
      </div>
      <div className="card-row">
        <div className="post-details">
          <h2>Blog Post Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            <p>Tech</p>
          </div>
          <div className="meta-column">
            <span>Author</span>
            <p>John Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
