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
        <div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <hr/>
          <h2 className="titleFont blueText">How We Met</h2>
          <p>A tale as old as time, boy downloads Tinder..boy swipes right...other boy swipes right too...Ok, just kidding! 
          <br/>But we knew instantly that we were a match. We had similar sense of humor and we are both kinda geeky.</p>
          <p></p>
          
          <hr/>
        </div>
      
          <h2 className="titleFont">Parents</h2>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6">
          <Profile photo={'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png'} name={'Maria Cano'} roleAt={'Mother'}/>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6">
            <Profile photo={'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png'} name={'Eric Alvarado'} roleAt={'Brother'}/>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6">
          <Profile photo={'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png'} name={'Morgan Foley'} roleAt={'Father'}/>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6">
            <Profile photo={'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png'} name={'Sandra Foley'} roleAt={'Mother'}/>
          </div>
               
        <h2 className="titleFont bold">Best People</h2>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <Profile photo={'https://scontent.fsan1-1.fna.fbcdn.net/v/t1.0-9/10422932_10152258305315060_6169159934274929934_n.jpg?oh=061ee58aeb440920ed2209f62cab5844&oe=5A2F4337'} name={'Wendy Pulido'} roleAt={'Best Groomsmaid'}/>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <Profile photo={'https://scontent.fsan1-1.fna.fbcdn.net/v/t31.0-8/15110347_10104388298581294_6654612921871871683_o.jpg?oh=9c5535152dcf882816c1be467e77d5e7&oe=5A236FF5'} name={'Sarah Hutmacher'} roleAt={'Best Groomsmaid'}/>
        </div>
      </div>
    );
  }
}
