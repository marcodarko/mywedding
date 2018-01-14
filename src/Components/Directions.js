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
  			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center padding20">
  				<h1 className="titleFont">DIRECTIONS</h1>
  				<hr/>
  				<h2>Pelican Point</h2>
				<h3><i className="fa fa-map-marker greenText" aria-hidden="true"></i> 6311 County Hwy S21, Carlsbad, CA 92008</h3>
				<hr/>
  				<h4>Coming from San Diego</h4>
  				
  					<p><i className="fa fa-map-marker greenText" aria-hidden="true"></i> Get on I-5 North</p>
  					<p><i className="fa fa-map-marker greenText" aria-hidden="true"></i> Follow I-5 North to <b>Palomar Airport Road</b></p>
  					<p><i className="fa fa-map-marker greenText" aria-hidden="true"></i> Take exit <b>47</b> from I-5 North</p>
  					<p><i className="fa fa-map-marker greenText" aria-hidden="true"></i> Keep right to continue onto <b>Carlsbad Blvd</b></p>
  					<p><i className="fa fa-map-pin greenText" aria-hidden="true"></i> <b>Pelican Point</b> will be on your right side</p>
  				
  				<hr/>
  				<h4>Coming from Los Angeles</h4>
  				
  					<p><i className="fa fa-map-marker greenText" aria-hidden="true"></i> Get on I-5 South</p>
  					<p><i className="fa fa-map-marker greenText" aria-hidden="true"></i> Follow I-5 South to <b>Palomar Airport Road</b></p>
  					<p><i className="fa fa-map-marker greenText" aria-hidden="true"></i> Take exit <b>47</b> from I-5 South</p>
  					<p><i className="fa fa-map-marker greenText" aria-hidden="true"></i> Keep right to continue onto <b>Carlsbad Blvd</b></p>
  					<p><i className="fa fa-map-pin greenText" aria-hidden="true"></i> <b>Pelican Point</b> will be on your right side</p>
  				
  				<hr/>
  				<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d48864.566384398946!2d-117.33240446572411!3d33.10877652134614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan+Diego%2C+CA!3m2!1d32.715738!2d-117.1610838!4m5!1s0x80dc72dda89e0561%3A0x93e06168b651b6a3!2sPelican+Point%2C+6311+County+Hwy+S21%2C+Carlsbad%2C+CA+92008!3m2!1d33.1126248!2d-117.3231958!5e0!3m2!1sen!2sus!4v1502997909580" title='map' width="80%" height="400" frameBorder="0" allowFullScreen></iframe>
  				<hr/>
  				<div className="well backBlue whiteText rounded">
  					<h2><i className="fa fa-exclamation-circle greenText" aria-hidden="true"></i> About the Venue</h2>
  					<hr/>
  					<p>For questions about the venue please refer to the <b><a href='https://sdnorthcoastinterp.wordpress.com/pelican-point/' target='_blank' rel="noopener noreferrer">Pelican Point Website</a></b>.</p>
  				 	<p>Pelican Point is an outdoor venue located right by the beach. Don't worry tho, you will not be in the sand! Please be sure to bring sunscreen as it may be sunny for a bit until the beautiful sunset.</p>
  				</div>
  			</div>
  		)
  }

  renderParking(){
  	return(
  			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center padding20">
  				<h1 className="titleFont">PARKING</h1>
  				<hr/>
  				<table className='table'>
  				<thead>
  					<tr>
  						<td colSpan='2'>
  							<p><i className="fa fa-exclamation-circle greenText" aria-hidden="true"></i> We higly encourage you to carpool, parking can be tough near the beach</p>
  						</td>
  					</tr>
  				</thead>
  				<tbody>
	  				<tr>
	  					<td className="text-right">
	  						<i className="fa fa-car fa-2x greenText" aria-hidden="true"></i>
	  					</td>
	  					<td className='text-left'>
	  						<span style={{fontSize:'1.3em'}} className="greenText">Street Parking</span>
	  					</td>
	  				</tr>
	  				<tr>
	  					<td className="text-right">
	  						<i className="fa fa-car fa-2x blueText" aria-hidden="true"></i>
	  					</td>
	  					<td className='text-left'>
	  						<span style={{fontSize:'1.3em'}} className="blueText">Limited Parking (TBA)</span>
	  					</td>
	  				</tr>
  				</tbody>
  				</table>
				<hr/>
				<img src='./images/mapParking.jpg' alt='parking map' className='rounded fullWidth'/><br/>
  			</div>
  		)
  }

  renderAccomodations(){
  	return(
  			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center padding20">
  				<h1 className="titleFont">ACCOMODATIONS</h1>
  				<hr/>
            
            <p>There are tons of Hotels in the area and a few just across the street from our venue!</p>
            
             <div className="backBlue col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center padding20 whiteText"> 
             <h2><i className="fa fa-bed greenText" aria-hidden="true"></i> Stay in Carlsbad</h2>
			 <img src="./images/cape.jpg" width="70%" alt='cape rey carlsbad' className="rounded"/>
            <hr/> 
            <a target='_blank' rel="noopener noreferrer" href="http://www.carlsbadseapointe.com/"><span className="glyphicon glyphicon-bed greenText" aria-hidden="true"></span>   Carlsbad Seapointe</a>
            <br/>
            <br/>
            <a target='_blank' rel="noopener noreferrer" href="http://hiltongardeninn3.hilton.com/en/hotels/california/hilton-garden-inn-carlsbad-beach-SANCHGI/index.html"><span className="glyphicon glyphicon-bed greenText" aria-hidden="true"></span>   Hilton Garden Inn Carlsbad Beach</a>
            <br/>
            <br/>
            <a target='_blank' rel="noopener noreferrer" href="https://www.caperey.com/"> <span className="glyphicon glyphicon-bed greenText" aria-hidden="true"></span>  Cape Rey Carlsbad</a>
            </div>
           
          <hr/>
  				<div className="well backBlue whiteText rounded">
  				 	<h2><i className="fa fa-sun-o greenText" aria-hidden="true"></i> Camp at the <em>South Carlsbad State Beach</em></h2>
					   <img src="./images/camp.jpg" width="70%" alt='camp in carlsbad' className="rounded"/>
  				 	<hr/>
            <p><b>We are exploring rates and options, if you definitely want to camp here let us know!</b></p>
  				 	<p>For General information on the <b>South Carlsbad State Beach</b> please visit their <b><a href='http://www.parks.ca.gov/?page_id=660' target='_blank' rel="noopener noreferrer"> Website</a></b></p>
  				    <p>You may also call <a target='_blank' rel="noopener noreferrer" href='tel:7604383143'><i className="fa fa-phone greenText" aria-hidden="true"></i> (760) 438-3143</a></p>
  					<p>To make a reservation online you can visit <b><a href='https://www.reservecalifornia.com/CaliforniaWebHome/' target='_blank' rel="noopener noreferrer"> Reserve California</a></b></p>
  				</div>
  			</div>
  		)
  }

  render() {
    return (
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
      	<div onClick={this.selectDirections} className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 jumbotron option" style={{borderRadius:'0px'}}>
      		<i className="fa fa-map fa-3x" aria-hidden="true"></i>  <h5 className="titleFont bold">DIRECTIONS</h5>
      	</div>
      	<div onClick={this.selectParking} className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 jumbotron option" style={{borderRadius:'0px'}}>
      		<i className="fa fa-car fa-3x" aria-hidden="true"></i>  <h5 className="titleFont bold">PARKING</h5>
      	</div>
      	<div onClick={this.selectAccomodations} className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 jumbotron option" style={{borderRadius:'0px'}}>
      		<i className="fa fa-hotel fa-3x" aria-hidden="true"></i>  <h5 className="titleFont bold">ACCOMODATIONS</h5>
      	</div>
      	{this.state.renderThis === "directions" && this.renderDirections()}
      	{this.state.renderThis === "accomodations" && this.renderAccomodations()}
      	{this.state.renderThis === "parking" && this.renderParking()}
      	{this.state.renderThis === "" &&
      	<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center padding20">
		  	<img src="./images/initials.png" alt='CandM' className="rounded"/>
      		<h2 className="titleFont bold">Thank you for joining us on our special day!</h2>
      		<hr/>
      		<p>Click on the options above for Directions and Parking Information</p>
      	</div>}
      </div>
    );
  }
}
