import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Thanks from '../components/Thanks';
import PublicPostList from '../components/PublicPostList'; // Import the component for listing public posts

function Blog() {
  return (
    <div>
      <Navbar />
      <PublicPostList />
      <Thanks />
      <Footer />
    </div>
  );
}

export default Blog;
