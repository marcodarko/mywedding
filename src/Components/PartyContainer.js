import React from 'react';
import Profile from './Profile';

export default class MainWrapper extends React.Component {


  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 backWhite blueText text-center" style={{padding:'20px'}}>
      	<h1 className="titleFont">The Grooms</h1>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <Profile photo={'https://scontent.fsan1-1.fna.fbcdn.net/v/t1.0-9/20374571_10155584642427460_7352643004957730023_n.jpg?oh=ad61eeeab83453c776f9a8f5daf3a15e&oe=5A30E562'} name={'Marco Alvarado'} roleAt={'Groom'}/>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <Profile photo={'https://scontent.fsan1-1.fna.fbcdn.net/v/t1.0-9/530290_568920254056_1642469231_n.jpg?oh=8ef469db5e9245bbc6f9067d9e898392&oe=5A312945'} name={'Conor Foley'} roleAt={'Groom'}/>
        </div>
          <h2 className="titleFont">Parents</h2>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6">
          <Profile photo={'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png'} name={'Maria Cano'} roleAt={'Mother'}/>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6">
            <Profile photo={'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png'} name={'TV'} roleAt={'Dog'}/>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6">
          <Profile photo={'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png'} name={'Morgan Foley'} roleAt={'Father'}/>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6">
            <Profile photo={'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png'} name={'Sandra Foley'} roleAt={'Mother'}/>
          </div>     
        <h2 className="titleFont">Best People</h2>
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
