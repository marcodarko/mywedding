import React from 'react';

export default class Schedule extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">

      <div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
      	<h2 className='titleFont bold'>SCHEDULE</h2>
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
      			<tr>
      				<td>
      					Start
      				</td>
      				<td>
      					2:00 PM
      				</td>
      			</tr>
      			<tr>
      				<td>
      					Ceremony
      				</td>
      				<td>
						3:00 PM
      				</td>
      			</tr>
      			<tr>
      				<td>
      					Food
      				</td>
      				<td>
      					5:00 PM
      				</td>
      			</tr>
      			<tr>
      				<td>
						End
      				</td>
      				<td>
						10:00 PM
      				</td>
      			</tr>
      		</tbody>
      	</table>
      	</div>

      	<div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
		  <img src="./images/pano2.jpg" width="100%" className="rounded" alt="attire"/>
        <hr/>
          <h2 className='titleFont bold'><span className="glyphicon glyphicon-sunglasses greenText" aria-hidden="true"></span> ATTIRE</h2>
		 
      	 <p>While our wedding is in more of a "beachy" setting, we are asking that guests come dressed in cocktail attire. 
         <br/>We want to share our day with everyone and take lots of pictures, so come dressed to impress! 
         <br/>A nice skirt or dress, or slacks and a button up/ light blazer will do. 
         <br/>We definitely want you to be comfortable so come prepared for coastal weather.</p>
         <hr/>
		 <h2 className='titleFont bold'><span className="glyphicon glyphicon-ice-lolly greenText" aria-hidden="true"></span> CHILDREN</h2>
		 <p>Due to the beach setting, children are discouraged from attending.
		<br/> If you choose to bring your children they must be supervised at all times.</p>
		<hr/>
      	</div>

      </div>
    );
  }
}
