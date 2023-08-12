import React, { useState } from 'react';
import firebase from '../../api/FirebaseConfig';


const FormDate = new Date().toLocaleDateString();

const CreatePostForm = () => {
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleCreatePost = async () => {
    if (newTitle && newContent) {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString();

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
    <div className="mb-4 md:mx-8 mx-2 mt-8">
      <input
        type="text"
        className="md:w-1/4 w-1/2 bg-black text-purple-700 font-bold px-2 py-1 border border-[4px] border-purple-700 rounded mb-2"
        placeholder="Enter post title..."
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <textarea
        className="w-full bg-black text-purple-700 font-bold px-2 py-1 border border-[4px] border-purple-700 rounded h-48 mb-2"
        placeholder="Enter post text..."
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      />
      <div className='flex justify-between'>
      <button
        className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
        onClick={handleCreatePost}
      >
        Create Post
      </button>
        <p className='flex my-auto text-purple-700 font-extrabold'>{FormDate}</p>
      </div>
    </div>
  );
};

export default CreatePostForm;
