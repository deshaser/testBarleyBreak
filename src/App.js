import React, { Component } from 'react';
import { connect } from 'react-redux';

import Area from './containers/area/area';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Area/>
      </div>
    );
  }
}

export default connect()(App);
