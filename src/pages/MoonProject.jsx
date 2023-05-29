import React from 'react';

const MoonProject = () => {
    return (
        <div className='white f3 code'>
            <h1>moonChallenge</h1>
            <ul>
                <li>
                    <h3>Overview</h3>
                    <h5>This React app is a single-page web application featuring five mini applications. It's implemented with React's State Hooks, giving an impression of a multi-page app.</h5>
                </li>
                <li>
                    <h3>Array Order</h3>
                    <h5>Function: Orders a string array alphabetically. </h5>
                </li>
                <li>
                    <h3>Anagram Exercise</h3>
                    <h5>Function: Converts two strings into arrays, rearranges them, and checks if they are anagrams. It functions reactively, updating as you type.</h5>
                </li>
                <li>
                    <h3>Name Pair</h3>
                    <h5>Function: Randomly pairs two input names. If an odd number is input, it generates a half pair.</h5>
                </li>
                <li>
                    <h3>DNArrays</h3>
                    <h5>Function: Combines multiple arrays into one, selectively choosing string data.</h5>
                </li>
                <li>
                    <h3>Contact List</h3>
                    <h5>Function: Allows management of a contact list, with features for marking favorite contacts and a search box for finding both marked and unmarked contacts.</h5>
                </li>
                <li>
                    <h3>Running the App</h3>
                    <h5>Instructions: The app can be run using various npm commands (`npm start` for development mode, `npm test` to launch the test runner, and `npm run build` to bundle and optimize the app for production). It's accessible at http://localhost:3000 for local development, reloading automatically upon code changes.</h5>
                </li>
                <div className="mt-4">
                    <a href='https://github.com/Moondevbeam/Moonchallenge' className="btn btn-danger">Source Code</a>
                </div>
            </ul>
        </div>
    );
}

export default MoonProject;
