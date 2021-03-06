import React from 'react';
import Hotel from './Hotel';

export default class Directions extends React.Component {

  constructor(props) {
    super(props);
    this.state={
		renderThis:'',
		hotels:[
			{
				name:'Carlsbad SeaPointe Resort',
				link:'http://www.carlsbadseapointe.com/',
				photo:'./images/hotel1.jpg',
				price:'$$',
				location:'0.2 Miles',
				stars:'4'
			},
			{
				name:'Hilton Garden Inn',
				link:'http://hiltongardeninn3.hilton.com/en/hotels/california/hilton-garden-inn-carlsbad-beach-SANCHGI/index.html',
				photo:'./images/hotel2.jpg',
				price:'$$',
				location:'0.6 Miles',
				stars:'4'
			},
			{
				name:'Cape Rey Carlsbad Hilton',
				link:'https://www.caperey.com/',
				photo:'./images/hotel3.jpg',
				price:'$$',
				location:'2.3 Miles',
				stars:'4'
			}
		]
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
  				<h1 className='vonFontSimple gradientFont'>DIRECTIONS</h1>
  				<hr/>
  				<h2 className='vonFontSimple gradientFont'>Pelican Point</h2>
  				<a className="btn btn-primary whiteText" style={{margin:'20px', color: 'white'}} rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/6311+County+Hwy+S21,+Carlsbad,+CA+92008/@33.1126168,-117.3254062,17z/data=!3m1!4b1!4m5!3m4!1s0x80dc72dd62b640ef:0xad89bc3b8e9d951b!8m2!3d33.112616!4d-117.323212"><i className="fa fa-google" aria-hidden="true"></i> Google Maps</a>
  				<br/>
          <a className="btn btn-primary whiteText" style={{margin:'20px'}} rel="noopener noreferrer" href="http://maps.apple.com/?daddr=33.1126,-117.3234"><i className="fa fa-apple" aria-hidden="true"></i> Apple Maps</a>
          <h3 className="greenText"><i className="fa fa-map-marker greenText" aria-hidden="true"></i> 6311 County Hwy S21, Carlsbad, CA 92008</h3>
  				<div className="alert alert-warning" role="alert">
            <p>
              <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> If your navigation device doesn't take you to the right place, you may also search for the <b>Carlsbad SeaPointe Resort</b>. <br/>Our venue is located right across the street towards the ocean. 
            </p>
          </div>
          <hr/>
  				<h4 className='vonFontSimple gradientFont'>Coming from San Diego</h4>

  					<p><i className="fa fa-map-marker greenText" aria-hidden="true"></i> Get on I-5 North</p>
  					<p><i className="fa fa-map-marker greenText" aria-hidden="true"></i> Follow I-5 North to <b>Palomar Airport Road</b></p>
  					<p><i className="fa fa-map-marker greenText" aria-hidden="true"></i> Take exit <b>47</b> from I-5 North</p>
  					<p><i className="fa fa-map-marker greenText" aria-hidden="true"></i> Keep right to continue onto <b>Carlsbad Blvd</b></p>
  					<p><i className="fa fa-map-pin greenText" aria-hidden="true"></i> <b>Pelican Point</b> will be on your right side</p>

  				<hr/>
  				<h4 className='vonFontSimple gradientFont'>Coming from Los Angeles</h4>

  					<p><i className="fa fa-map-marker greenText" aria-hidden="true"></i> Get on I-5 South</p>
  					<p><i className="fa fa-map-marker greenText" aria-hidden="true"></i> Follow I-5 South to <b>Palomar Airport Road</b></p>
  					<p><i className="fa fa-map-marker greenText" aria-hidden="true"></i> Take exit <b>47</b> from I-5 South</p>
  					<p><i className="fa fa-map-marker greenText" aria-hidden="true"></i> Keep right to continue onto <b>Carlsbad Blvd</b></p>
  					<p><i className="fa fa-map-pin greenText" aria-hidden="true"></i> <b>Pelican Point</b> will be on your right side</p>

  				<hr/>
  				<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d48864.566384398946!2d-117.33240446572411!3d33.10877652134614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan+Diego%2C+CA!3m2!1d32.715738!2d-117.1610838!4m5!1s0x80dc72dda89e0561%3A0x93e06168b651b6a3!2sPelican+Point%2C+6311+County+Hwy+S21%2C+Carlsbad%2C+CA+92008!3m2!1d33.1126248!2d-117.3231958!5e0!3m2!1sen!2sus!4v1502997909580" title='map' width="80%" height="400" frameBorder="0" allowFullScreen></iframe>
  				<hr/>
  				<div className="well backBlue whiteText rounded">
  					<h2 className='vonFontSimple gradientFont'><i className="fa fa-exclamation-circle greenText" aria-hidden="true"></i> About the Venue</h2>
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
  				<h1 className='vonFontSimple gradientFont'>PARKING</h1>
  				<hr/>
  				<table className='table'>
  				<thead>
  					<tr>
  						<td colSpan='2'>
  							<p><i className="fa fa-exclamation-circle greenText" aria-hidden="true"></i> There are <b>59 public spaces</b> next to our venue.
							  <br/>These spaces cannot be reserved and they're open to public so we ask you to allow yourself enough time to find parking.
							  <br/>Other parking options are:</p>
							  <ul className="listGreen">
								  <li>Uber from Carlsbad Outlet Mall to Pelican Point, Carlsbad State Beach</li>
								  <li>Public Parking from Hotels across the street (SeaPointe, Cape Rey)</li>
							  </ul>
  						</td>
  					</tr>
  				</thead>
  				<tbody>
	  				<tr>
	  					<td className="text-right">
	  						<i className="fa fa-car fa-2x greenText" aria-hidden="true"></i>
	  					</td>
	  					<td className='text-left'>
	  						<span style={{fontSize:'1.3em'}} className="greenText">Public Parking</span>
	  					</td>
	  				</tr>
	  				<tr>
	  					<td className="text-right">
	  						<i className="fa fa-car fa-2x blueText" aria-hidden="true"></i>
	  					</td>
	  					<td className='text-left'>
	  						<span style={{fontSize:'1.3em'}} className="blueText">Reserved Parking (Wedding Party Only)</span>
	  					</td>
	  				</tr>
  				</tbody>
  				</table>
				<hr/>
				<img src='./images/mapParking.jpg' alt='parking map' className='rounded fullWidth'/><br/>
				<hr/>
				<h2 className='vonFontSimple gradientFont'>See You There!</h2>
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<img src='./images/lifeguard.jpg' alt='lifeguard' className='roundPhoto'/>
				</div>
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<img src='./images/stateBeach.jpg' alt='sign' className='roundPhoto'/>
				</div>

  			</div>
  		)
  }

