import React from 'react';
import BackgroundActionCreators from '../actions/BackgroundActionCreators';

var RecapHandler = React.createClass({
  componentDidMount() {
    // BackgroundActionCreators.setBackground('#FF002F');
    BackgroundActionCreators.setBackground('#52A4FF');
  },

  render() {
    return (
      <div {...this.props}>
        <h2>Not so bad...</h2>
        <p>The goals came a little late last year, and we set a ton of them. That list of goals included:</p>
        <ul>
          <li>
            <p className="task success">Standardize our process</p>
            <ul>
              <li>Completed Gulp build pipeline <a href="http://npmjs.com/packages/pruno">Pruno</a>.</li>
              <li>Chose DigitalOcean as our hosting/distribution platform.</li>
            </ul>
          </li>
          <li>
            <p className="task success">Embrace new technologies and frameworks to create dynamic work.</p>
            <ul>
              <li>Experimented with a new CMS, Craft.</li>
              <li>Overall general increased use of JavaScript frameworks to boost productivity.</li>
              <li>Backbone and React are the most used Frameworks by the dev team.</li>
            </ul>
          </li>
          <li>
            <p className="task success">Release a project in a new Language for the studio.</p>
            <ul>
              <li>Not launched, but contributed to the back-end work of Give Directly in Ruby.</li>
            </ul>
          </li>
          <li>
            <p className="task fail">Make an iOS app in Swift and release it on the App store (#lol #wtf)</p>
            <ul>
              <li>Way too short of a timeline, need a proper roadmap.</li>
            </ul>
          </li>
          <li>
            <p className="task fail">QA projects earlier in their life cycle.</p>
            <ul>
              <li>Need the infrastructure in place to allow for this.</li>
            </ul>
          </li>
          <li>
            <p className="task fail">Start using BDD</p>
            <ul>
              <li>Might be premature to try and implement this as a way of developing in the studio.</li>
              <li>Need to set up proper infrastructure, starting at the project planning level.</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
});

export default RecapHandler;
