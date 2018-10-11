import React, { Component } from 'react';
import './App.css';
import Description from './Description';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            Dumie's Todo App
            <hr/>
          </p>
          
        </header>
        
        <Description />
        <hr />
      </div>



    );
  }
}

export default App;
