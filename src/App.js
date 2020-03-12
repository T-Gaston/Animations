import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import WindowInfo from './WindowInfo';
import Animation from './AnimationPage';
import MousePosition from './MousePosition';

class App extends Component {
  constructor(props){
    super(props)
  }


  render (){
    return (
      <div className="App"  >
        <WindowInfo />
        <MousePosition />
        <Animation width={500} height={250}/>
      </div>
      );
    }
  }


export default App;
