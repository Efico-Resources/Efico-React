
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
import ServicesPage from './Pages/ServicesPage';
import CommunityPage from './Pages/CommunityPage';
import BlogPage from './Pages/BlogPage';

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
        <Route path="/services" exact={true}>
          <ScrollToTop />
          <ServicesPage />
        </Route>
        <Route path="/community" exact={true}>
          <ScrollToTop />
          <CommunityPage />
        </Route>
        <Route path="/blog" exact={true}>
          <ScrollToTop />
          <BlogPage />
        </Route>
      </Switch>
    </Router>  
    </div>
  );
}

export default App;
