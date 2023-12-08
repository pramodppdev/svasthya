// BlogPostContainer.js

import React from 'react';
import './css/blog.css';
import BlogPostCard from './blogPost';
import TopNavbar from './nav';
import Footer from './footer';
import BlogPostCard1 from './BlogPost1';
import BlogPostCard2 from './blopPost2';

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
            <BlogPostCard1 />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <BlogPostCard2 />
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
