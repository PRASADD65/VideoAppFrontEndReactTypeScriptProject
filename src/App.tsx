import React, { useState } from 'react';
import axios from 'axios';
import RecordList from './RecordList';

const App: React.FC = () => {

  const labelStyle: React.CSSProperties = {
    color: 'blue',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
    display: 'block',
  };
  const inputStyles: React.CSSProperties = {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const formStyles: React.CSSProperties = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  };

  const buttonStyles: React.CSSProperties = {
    padding: '8px 18px',
    fontSize: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '2px',
    cursor: 'pointer',
    marginTop: '6px',
  };
  const h1Style: React.CSSProperties = {
    color: 'blue',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '5px',
  };


  const [videoName,setVideoName] =useState<string>('');
  const [videoDescription,setVideoDescription] =useState<string>('');
  const [videoSourceUrl,setVideoSourceUrl] =useState<string>('');

  const handleSubmit = async (event:React.FormEvent)=>
  {
    event.preventDefault();
    try
    {
      const response=await axios.post('http://localhost:8080/api/video',
        {
          videoName,
          videoDescription,
          videoSourceUrl
        }
      );
      console.log('Video Added',response.data);
    }
    catch(error)
    {
      console.log('Error occured',error);
    }
    setVideoName('');
    setVideoDescription('');
    setVideoSourceUrl('');
  };

  const handleSubmitnested = (event:React.FormEvent)=>
    {
      event.preventDefault();
    }

  return(
    <><form style={formStyles} onSubmit={handleSubmit}>
      <div>
        <label style={labelStyle}> Video Name :</label>
        <input style={inputStyles} type="text" value={videoName} onChange={(e) => setVideoName(e.target.value)} required />
      </div>
      <div>
        <label style={labelStyle}> Video Description :</label>
        <input style={inputStyles} type="text" value={videoDescription} onChange={(e) => setVideoDescription(e.target.value)} required />
      </div>
      <div>
        <label style={labelStyle}> Video Source Url :</label>
        <input style={inputStyles} type="text" value={videoSourceUrl} onChange={(e) => setVideoSourceUrl(e.target.value)} required />
      </div>
      <button type="submit" style={buttonStyles}> Add Video </button>
    </form><><h1 style={h1Style}>Abhi Videos Store</h1><form style={formStyles} onSubmit={handleSubmitnested}><RecordList /></form></></>
        
  )
  
};

export default App;