import React, { Component } from 'react';

import Button from './components/Button';
import './App.css';

class App extends Component {

  clickHandler = () => {
    console.log("Clicked");
  };

  render() {
    return (
      <div className="App">
        Here is a button: <Button label='My Button' onClick={this.clickHandler}/>
      </div>
    );
    }
}

export default App;
