import React from 'react';

export default class Profile extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center" style={{padding:'10px'}}>
      	<img src={this.props.photo} alt="person" className="roundPhoto"/>
      	<h2 className='cookiesFont'>{this.props.name}</h2>
      	<p>{this.props.roleAt}</p>
      </div>
    );
  }
}
