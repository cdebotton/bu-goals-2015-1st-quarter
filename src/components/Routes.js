import React from 'react';
import {Route, DefaultRoute, Redirect} from 'react-router';
import App from './App';
import IndexHandler from './IndexHandler';
import RecapHandler from './RecapHandler';
import CurrentQuarterHandler from './CurrentQuarterHandler';
import MobileHandler from './MobileHandler';
import PipelineHandler from './PipelineHandler';
import ToolsHandler from './ToolsHandler';
import WebGLHandler from './WebGLHandler';

var Route = (
  <Route handler={App}>
    <DefaultRoute name="2014-q4" handler={RecapHandler} />
    <Route name="2015-q1" handler={CurrentQuarterHandler}>
      <DefaultRoute name="mobile" handler={MobileHandler} />
      <Route name="web-gl" handler={WebGLHandler} />
      <Route name="tools" handler={ToolsHandler} />
      <Route name="pipeline" handler={PipelineHandler} />
    </Route>
  </Route>
);

export default Route;
