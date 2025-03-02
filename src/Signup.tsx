import React, { useState } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const Signup: React.FC = () => {
    const signupPageStyle: React.CSSProperties = {
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
        backgroundColor: '#28a745',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      };

       const subtitleStyle: React.CSSProperties = {
                    fontSize: '1.2rem',
                    color: '#666',
                    textAlign: 'center',
                  };

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmitnested = (event:React.FormEvent)=>
    {
      event.preventDefault();
    }

  const handleSignup = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/api/signup', {
        firstName,
        lastName,
        password,
      });
      alert(response.data);
    } catch (error) {
      alert('Signup failed');
    }
    finally
    {
      setFirstName("");
      setLastName("");
      setPassword("");
      setLoading(false);
    }
  };

  return (
    <div style={signupPageStyle}>
        <form onSubmit={handleSubmitnested} style={formStyle}>
      <h2 style={subtitleStyle}>Signup</h2>
      <input style={inputStyle}
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required/>
      <input style={inputStyle}
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required/>
      <input style={inputStyle}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required/>
      <button style={buttonStyle} onClick={handleSignup} disabled={loading}>Signup</button>
      {loading && (
  <div style={{ textAlign: 'center' }}>
    <ClipLoader color="#36d7b7" size={50} />
  </div>
)}
      </form>
    </div>
  );
};

export default Signup;
