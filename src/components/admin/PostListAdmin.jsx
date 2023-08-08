import React, { useState, useEffect } from 'react';
import firebase from '../../api/FirebaseConfig';
import PostItemAdmin from './PostItemAdmin';

const PostListAdmin = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const postsCollection = await firebase.firestore().collection('publicPosts').get();
      const fetchedPosts = postsCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(fetchedPosts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='mx-4'>
      {posts.map((post) => (
        <PostItemAdmin key={post.id} post={post} fetchPosts={fetchPosts} />
      ))}
    </div>
  );
};

export default PostListAdmin;
