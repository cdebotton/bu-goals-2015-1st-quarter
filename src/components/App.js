import React from 'react/addons';
import {RouteHandler} from 'react-router';
import Nav from './Nav';
import BackgroundStore from '../stores/BackgroundStore';
import {StoreListenerMixin} from 'fluxd';

var {CSSTransitionGroup} = React.addons;

const HEX_SEARCH = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

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
    var rgb = HEX_SEARCH.exec(this.state.color);
    var {r, g, b, a} = rgb ? {
      r: parseInt(rgb[1], 16),
      g: parseInt(rgb[2], 16),
      b: parseInt(rgb[3], 16),
      a: 0.6
    } : {r: 0, g: 0, b: 0, a: 1.0};

    var color = `rgba(${r}, ${g}, ${b}, ${a})`;

    return (
      <div className="app-handler" style={{backgroundColor: color}}>
        <h1>Technology Department Goals <small>Brooklyn United</small></h1>
        <Nav />
        <RouteHandler className="viewport" key={name} />
      </div>
    );
  }
});

export default App;
