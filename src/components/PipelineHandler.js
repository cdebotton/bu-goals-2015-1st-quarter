import React from 'react';
import BackgroundActionCreators from '../actions/BackgroundActionCreators';

var PipelineHandler = React.createClass({
  componentDidMount() {
    BackgroundActionCreators.setBackground('#54C3CC');
  },

  render() {
    return (
      <div className="pipeline-handler">
        <h2>PipelineHandler</h2>
      </div>
    );
  }
});

export default PipelineHandler;
