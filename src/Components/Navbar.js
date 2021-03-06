import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <nav id="navigationBar" className="navbar navbar-inverse navbar-static-top aniBack" style={{marginBottom:'0px', border:'none'}}>
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
	            <ul className="nav navbar-nav navFont" >
	            	<li><Link style={{'lineHeight': '33px'}} className='whiteText vonFontSimple' to='/'><img src="./favi.png" width="30px" alt="logo"/></Link></li>
	                <li><Link style={{'lineHeight': '33px'}} className='whiteText vonFontSimple' to='/party'>Party</Link></li>
	                <li><Link style={{'lineHeight': '33px'}} className='whiteText vonFontSimple' to='/schedule'>Schedule </Link></li>
	                <li><Link style={{'lineHeight': '33px'}} className='whiteText vonFontSimple' to='/directions'>Directions</Link></li>
	                <li><Link style={{'lineHeight': '33px'}} className='whiteText vonFontSimple' to='/registry'>Registry</Link></li>
	            </ul>
	        </div>
	    </div>
	</nav>
    );
  }
}
