import React,{Component} from 'react';
import Navigation from './components/navigation/Navigation';
import './App.css';
import Introduction from './components/introduction/Introduction';
class App extends Component{
  render(){
    return(
      <div className='App'>
        <Navigation/>
        <Introduction/>
      </div>
    )
  }
}
export default App;
