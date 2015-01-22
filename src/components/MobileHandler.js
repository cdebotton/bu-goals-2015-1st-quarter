import React from 'react';
import Swift from './Swift';
import BackgroundActionCreators from '../actions/BackgroundActionCreators';

var MobileHandler = React.createClass({
  componentDidMount() {
    BackgroundActionCreators.setBackground('#FF593F');
  },

  render() {
    return (
      <div className="mobile-handler">
        <h3>Learn Swift.</h3>
        <p>Learning Swift, cocoa, and releasing a completed App in one quarter is a little unrealistic, so we need a clear path on how to get to that point. We are working internally on a Weather app as a means of becoming familiar with networking and data flow in Swift and iOS development. The goal is to have a functioning prototype that makes calls to Yahoo&apos;s weather API, and provides the user with hourly weather info and a five day overview.</p>
        <p><strong>Bonus:</strong> Make it pretty.</p>
        <Swift />
      </div>
    );
  }
});

export default MobileHandler;
