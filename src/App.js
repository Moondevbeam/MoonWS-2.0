import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Introduction from './pages/Introduction';
import Stack from './pages/Stack';
class App extends Component{
  render(){
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/stack" element={<Stack />} />
      </Routes>
    </BrowserRouter>
  );
}
  }
export default App;
