import React, { useState, useEffect } from 'react';
import firebase from '../../api/FirebaseConfig';
import PostItemAdmin from './PostItemAdmin';

const PostListAdmin = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('publicPosts').onSnapshot(snapshot => {
      const fetchedPosts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(fetchedPosts);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className='mx-4'>
      {posts.map((post) => (
        <PostItemAdmin key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostListAdmin;
