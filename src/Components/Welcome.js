import React from 'react';
import '../index.css';

export default class Welcome extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (

      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center beachBackBlue whiteText jumbotron noMargin noRounded" style={{paddingTop:'200px', paddingBottom:'200px', borderRadius:'0px'}}>
      	<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
      	<img className="flip-in-hor-top" src="./images/shield.svg" alt="shield" width="60%"/>
        <h1 className="whiteText waterFont">May 19, 2018</h1>
      	</div>
      </div>
    );
  }
}