  renderAccomodations(){
  	return(
  			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center padding20 rounded">
  				<h1 className='vonFontSimple gradientFont'>ACCOMODATIONS</h1>
  				<hr/>

            <p>There are tons of Hotels in the area and a few just across the street from our venue!</p>

             <div className="backBlue col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center padding20 whiteText">
             <h2 className='vonFontSimple gradientFont'><i className="fa fa-bed greenText" aria-hidden="true"></i> Stay in Carlsbad</h2>
            <hr/>
            {this.state.hotels && this.state.hotels.map( (doc,index)=>{
				return <Hotel name={doc.name} stars={doc.stars} location={doc.location} price={doc.price} photo={doc.photo} link={doc.link} key={index}/>
			})}
			</div>

          <hr/>
  				<div className="well backBlue whiteText rounded">
  				 	<h2 className='vonFontSimple gradientFont'><i className="fa fa-sun-o greenText" aria-hidden="true"></i> Camp at the <em>South Carlsbad State Beach</em></h2>
					   <img src="./images/camp.jpg" width="70%" alt='camp in carlsbad' className="rounded"/>
  				 	<hr/>
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
      		<h2 className='titleFont gradientFont'>Thank you for joining us on our special day!</h2>
      		<hr/>
      		<p>Click on the options above for Directions and Parking Information</p>
      	</div>}
      </div>
    );
  }
}
