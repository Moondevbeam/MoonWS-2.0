import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import firebase from '../../api/FirebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const GitHubSignIn = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleGitHubSignIn = async () => {
        const provider = new firebase.auth.GithubAuthProvider();
        try {
            const userCredential = await firebase.auth().signInWithPopup(provider);
            // Check if the signed-in user's username matches your GitHub username
            const githubID = process.env.REACT_APP_GITHUB_ID;
            if (userCredential.additionalUserInfo.id === githubID) {
                // Redirect to admin page upon successful login
                navigate('/admin');
            } else {
                // Handle unauthorized access
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button className="bg-transparent text-4xl hover:text-purple-700" onClick={handleGitHubSignIn}>
            <FontAwesomeIcon className='mt-2' icon={faGithub} />
        </button>
    );
};

export default GitHubSignIn;
