import React,{Component} from 'react';
import './App.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Introduction from './pages/Introduction';
import Projects from './pages/Projects';
class App extends Component{
  render(){
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
  }
export default App;
