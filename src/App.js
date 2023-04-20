import React,{Component} from 'react';
import Navigation from './components/navigation/Navigation';
import './App.css';
import Slides from './components/slides/Slides';
import Darkmode from './components/darkmode/Darkmode';
class App extends Component{
  render(){
    return(
      <div className='App'>
        <Navigation/>
        <Slides/>
        <Darkmode/>
      </div>
    )
  }
}
export default App;
