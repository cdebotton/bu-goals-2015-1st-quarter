import React from 'react';
import BackgroundActionCreators from '../actions/BackgroundActionCreators';

var WebGLHandler = React.createClass({
  componentDidMount() {
    BackgroundActionCreators.setBackground('#FF002F');
  },

  render() {
    return (
      <div className="web-gl-handler">
        <h3>Embrace OpenGL on the web for more unique visual control.</h3>
      </div>
    );
  }
});

export default WebGLHandler;
