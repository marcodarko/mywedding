import React from 'react';

export default class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state={
    	mypics:[
    	"./images/swing.gif",
    	"./images/img2.jpg",
      "./images/museum.gif",
      "./images/bananas.jpg",
    	"./images/img3.jpg",
      "./images/neo.gif",
    	"./images/img4.jpg",
      "./images/fair.gif",
      "./images/img1.jpg"
    	],
    	pic1:0,
    	pic2:1,
			pic3:2,
			myInt: null
    }
    this.rotate = this.rotate.bind(this);
  }

  componentDidMount(){
  	this.myInt= setInterval(this.rotate,3000);
	}
	
	componentWillUnmount(){
		clearInterval(this.myInt);
	}

  rotate(){
  	let Len = this.state.mypics.length;

  	if(this.state.pic1+1 <Len){
  		this.setState({
  			pic1: this.state.pic1+1
  		})
  	}
  	else{
  		this.setState({
  			pic1:0
  		})
  	}
  	if(this.state.pic2+1 <Len){
  		this.setState({
  			pic2: this.state.pic2+1
  		})
  	}
  	else{
  		this.setState({
  			pic2:0
  		})
  	}
  	if(this.state.pic3+1 <Len){
  		this.setState({
  			pic3: this.state.pic3+1
  		})
  	}
  	else{
  		this.setState({
  			pic3:0
  		})
  	}
  }
  

  render() {
    return (
      <div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center blueText titleFont">
			<div className="rsvp alert alert-danger alert-dismissible" role="alert">
			<button style={{fontSize:'56px'}} type="button" className="close whiteText" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h1 className="roundFont heartbeat"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span> RSVP</h1>
				<p>
					Due to a printing error names were not included in our RSVP cards,
					<br/> if you haven't already done so please add your name(s) to it before sending it.
				</p>
				<p>
					If you already sent your card but didn't get this message in time, please text or 
					<b><a target='_blank' rel="noopener noreferrer" href='mailto:conorandmarco@gmail.com'> E-mail us.</a></b>
					<br/>
					<b>Thank you!</b>
				</p>
      </div>
        <hr/>
				<h2>GALLERY</h2>
				<hr/>
      </div>
      	<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
      		<img src={this.state.mypics[this.state.pic1]} alt="gallery" className="galleryItem partyPhoto"/>
      	</div>
      	<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
      		<img src={this.state.mypics[this.state.pic2]} alt="gallery" className="galleryItem partyPhoto"/>
      	</div>
      	<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
      		<img src={this.state.mypics[this.state.pic3]} alt="gallery" className="galleryItem partyPhoto"/>
      	</div>
      </div>
    );
  }
}
