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
      	<h2 className="titleFont blueText bold">REGISTRY</h2>
        <p>We are so thankful for any and everything you all would like to contribute. <br/>These registries are filled with things to start life in a new home in the near future. <br/>We would also be forever grateful for a contribution to our honeymoon instead!</p>
        <hr/>
        {this.chosen === true && this.thank()}
        <div className="well animatedBack whiteText rounded col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
            
            <a target='_blank' rel="noopener noreferrer" href="https://www.bestbuy.com/">
            <img onClick={this.handleClick} className="eightyWidth roundPic" src="http://is3.mzstatic.com/image/thumb/Purple118/v4/db/ad/2c/dbad2ced-1f5b-f934-8229-a5daae39e762/source/175x175bb.jpg" alt="bestbuy"/>
            </a>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
          
            <a target='_blank' rel="noopener noreferrer" href="https://www.paypal.com/">
            <img onClick={this.handleClick} className="eightyWidth roundPic" src="https://cdn2.iconfinder.com/data/icons/metro-ui-icon-set/512/Paypal_alt.png" alt="bestbuy"/>
            </a>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
         
            <a target='_blank' rel="noopener noreferrer" href="https://www.venmo.com/">
            <img onClick={this.handleClick} className="eightyWidth roundPic" src="http://is5.mzstatic.com/image/thumb/Purple118/v4/02/54/e7/0254e722-e44e-93f4-f4c7-35ab3accfb2c/source/175x175bb.jpg" alt="bestbuy"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
