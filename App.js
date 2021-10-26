import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Careers from './components/pages/Careers';
import ContactUs from './components/pages/ContactUs';
import AvailOurServices from './components/pages/AvailOurServices';
import HomeCare from './components/pages/HomeCare';
import PersonalCare from './components/pages/PersonalCare';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/AboutUs' component={AboutUs} />
        <Route path='/services' component={Services} />
        <Route path='/careers' component={Careers} />
        <Route path='/contactUs' component={ContactUs} />
        <Route path='/availOurServices' component={AvailOurServices} />
        <Route path='/HomeCare' component={HomeCare} />
        <Route path='/PersonalCare' component={PersonalCare} />
      </Switch>
    </Router>
  );
}

export default App;
