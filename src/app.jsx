import React, { Component } from 'react';

import Gallery from './components/Gallery';

class App extends Component {
  render() {
    return (
      <div className="heading">
        <h1>Ohai Y'all!</h1>
        <Gallery/>
      </div>
    );
  }
}

export default App;
