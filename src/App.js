import React, { Component } from 'react';

import Components from './Components'
import Navbar from './Navbar';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Components />
      </div>
    );
  }
}


export default App;
