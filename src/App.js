import React,{Component} from 'react';
import Navigation from './components/navigation/Navigation';
import './App.css';
import Slides from './components/slides/Slides';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <Navigation/>
        <Slides/>
      </div>
    )
  }
}
export default App;
