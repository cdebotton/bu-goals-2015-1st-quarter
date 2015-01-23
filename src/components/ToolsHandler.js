import React from 'react';
import BackgroundActionCreators from '../actions/BackgroundActionCreators';

var ToolsHandler = React.createClass({
  componentDidMount() {
    BackgroundActionCreators.setBackground('#21acfe');
  },

  render() {
    return (
      <div className="tools-handler">
        <h3>Release tools for the community.</h3>
        <p>We want to establish ourselves as an authority on web and mobile, creating beautiful work is half of that, and the other is contributing to the development community. Creating tools that other developers can use in their own work accomplishes a few things; It gives you free user testing, it gets our name out, and it&apos;s just a nice thing to do. These tools can be as simple as a grouping of processes that we find ourselves writing over and over again.</p>
        <p>There are a few being developed right now, including a buld pipeline, an isomorphic server, a styleguide management tool, and a CMS.</p>
        <h3><em>Goals</em></h3>
        <ul>
          <li>Write test suites for any tools that have been completed and don&apos; have any.</li>
          <li>Fully launch one tool, with a proper website to support it.</li>
          <li>Complete the prototype for our in-house style guide editor, to be released publicly by Q4 2016.</li>
          <li><strong>Bonus:</strong> Release 3 tested tools.</li>
        </ul>
      </div>
    );
  }
});

export default ToolsHandler;
