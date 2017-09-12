import React from 'react';
import {
  BrowserRouter as Router,
  Route
 // Switch
} from 'react-router-dom';

// COMPONENTS
import PartyContainer from '../Components/PartyContainer';
import Navbar from '../Components/Navbar';
import Welcome from '../Components/Welcome';
import Footer from '../Components/Footer';
import Schedule from '../Components/Schedule';
import Directions from '../Components/Directions';
import Registry from '../Components/Registry';
import Gallery from '../Components/Gallery';

export default (
  // The high level component is the Router component
  <Router >
    <div className="container-fluid" style={{padding:'0px'}}>
      <Navbar/>
      <Route exact path="/" component={Welcome}/>
      <Route exact path="/party" component={PartyContainer}/>
      <Route exact path="/schedule" component={Schedule}/>
      <Route exact path="/directions" component={Directions}/>
      <Route exact path="/registry" component={Registry}/>
      <Route exact path="/" component={Gallery}/>
      <Footer/>
    </div>
  </Router>
  );