import React from 'react';
import BackgroundActionCreators from '../actions/BackgroundActionCreators';

var ToolsHandler = React.createClass({
  componentDidMount() {
    BackgroundActionCreators.setBackground('#FF9B00');
  },

  render() {
    return (
      <div className="tools-handler">
        <h3>Release tools for the community.</h3>
        <p>To establish recognition in the community as an expert in the field, we need to contribute to the community. Creating open source tools for the community to use and contribute to is extremely important. The goal for this quarter is to release at least one tool for the community with a site to support it. We have several tools being worked on, including an isomorphic server, a build tool pipeline, and a styleguide editor.</p>
        <p><strong>Bonus:</strong> Release all three.</p>
      </div>
    );
  }
});

export default ToolsHandler;
