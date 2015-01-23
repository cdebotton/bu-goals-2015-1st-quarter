import React from 'react';
import BackgroundActionCreators from '../actions/BackgroundActionCreators';

var PipelineHandler = React.createClass({
  componentDidMount() {
    BackgroundActionCreators.setBackground('#54C3CC');
  },

  render() {
    return (
      <div className="pipeline-handler">
        <h3>Improve our pipeline for development and deployment.</h3>
        <p>We&apos;ve made it suprisingly far without a real pipeline for development and deployment. We have many projects out there on different servers deployed through different methods, running in different environments. This has several effects on our work; projects don&apos;t make it to the client&apos;s server until right before launch, QA happens later, we run into more unforeseen problems at launch.</p>
        <p>The goal is to make sure all future projects starting now will roll out into the same environment. We have already selected a server environment that we want to move forward with that will give us a great deal of flexiblity while streamlining the overall process.</p>
        <h3><em>Goals:</em></h3>
        <ul>
          <li>Launch all new projects on DigitalOcean unless contractually obligated to do otherwise.</li>
          <li>Use pruno to build all new projects.</li>
          <li>With each new project, set up the server before development begins.</li>
          <li>Stop hosting client staging sites on our own machine.</li>
          <li><strong>Bonus:</strong> Release a tool for managing DigitalOcean servers.</li>
        </ul>
      </div>
    );
  }
});

export default PipelineHandler;
