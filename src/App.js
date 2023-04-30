import React,{Component} from 'react';
import './App.css';
import Introduction from './pages/Introduction';
class App extends Component{
  render(){
    return(
      <div className='App'>
          <Introduction/>
      </div>
    )
  }
}
export default App;
