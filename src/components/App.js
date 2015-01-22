import React from 'react';
import {RouteHandler} from 'react-router';
import Nav from './Nav';
import BackgroundStore from '../stores/BackgroundStore';
import {StoreListenerMixin} from 'fluxd';

var App = React.createClass({
  mixins: [StoreListenerMixin],

  getInitialState() {
    var {color} = BackgroundStore.getState();

    return {color: color};
  },

  componentWillMount() {
    this.listenTo(BackgroundStore, () => this.setState(this.getInitialState()));
  },

  render() {
    return (
      <div className="app-handler" style={{backgroundColor: this.state.color}}>
        <h1>Technology Department Goals <small>Brooklyn United</small></h1>
        <Nav />
        <RouteHandler className="viewport" />
      </div>
    );
  }
});

export default App;
