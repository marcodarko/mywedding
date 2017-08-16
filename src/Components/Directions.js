import React from 'react';

export default class Directions extends React.Component {

  constructor(props) {
    super(props);
    this.state={
    	renderThis:''
    }
    this.renderDirections = this.renderDirections.bind(this);
    this.renderParking = this.renderParking.bind(this);
    this.renderAccomodations = this.renderAccomodations.bind(this);
    this.selectDirections = this.selectDirections.bind(this);
    this.selectParking = this.selectParking.bind(this);
    this.selectAccomodations = this.selectAccomodations.bind(this);
  }

  selectDirections(){
  	this.setState({
  		renderThis:'directions'
  	});
  }

  selectParking(){
  	this.setState({
  		renderThis:'parking'
  	});
  }

  selectAccomodations(){
  	this.setState({
  		renderThis:'accomodations'
  	});
  }

  renderDirections(){
  	return(
  			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
  				<h1 className="titleFont">DIRECTIONS</h1>
  				<p> hfkhdfkja fhksdfh ghgkhkjhg kkgh kghkgj hkj kjshdkf kfgks dkfkj</p>
  			</div>
  		)
  }

  renderParking(){
  	return(
  			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
  				<h1 className="titleFont">PARKING</h1>
  				<p> hfkhdfkja fhksdfhkjshdkf kfgks dkfkj</p>
  			</div>
  		)
  }

  renderAccomodations(){
  	return(
  			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
  				<h1 className="titleFont">ACCOMODATIONS</h1>
  				<p> hfkhdfkja fhksdf hsfkakj kk jhkfkjakgfkjagh j hg jhhkjshdkf kfgks dkfkj</p>
  			</div>
  		)
  }

  render() {
    return (
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
      	<div onClick={this.selectDirections} className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 jumbotron option" style={{borderRadius:'0px'}}>
      		<i className="fa fa-map fa-3x" aria-hidden="true"></i>  <h4 className="titleFont">DIRECTIONS</h4>
      	</div>
      	<div onClick={this.selectParking} className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 jumbotron option" style={{borderRadius:'0px'}}>
      		<i className="fa fa-car fa-3x" aria-hidden="true"></i>  <h4 className="titleFont">PARKING</h4>
      	</div>
      	<div onClick={this.selectAccomodations} className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 jumbotron option" style={{borderRadius:'0px'}}>
      		<i className="fa fa-hotel fa-3x" aria-hidden="true"></i>  <h4 className="titleFont">ACCOMODATIONS</h4>
      	</div>
      	{this.state.renderThis === "directions" && this.renderDirections()}
      	{this.state.renderThis === "accomodations" && this.renderAccomodations()}
      	{this.state.renderThis === "parking" && this.renderParking()}
      </div>
    );
  }
}
