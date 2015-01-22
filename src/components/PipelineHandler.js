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
        <p>Deployment of projects is still kind of a messy hassle. Without dev&ndash;ops, it&apos;s particularly important to have a clean pipeline for development and deployment. We already started the development side of this by using a semi-standardized gulp pipeline for our builds. This quarter we want to make deployment as straight forward as possible.</p>
        <p>The goal for the quarter to deploy all new projects on a DigitalOcean instance, which should be purchased and set up to use before development starts. This will allow us to properly set up dev, staging, and production environments, and make launching sites as simple as repointing the DNS.</p>
        <p><strong>Bonus:</strong> Build a CLI tool that handles deployments.</p>
      </div>
    );
  }
});

export default PipelineHandler;
