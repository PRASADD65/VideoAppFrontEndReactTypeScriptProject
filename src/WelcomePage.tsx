import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const WelcomePage: React.FC = () => {

    const welcomePageStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        backgroundColor: '#f0f0f0',
        fontFamily: 'Arial, sans-serif',
      };
    
      const titleStyle: React.CSSProperties = {
        fontSize: '1.5rem',
        color: 'blue',
        marginBottom: '10px',
      };
    
      const subtitleStyle: React.CSSProperties = {
        fontSize: '1.2rem',
        color: '#666',
      };

       const buttonStyle: React.CSSProperties = {
              padding: '8px',
              fontSize: '1rem',
              color: '#fff',
              backgroundColor: '#28a745',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
            };


            const containerStyle: React.CSSProperties = {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh', 
              backgroundColor: '#f0f0f0', 
            };
          
            const textStyle: React.CSSProperties = {
              textAlign: 'center', 
              color: '#FF8C42',   
              backgroundColor: '#333', 
               padding: '10px',  
               borderRadius: '5px',
               fontSize: '20px',  
               fontWeight: 'bold',
            };
                   

  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={welcomePageStyle}>
      <h1 style={titleStyle}>Welcome To 3 Tier Project Apllication with Jenkins integration</h1>
      <p style={subtitleStyle}>Please login or signup to continue</p>
      <button style={buttonStyle} onClick={() => setIsLogin(true)}>Login</button>
      <br/>
      <button style={buttonStyle} onClick={() => setIsLogin(false)}>Signup</button>
      <div style={containerStyle}>
      <p style={textStyle}>Watch your favourite Videos</p>
    </div>
      {isLogin ? <Login /> : <Signup />}
    </div>
  );
};

export default WelcomePage;
