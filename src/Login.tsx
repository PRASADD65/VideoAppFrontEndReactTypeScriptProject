import React, { useState } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';



const Login: React.FC = () => {
    const loginPageStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        backgroundColor: '#f0f0f0',
        fontFamily: 'Arial, sans-serif',
      };
    
      const formStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      };
    
      const inputStyle: React.CSSProperties = {
        marginBottom: '15px',
        padding: '10px',
        fontSize: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
      };
    
      const buttonStyle: React.CSSProperties = {
        padding: '10px',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      };
      const subtitleStyle: React.CSSProperties = {
              fontSize: '1.2rem',
              color: '#666',
              textAlign: 'center',
            };

  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://18.60.254.193:7070/api/login', {
        firstName,
        password,
      });
      if(response.data==="successful")
      {
        navigate('/videosearch');
      }
      else
      {
        alert(response.data);
      }
    } catch (error) {
      alert('Login failed : Something Went Wrong !');
    }
    finally
    {
      setFirstName("");
      setPassword("");
      setLoading(false);
    }
  };
  const handleSubmitnested = (event:React.FormEvent)=>
    {
      event.preventDefault();
    }

  return (
    <div style={loginPageStyle}>
        <form onSubmit={handleSubmitnested} style={formStyle}>
      <h2 style={subtitleStyle}>Login</h2>
      <input style={inputStyle}
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required/>
      <input style={inputStyle}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      required/>
      <button style={buttonStyle} onClick={handleLogin} disabled={loading}>Login</button>
      {loading && (
  <div style={{ textAlign: 'center' }}>
    <ClipLoader color="#36d7b7" size={50} />
  </div>
)}
      </form>
    </div>
  );
};

export default Login;
