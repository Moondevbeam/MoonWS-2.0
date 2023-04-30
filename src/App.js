import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './pages/Introduction';
import Stack from './pages/Stack';
class App extends Component{
  render(){
    return(
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/stack" element={<Stack />} />
      </Routes>
    </Router>
  );
}
  }
export default App;
