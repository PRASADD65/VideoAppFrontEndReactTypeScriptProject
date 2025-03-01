// src/components/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import RecordList from './RecordList';

const HomePage: React.FC = () => {
  const linkStyle = {
    fontSize: '24px', 
    margin: '10px',  
    display: 'block', 
    textDecoration: 'none',
    color: 'blue', 
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <a  style={linkStyle}>link</a>
    </div>
  );
};

export default HomePage;