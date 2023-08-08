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

  return (
    <div>
      {publicPosts.map((post) => (
        <div key={post.id} className="border border-gray-300 p-2 mb-2 rounded md:mx-16 mx-2 mb-32 mt-16">
          <h3 className='text-center mt-4 mb-4 font-bold text-lg'>{post.title}</h3> {/* Display the title */}
          <p className='px-2 mb-4'>{post.content}</p>
          <p className="font-bold mx-2 text-sm mt-1">{post.date}</p> {/* Display the date */}
        </div>
      ))}
    </div>
  );
};

export default PublicPostList;