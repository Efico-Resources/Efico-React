
import './App.css';

import { BrowserRouter, Routes, Route, } from "react-router-dom";
// import your route components too

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
    <BrowserRouter>
    <Header />

      <Routes>
        
        <Route path="/" element={<LandingPage />}>
        </Route>
        <Route path="/about" element={<AboutPage />}>
        </Route>
        <Route path="/contact-us"element={<ContactUsPage />}>
        </Route>
        <Route path="/faqs" element={<FaqPage />}>
        </Route>
        <Route path="/services" element={<ServicesPage />}>
        </Route>
        <Route path="/community" element={<CommunityPage />}>
        </Route>
        <Route path="/blog" element={<BlogPage />}>
        </Route>

      </Routes>
      <ScrollToTop />
    </BrowserRouter>  
    </div>
  );
}

export default App;