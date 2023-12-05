import React from 'react';
import './App.css';
import Home from './pages';
import {RoadMapPage} from './pages/roadmap';
import { SignUpPage, LogInPage } from './pages/signup';
import AboutUsPage from './pages/aboutus';
import Instances from './components/Instances';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ContactsPage } from './pages/contact';
import { PublicationsPage } from './pages/publications';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signup" element={<SignUpPage />} exact />
        <Route path="/login" element={<LogInPage />} exact />
        <Route path="/about" element={<AboutUsPage />} exact />
          {/* <Route path="/about/meet-the-team" element={<MeetTheTeamPage />} exact /> */}
        {/* </Route> */}
        <Route path="/roadmap" element={<RoadMapPage />} exact />
        <Route path="/publications" element={<PublicationsPage />} exact />
        <Route path="/contact" element={<ContactsPage />} exact />
        {/* <Route path="/instances" element={<InstancesPage />} exact /> */}
        <Route path="/instances" element={<Instances />} exact />
      </Routes>
    </Router>
  );
}

export default App;
