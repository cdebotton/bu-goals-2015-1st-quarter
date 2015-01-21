import React from 'react';
import {Link} from 'react-router';

var Nav = React.createClass({
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <Link to="2014-q4">Last Quarter</Link>
          </li>
          <li>
            <Link to="2015-q1">Q1 2015</Link>
            <ul>
              <li><Link to="mobile">Mobile</Link></li>
              <li><Link to="web-gl">WebGL</Link></li>
              <li><Link to="tools">Tools</Link></li>
              <li><Link to="pipeline">Pipeline</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
});

export default Nav;
