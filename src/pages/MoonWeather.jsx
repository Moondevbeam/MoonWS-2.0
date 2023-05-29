import React from 'react';

const MoonWeather = () => {
  return (
    <div className='white code'>
      <h1>MoonWeather: An In-Progress Project</h1>
      <ul>
        <li>
          <h5>
            The "moonWeather" project is an ambitious work-in-progress web application, 
            being thoughtfully developed using React.js and Redux, celebrated JavaScript 
            libraries known for creating compelling user interfaces and managing the 
            application state, respectively.
          </h5>
        </li>
        <li>
          <h5>
            The core functionality of this application is its potential to allow users 
            to view the current weather conditions for a city of their choice, leveraging 
            the OpenWeatherMap API, a powerful tool designed to fetch real-time weather 
            data from across the globe.
          </h5>
        </li>
        <li>
          <h5>
            As the development progresses, users will be able to access information swiftly 
            regarding the weather condition, temperature, and wind speed of their chosen 
            location. The project, although still under development, is expected to provide 
            an efficient, user-friendly interface that elegantly presents accurate and timely 
            weather data to its users.
          </h5>
        </li>
        <div className="mt-4">
        <a href='https://github.com/Moondevbeam/moonweather' className="btn btn-danger">Source Code</a>
      </div>
      </ul>
    </div>
  );
}

export default MoonWeather;
