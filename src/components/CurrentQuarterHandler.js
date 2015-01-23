import React from 'react/addons';
import {RouteHandler, State} from 'react-router';

var {CSSTransitionGroup} = React.addons;

var CurrentQuarterHandler = React.createClass({
  mixins: [State],

  render() {
    var name = this.getRoutes().reverse()[0].name;
    return (
      <div {...this.props}>
        <h2>Goals for Quarter 1, 2015</h2>
        <CSSTransitionGroup className="viewport-wrapper" transitionName="viewport">
          <RouteHandler key={name} className="current-viewport" />
        </CSSTransitionGroup>
      </div>
    );
  }
});

export default CurrentQuarterHandler;
