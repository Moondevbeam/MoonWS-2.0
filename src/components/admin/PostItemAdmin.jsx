import React, { useState } from 'react';
import firebase from '../../api/FirebaseConfig';

const PostItemAdmin = ({ post, fetchPosts }) => {
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedContent, setEditedContent] = useState(post.content);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = async () => {
    setIsLoading(true);
    try {
      await firebase.firestore().collection('publicPosts').doc(post.id).update({
        title: editedTitle,
        content: editedContent,
      });
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const handleDeletePost = async () => {
    try {
      await firebase.firestore().collection('publicPosts').doc(post.id).delete();
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <div className="border border-[3px] border-purple-700 text-purple-700 font-bold bg-black p-2 mb-2 rounded mx-4">
      {isEditing ? (
        <>
          <input
            type="text"
            className="w-full px-2 py-1 border border-purple-700 bg-black rounded mb-2"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            className="w-full px-2 py-1 border border-purple-700 h-64 bg-black rounded mb-2"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 mr-2"
            onClick={handleEdit}
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : 'Save'}
          </button>
          <button
            className="bg-gray-300 text-gray-800 py-1 px-2 rounded hover:bg-gray-400"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <h3 className='mb-4'>{post.title}</h3>
          <p>{post.content}</p>
          <button
            className="mt-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 mr-2"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className="mt-2 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
            onClick={handleDeletePost}
          >
            Delete
          </button>
        </>
      )}
    </div>
    <p className='text-right mx-4 text-purple-700 font-bold'>{post.date}</p>
    </div>
  );
};

export default PostItemAdmin;
