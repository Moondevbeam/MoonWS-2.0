import React,{Component} from 'react';
import Navigation from './components/navigation/Navigation';
import './App.css';
import DarkVariantExample from './components/structure/Structure';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <Navigation/>
        <DarkVariantExample/>
      </div>
    )
  }
}
export default App;
