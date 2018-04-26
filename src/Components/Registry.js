import React from 'react';

export default class Registry extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      chosen: false
    }
    this.thank = this.thank.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  thank(){
    return(
      <div className=" padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
        <hr/>
        <h1 className="waterFont jello-horizontal bold">Thank You!</h1>
        <hr/>
      </div>
      )
  }

  handleClick(){
    this.setState({
      chosen:true
    });
  }

  render() {
    return (
      <div className=" padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
      	<h2 className='vonFontSimple gradientFont'>REGISTRY</h2>
        <img src="./images/registry.png" alt="registry" className="rounded"/>
        <p>We are so thankful for any and everything you all would like to contribute. <br/>These registries are filled with things to start life in a new home in the near future. <br/>We would also be forever grateful for a contribution to our honeymoon as well!</p>
        <hr/>
        {this.chosen === true && this.thank()}
        <p><span className="glyphicon glyphicon-exclamation-sign greenText" aria-hidden="true"></span> You can search for our registry using our names: <b>Marco Cano</b> or <b>Conor Foley</b>.</p>
        <div className="well center-text animatedBack whiteText rounded col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
        <a  rel="noopener noreferrer" target="_blank" href="https://www.crateandbarrel.com/gift-registry/marco-cano-and-conor-foley/r5788984"><img src="./images/crate.jpg" className="roundPhoto jello-horizontal" alt="CrateAndBarrel"/></a>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
        <a  rel="noopener noreferrer" target="_blank" href="http://www.honeyfund.com/wedding/ConorAndMarco"><img src="./images/honeyfund.jpg" className="roundPhoto jello-horizontal" alt="CrateAndBarrel"/></a>
        </div>

      </div>
      </div>
    );
  }
}
