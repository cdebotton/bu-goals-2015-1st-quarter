import React from 'react';

import {RouteHandler} from 'react-router';

var CurrentQuarterHandler = React.createClass({
  render() {
    return (
      <div className="current-quarter-handler">
        <h2>CurrentQuarterHandler</h2>
        <RouteHandler />
      </div>
    );
  }
});

export default CurrentQuarterHandler;
