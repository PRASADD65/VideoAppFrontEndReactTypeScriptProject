import React, { useState } from 'react';
import axios from 'axios';
import RecordList from './RecordList';
import WelcomePage from './WelcomePage';
import VideoSearch from './VideoSearch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/videosearch" element={<VideoSearch />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;