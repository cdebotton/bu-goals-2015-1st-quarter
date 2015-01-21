import React from 'react';
import {RouteHandler} from 'react-router';
import Nav from './Nav';

var App = React.createClass({
  render() {
    return (
      <div className="app-handler">
        <h1>Technology Department Goals <small>Brooklyn United</small></h1>
        <Nav />
        <RouteHandler className="viewport" />
      </div>
    );
  }
});

export default App;
