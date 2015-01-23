import React from 'react';
import Swift from './Swift';
import BackgroundActionCreators from '../actions/BackgroundActionCreators';

var MobileHandler = React.createClass({
  componentDidMount() {
    BackgroundActionCreators.setBackground('#dd5500');
  },

  render() {
    return (
      <div className="mobile-handler">
        <h3>Learn Swift.</h3>
        <p>Last quarter, our goal was to release an Swift app in the iOS App Store. That was somewhat totally unrealistic given when the goals were set in the quarter and what had to be covered. Now there is more of a road map in place to accomplish this goal that will take place over the next several quarters. This quarter we will focus on learning a few of the key technologies in iPhone app development while working on an internal Weather app prototype.</p>
        <p>We will build a tool, largely unstyled, that connects to the Yahoo Weather API and displays local weather for the day as well as a 5-day view.</p>
        <h3><em>Goals</em></h3>
        <ul>
          <li>Learn Swift.</li>
          <li>Get a grasp on the XCode Auto Layout Manager.</li>
          <li>Learn how to use Cocoapods for module management.</li>
          <li>Understand data modeling in iPhone apps.</li>
          <li>Work with AFN Networking and become accustomed with making calls to a server from a native mobile application.</li>
          <li><strong>Bonus:</strong> Implement a custom visual layout.</li>
        </ul>
        <Swift />
      </div>
    );
  }
});

export default MobileHandler;
