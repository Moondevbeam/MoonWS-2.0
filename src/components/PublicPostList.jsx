import React, { useState, useEffect } from 'react';
import firebase from '../api/FirebaseConfig';

const PublicPostList = () => {
  const [publicPosts, setPublicPosts] = useState([]);

  useEffect(() => {
    const fetchPublicPosts = async () => {
      try {
        const publicPostsCollection = await firebase.firestore().collection('publicPosts').get();
        const fetchedPublicPosts = publicPostsCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPublicPosts(fetchedPublicPosts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPublicPosts();
  }, []);

  const style = {
    whiteSpace: 'pre-line',
  };

  return (
    <div className='space-y-8 mb-8'>
      {publicPosts.map((post) => (
        <div key={post.id} className="border border-purple-700 border-[2px] bg-black p-2 mb-2 rounded md:mx-16 mx-2 mt-16">
          <h3 className='text-center text-purple-700 mt-4 mb-4 font-bold text-lg'>{post.title}</h3>
          <p style={style} className='text-md px-2 mb-4 text-white font-bold'>{post.content}</p>
          <p className="font-bold mx-2 text-sm text-right">{post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default PublicPostList;
