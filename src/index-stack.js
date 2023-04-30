import React from 'react';
import ReactDOM from 'react-dom';
import Stack from './pages/Stack';

const stackRoot = document.getElementById('stack-root');
ReactDOM.render(
  <React.StrictMode>
    <Stack />
  </React.StrictMode>,
  stackRoot
);