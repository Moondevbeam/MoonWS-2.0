import React, { useState } from 'react';
import firebase from '../../api/FirebaseConfig';

const CreatePostForm = ({ fetchPosts }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleCreatePost = async () => {
    if (newTitle && newContent) {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString();

      try {
        await firebase.firestore().collection('publicPosts').add({
          title: newTitle,
          content: newContent,
          date: formattedDate,
        });
        setNewTitle('');
        setNewContent(''); // Resetting the content to an empty string
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="mb-4 md:mx-8 mx-2">
      <h2 className="mx-4 mb-8 text-center font-bold text-xl">Create Post</h2>
      <input
        type="text"
        className="md:w-1/4 w-1/2 px-2 py-1 border border-gray-300 rounded mb-2"
        placeholder="Enter post title..."
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <textarea
        className="w-full px-2 py-1 border border-gray-300 rounded h-24 mb-2"
        placeholder="Enter post content..."
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      />
      <button
        className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
        onClick={handleCreatePost}
      >
        Create Post
      </button>
    </div>
  );
};

export default CreatePostForm;
