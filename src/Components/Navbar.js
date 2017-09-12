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
	            <button type="button" className="navbar-toggle collapsed themeButton" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
	                <span className="sr-only">Toggle navigation</span>
	                <span className="icon-bar"></span>
	                <span className="icon-bar"></span>
	                <span className="icon-bar"></span>
	            </button>
	        </div>

	        <div className="collapse navbar-collapse text-center" id="bs-example-navbar-collapse-1">
	            <ul className="nav navbar-nav roundFont" >
	            	<li><Link to='/'>home</Link></li>
	                <li><Link to='/party'>party</Link></li>
	                <li><Link to='/schedule'>schedule</Link></li>
	                <li><Link to='/directions'>directions</Link></li>
	                <li><Link to='/registry'>registry</Link></li>
	            </ul>
	        </div>
	    </div>
	</nav>
    );
  }
}
