import React from 'react';

import {RouteHandler} from 'react-router';

var CurrentQuarterHandler = React.createClass({
  render() {
    return (
      <div {...this.props}>
        <h2>Goals for Quarter 1, 2015</h2>
        <RouteHandler />
      </div>
    );
  }
});

export default CurrentQuarterHandler;
