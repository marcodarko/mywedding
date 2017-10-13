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
       <p>Carlsbad beach happens to be the perfect place to gather and welcome you all to our wedding celebration! 
       <br/>This is a casual gathering, and we would love to see you there. We hope you'll join us in witnessing and celebrating our commitment to one another. 
       <br/>We know that we would love to see everyone we love so much celebrate with us.</p>
       <hr/>
      </div>

      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 animatedBack whiteText">
      	<table className='table'>
      		<thead>
      			<tr>
      				<td colSpan="2"><h3 className="titleFont"><span className="glyphicon glyphicon-cog whiteText rotate" aria-hidden="true"></span> SCHEDULE</h3></td>
      			</tr>
      		</thead>
      		<tbody>
      			<tr>
      				<td>
      					TBD
      				</td>
      				<td>
      					TBD
      				</td>
      			</tr>
      			<tr>
      				<td>
      					TBD
      				</td>
      				<td>
      					TBD
      				</td>
      			</tr>
      			<tr>
      				<td>
      					TBD
      				</td>
      				<td>
      					TBD
      				</td>
      			</tr>
      			<tr>
      				<td>
      	         TBD
      				</td>
      				<td>
      				TBD
      				</td>
      			</tr>
      		</tbody>
      	</table>
      	</div>

      	<div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
        <h1 className='titleFont'>ADDITIONAL INFORMATION</h1>
        <hr/>
          <h2 className='titleFont bold'><span className="glyphicon glyphicon-sunglasses greenText" aria-hidden="true"></span> ATTIRE</h2>
      	 <p>While our wedding is in more of a "beachy" setting, we are asking that guests come dressed in cocktail attire. 
         <br/>We want to share our day with everyone and take lots of pictures, so come dressed to impress! 
         <br/>A nice skirt or dress, or slacks and a button up/ light blazer will do. 
         <br/>We definitely want you to be comfortable so come prepared for coastal weather.</p>
         <hr/>
      	</div>

      </div>
    );
  }
}
