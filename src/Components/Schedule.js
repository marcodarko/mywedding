import React from 'react';

export default class Schedule extends React.Component {

  constructor(props) {
	super(props);
	this.state={
		schedule:[
			{
				title:"Arrival & Cocktails",time:"2:00 PM"
			},
			{
				title:"Ceremony",time:"3:00 PM"
			},
			{
				title:"Dinner",time:"4:00 PM"
			},
			{
				title:"Party!",time:"5:00 PM"
			},
			{
				title:"Good-byes",time:"8:00 PM"
			}
		]
	}
  }

  render() {
    return (
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">

      <div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
      	<h2 className='vonFontSimple gradientFont'>SCHEDULE</h2>
       <p>Saturday May 19, 2018</p>
       <hr/>
	   <img src="./images/pano.jpg" width="100%" className="rounded" alt="panorama"/>
       <p>Carlsbad beach happens to be the perfect place to gather and welcome you all to our wedding celebration!
       <br/>This is a casual gathering, and we would love to see you there. We hope you'll join us in witnessing and celebrating our commitment to one another.
       <br/>We know that we would love to see everyone we love so much celebrate with us.</p>
       <hr/>
      </div>

      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 animatedBack whiteText">
      	<table className='table'>
      		<thead>
      			<tr>
      				<td colSpan="2"><h3 className="titleFont"><span className="glyphicon glyphicon-certificate whiteText rotate" aria-hidden="true"></span> SCHEDULE</h3></td>
      			</tr>
      		</thead>
      		<tbody>

      			{this.state.schedule && this.state.schedule.map( (doc,index)=>{
					  return (<tr key={index}>
								<td>
									{doc.title}
								</td>
								<td>
									{doc.time}
								</td>
							</tr>)
  				})}
      		</tbody>
      	</table>
      	</div>

      	<div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
		  <img src="./images/pano2.jpg" width="100%" className="rounded" alt="attire"/>
        <hr/>
		<div className="padding20 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
          <h2 className='vonFontSimple gradientFont'><span className="glyphicon glyphicon-sunglasses greenText" aria-hidden="true"></span> ATTIRE</h2>

      	 <p>While our wedding is in more of a "beachy" setting, we are asking that guests come dressed in <b>beach cocktail attire</b>.
         <br/>We want to share our day with everyone and take lots of pictures, so come dressed to impress!
         <br/>A nice skirt or dress, or slacks and a button up/ light blazer will do.
         <br/><b>There will be dirt and sand all over the place so please bring shoes that are comfortable for you.</b>.</p>
		 </div>
		 <div className="padding20 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
			<h2 className='vonFontSimple gradientFont'><span className="glyphicon glyphicon-ice-lolly greenText" aria-hidden="true"></span> CHILDREN</h2>

			<p>Due to the beach setting, children are discouraged from attending.
			<br/> If you choose to bring your children they must be supervised at all times.</p>
		</div>
		<div className="padding20 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
			<h2 className='vonFontSimple gradientFont'><span className="glyphicon glyphicon-cloud greenText" aria-hidden="true"></span> WEATHER</h2>
			<p>We are expecting good weather that week 60 to 72 °F.
			<br/>We still recommend you bring something warm so you can party with us the entire time just in case.
			<br/>We definitely want you to be comfortable so come prepared for coastal weather.</p>
		</div>
		<div className="padding20 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
			<h2 className='vonFontSimple gradientFont'><i className="fa fa-car greenText" aria-hidden="true"></i> PARKING</h2>
			<p>Parking can be tough since we are in a public area near the beach.
			<br/>There are 59 public spaces next to our venue but unfortunately they cannot be reserved.
			<br/>We just want to ask you to make sure you allow yourself enough time to find parking.</p>
		</div>
      	</div>

      </div>
    );
  }
}
