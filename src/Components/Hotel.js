import React from 'react';

export default class Hotel extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center backBlue hotel whiteText" style={{padding:'10px'}}>
      	{this.props.photo && <a target='_blank' rel="noopener noreferrer" href={this.props.link}><img src={this.props.photo} alt="Hotel" width="100%" className="roundPicReg"/></a>}
      	<a target='_blank' rel="noopener noreferrer" href={this.props.link}><h2 className='cookiesFont'>{this.props.name}</h2></a>
        <p>{this.props.stars} Stars</p>
      	<p>Price: {this.props.price}</p>
        <p>Distance from Venue: {this.props.location}</p>
        <a target='_blank' rel="noopener noreferrer" className="btn btn-primary" href={this.props.link}>More Info</a>
        <hr/>
      </div>
    );
  }
}
