import React from 'react';
import Profile from './Profile';

export default class MainWrapper extends React.Component {


  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 backWhite blueText text-center" style={{padding:'20px'}}>
      	<h1 className="titleFont bold">The Grooms</h1>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <Profile photo={'./images/marcomain.jpg'} name={'Marco Alvarado'} roleAt={'Groom'}/>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <Profile photo={'./images/conormain.jpg'} name={'Conor Foley'} roleAt={'Groom'}/>
        </div>
        <div className="noMargin noPadding col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <img className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 noMargin noPadding" src="./images/us.jpg" alt="engagement"/>
            <img className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 noMargin noPadding" src="./images/tvrory.jpg" alt="tv and rory"/>
            <img className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 noMargin noPadding" src="./images/destiny.jpg" alt="destiny"/>
            <img className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 noMargin noPadding" src="./images/uncharted.jpg" alt="uncharted"/>
          </div>
        <div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <hr/>
          <h2 className="titleFont blueText">How We Met</h2>
          <img src="./images/match.jpg" height="300px" className="roundPic partyPhoto" alt="illustration of us"/>
          <br/>
          <p>A tale as old as time, boy downloads Tinder..boy swipes right...other boy swipes right too...
          <br/>We knew instantly that we were a match  and the rest is herstory...</p>
          <p></p>
          
          <hr/>
        </div>
          
          <br/>
          <div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h2 className="titleFont">Family</h2>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6">
          <Profile  name={'Maria Cano'} roleAt={'Mother'}/>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6">
            <Profile  name={'Eric Alvarado'} roleAt={'Brother'}/>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6">
          <Profile  name={'Morgan Foley'} roleAt={'Father'}/>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6">
            <Profile  name={'Sandra Foley'} roleAt={'Mother'}/>
          </div>
        </div>
        <div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">     
        <h2 className="titleFont bold">Best People</h2>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <Profile photo={'./images/wendy.jpg'} name={'Wendy Pulido'} roleAt={'Best Groomsmaid'}/>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <Profile photo={'./images/sara.jpg'} name={'Sarah Hutmacher'} roleAt={'Best Groomsmaid'}/>
        </div>
        </div>
      </div>
    );
  }
}
