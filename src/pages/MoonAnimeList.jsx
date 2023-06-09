import React from 'react';

const MoonAnimeList = () => {
  return (
    <div className='white f3 code'>
      <h1>MoonAnimeList: Showcasing My Coding Experience and Learning Journey</h1>
      <h5>
        MoonAnimeList is my personal project, developed solely by me, to showcase my coding skills and document my learning journey.
        Built with React, this website integrates the Jikan API, offering anime enthusiasts a platform to explore upcoming, airing, and popular anime.
        As a work in progress, MoonAnimeList demonstrates my current coding abilities and serves as a valuable learning experience.
      </h5>
      <h2>Features:</h2>
      <ul>
        <li>
          <strong>Personal Development:</strong> MoonAnimeList is a testament to my proficiency in front-end development, specifically React and JavaScript.
          It highlights my ability to work independently and deliver a product aligned with industry standards.
        </li>
        <li>
          <strong>Jikan API Integration:</strong> By incorporating the Jikan API, MoonAnimeList fetches accurate and real-time anime data,
          providing comprehensive information about upcoming releases and popular series.
        </li>
        <li>
          <strong>Search Functionality:</strong> MoonAnimeList includes a search bar that dynamically filters the anime list based on user input.
          This feature demonstrates my ability to handle user input and create responsive search functionality.
        </li>
        <li>
          <strong>Design and User Experience:</strong> MoonAnimeList emphasizes both functionality and visual appeal.
          With a clean and intuitive interface, I showcase my understanding of UI/UX principles,
          ensuring a seamless user experience across different devices.
        </li>
        <li>
          <strong>Continuous Learning:</strong> MoonAnimeList remains an ongoing project that fuels my passion for learning.
          As I encounter challenges, I actively seek resources to deepen my knowledge and enhance my skills.
        </li>
      </ul>
      <div className="mt-4">
        <a href='https://github.com/Moondevbeam/moonanimelist' className="btn btn-danger">Source Code</a>
      </div>
    </div>
  );
};

export default MoonAnimeList;