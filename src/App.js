import React,{Component} from 'react';
import Navigation from './components/navigation/Navigation';
import './App.css';
import Introduction from './components/introduction/Introduction';
import Stack from './pages/Stack'
class App extends Component{
  render(){
      const path = window.location.pathname;
      if (path === "/stack") {
        return (
          <div>
            <Navigation />
        <Stack />;
        </div>
        )
      } else {
        return (
          <div>
            <Navigation />
        <Introduction />;
        </div>
        )
      }
  }
}
export default App;
