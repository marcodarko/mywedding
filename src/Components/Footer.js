import React from 'react';

export default class Footer extends React.Component {

  // constructor(props) {
  //   super(props);
  // }c

  render() {
    return (
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 backGreen whiteText text-center" style={{padding:'20px', color:'#8debc9'}}>
      	<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4 className="titleFont">ABOUT US</h4>
          <hr/>
          <p>It was love at first swipe. Yup we met on <em>Tinder</em>. Marco <i>Super Liked</i> and the rest is history. </p>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4 className="titleFont">ADDITIONAL INFO</h4>
          <hr/>
          
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4 className="titleFont">CONTACT US</h4>
          <hr/>
          <a target='_blank' rel="noopener noreferrer" href='mailto: artofmarco@gmail.com'><i className="fa fa-envelope-o" aria-hidden="true"></i> Marco</a>
          <br/>
          <a target='_blank' rel="noopener noreferrer" href='mailto: onorjamesfoley@gmail.com'><i className="fa fa-envelope-o" aria-hidden="true"></i> Conor</a>
         
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4 className="titleFont">FOLLOW US</h4>
          <hr/>
          <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/mdarko2'><i className="fa fa-facebook-square" aria-hidden="true"></i> Marco</a>
          <br/>
          <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/falconerjmoosey'><i className="fa fa-facebook-square" aria-hidden="true"></i> Conor</a>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{fontSize:'10px'}}>
          <p>Marco Alvarado Copyright 2017</p>
        </div>
      </div>
    );
  }
}
