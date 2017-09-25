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
          <p>It was love at first swipe. Yup we met on <em>Tinder</em>. Marco <i>Super Liked</i> Conor and the rest is history. </p>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4 className="titleFont">ADDRESS</h4>
          <hr/>
          <h5>Pelican Point</h5>
          <p>6311 County Hwy S21, Carlsbad, CA 92008</p>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4 className="titleFont">CONTACT US</h4>
          <hr/>
          <table className="table">
            <tbody>
            <tr>
                <td colSpan='2'>
                  Conor
                </td>
              </tr>
              <tr>
                <td>
                   <a target='_blank' rel="noopener noreferrer" href='tel: 415-846-5476'><i className="fa fa-phone " aria-hidden="true"></i> Phone</a>
                </td>
                <td>
                  <a target='_blank' rel="noopener noreferrer" href='mailto: conorjamesfoley@gmail.com'><i className="fa fa-envelope-o " aria-hidden="true"></i> E-mail</a>
                </td>
              </tr>
              <tr>
                <td colSpan='2'>
                  Marco
                </td>
              </tr>
              <tr>
                <td>
                  <a target='_blank' rel="noopener noreferrer" href='tel:7608152082'><i className="fa fa-phone " aria-hidden="true"></i> Phone</a>
                </td>
                <td>
                   <a target='_blank' rel="noopener noreferrer" href='mailto:artofmarco@gmail.com'><i className="fa fa-envelope-o " aria-hidden="true"></i> E-mail</a>
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4 className="titleFont">FOLLOW US</h4>
          <hr/>
          <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/mdarko2'><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i> Marco</a>
          <br/>
          <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/falconerjmoosey'><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i> Conor</a>
          
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{fontSize:'10px'}}>
          <p>Marco Alvarado Copyright 2017</p>
        </div>
      </div>
    );
  }
}
