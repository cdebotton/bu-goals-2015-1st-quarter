import React from 'react';
import BackgroundActionCreators from '../actions/BackgroundActionCreators';

var ToolsHandler = React.createClass({
  componentDidMount() {
    BackgroundActionCreators.setBackground('#FF9B00');
  },

  render() {
    return (
      <div className="tools-handler">
        <h2>ToolsHandler</h2>
      </div>
    );
  }
});

export default ToolsHandler;
