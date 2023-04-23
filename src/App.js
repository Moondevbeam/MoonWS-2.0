import React,{Component} from 'react';
import Navigation from './components/navigation/Navigation';
import './App.css';
import Darkmode from './components/darkmode/Darkmode';
import Introduction from './components/introduction/Introduction';
import Cards from './components/cards/Cards';
class App extends Component{
  render(){
    return(
      <div className='App'>
        <Navigation/>
        <Introduction/>
        <Cards/>
        <Darkmode/>
      </div>
    )
  }
}
export default App;
