
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Pages
import LandingPage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import Header from './Components/Header.component';
import ScrollToTop from './Components/ScrollToTop';
import ContactUsPage from './Pages/ContactUsPage';
import FaqPage from './Pages/FaqPage';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Header}>
        <ScrollToTop />
          <LandingPage />
        </Route>
        <Route path="/about" exact={true}>
          <ScrollToTop />
          <AboutPage />
        </Route>
        <Route path="/contact-us" exact={true}>
          <ScrollToTop />
          <ContactUsPage />
        </Route>
        <Route path="/faqs" exact={true}>
          <ScrollToTop />
          <FaqPage />
        </Route>
      </Switch>
    </Router>  
    </div>
  );
}

export default App;
