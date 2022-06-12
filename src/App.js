
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
import ProjectPage from './Pages/ProjectPage';
import FeauturedProject from './Components/Projects/FeaturedProject';
import ViewProject from './Components/Projects/ViewProject';
import ProjectAlbum from './Components/Projects/ProjectAlbum';

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
        <Route path="/project" exact={true}>
          <ScrollToTop />
          <ProjectPage />
        </Route>
        <Route path="/feautured" exact={true}>
          <ScrollToTop />
          <FeauturedProject />
        </Route>
        <Route path="/viewproject" exact={true}>
          <ScrollToTop />
          <ViewProject />
        </Route>
        <Route path="/album" exact={true}>
          <ScrollToTop />
          <ProjectAlbum />
        </Route>
      </Switch>
    </Router>  
    </div>
  );
}

export default App;



// import './App.css';

// import React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

// //Pages
// import LandingPage from './Pages/LandingPage';
// import AboutPage from './Pages/AboutPage';
// import Header from './Components/Header.component';
// import ScrollToTop from './Components/ScrollToTop';
// import ContactUsPage from './Pages/ContactUsPage';
// import FaqPage from './Pages/FaqPage';
// import ServicesPage from './Pages/ServicesPage';
// import CommunityPage from './Pages/CommunityPage';
// import BlogPage from './Pages/BlogPage';

// function App() {
//   return (
//     <div className="App">
//     <BrowserRouter>
//     <ScrollToTop />
//       <Routes>

//         <Route path="/" element={<LandingPage />} />
        
//         <Route path="/about" element={ <AboutPage />} />

//         <Route path="/contact-us" element={<ContactUsPage />} />

//         <Route path="/faqs" element={<FaqPage />} />

//         <Route path="/services" element={<ServicesPage />} />

//         <Route path="/community" element={<CommunityPage />} />

//         <Route path="/blog" element={<BlogPage />} />

//       </Routes>
//     </BrowserRouter>  
//     </div>
//   );
// }

// export default App;

