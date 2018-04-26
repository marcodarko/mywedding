import React from 'react';
import '../index.css';

export default class Welcome extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount(){

  }

  render() {
    return (
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center beachgifback whiteText jumbotron noMargin noRounded" style={{paddingTop:'200px', paddingBottom:'300px', borderRadius:'0px', position: 'relative'}}>
      <img style={{borderRadius:'100%', boxShadow: '2px 3px 10px #b86755'}} src="./images/us.jpg" alt="engagement" width='35%'/>
        <h1 style={{fontSize:'20vw'}} className="vonFont whiteText">C&M</h1>
        <h3 className='blueText titleFont noMargin'>MAY 19, 2018</h3>
      </div>
    );
  }
}
