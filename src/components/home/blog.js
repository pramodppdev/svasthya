// BlogPostContainer.js

import React from 'react';
import './css/blog.css';
import BlogPostCard from './blogPost';
import TopNavbar from './nav';
import Footer from './footer';

const BlogPostContainer = () => {
  return (
    <div>
      <div>
        <TopNavbar/>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="column">
            <BlogPostCard />
          </div>
          <div className="column">
            <BlogPostCard />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <BlogPostCard />
          </div>
          <div className="column">
            <BlogPostCard />
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    
    </div>
    
  );
};

export default BlogPostContainer;
