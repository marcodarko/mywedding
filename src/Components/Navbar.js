import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <nav id="navigationBar" className="navbar navbar-inverse navbar-static-top backBlue" style={{marginBottom:'0px'}}>
	    <div className="container">
	        <div className="navbar-header">
	            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
	                <span className="sr-only">Toggle navigation</span>
	                <span className="icon-bar"></span>
	                <span className="icon-bar"></span>
	                <span className="icon-bar"></span>
	            </button>
	        </div>

	        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	            <ul className="nav navbar-nav">
	            	<li><Link to='/'>Home</Link></li>
	                <li><Link to='/party'>Party</Link></li>
	                <li><Link to='/schedule'>Schedule</Link></li>
	                <li><Link to='/directions'>Directions</Link></li>
	            </ul>
	        </div>
	    </div>
	</nav>
    );
  }
}
