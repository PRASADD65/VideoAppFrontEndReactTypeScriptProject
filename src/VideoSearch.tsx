import React, { useState } from 'react';
import axios from 'axios';
import RecordList from './RecordList';
import { ClipLoader } from 'react-spinners';

const VideoSearch: React.FC = () => {

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
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event:React.FormEvent)=>
  {
    const isNotNull = <T,>(value: T | null): value is T => {
      return value !== null;
    };
    event.preventDefault();
    setLoading(true);
    try
    {
      const response=await axios.post('http://18.61.35.21:8080/api/video',
        {
          videoName,
          videoDescription,
          videoSourceUrl
        }
      );
      if(response.data==="")
        {
          alert("You Don't have Role to Add Video !")
        }
        else
        {
          alert("Video Added Successfuly !");
        }
    }
    catch(error)
    {
      console.log('Error occured',error);
    }
    finally{
    setVideoName('');
    setVideoDescription('');
    setVideoSourceUrl('');
    setLoading(false);
    }
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
      <button type="submit" style={buttonStyles} disabled={loading}> Add Video </button>
      {loading && (
  <div style={{ textAlign: 'center' }}>
    <ClipLoader color="#36d7b7" size={50} />
  </div>
)}
    </form><><h1 style={h1Style}>Abhi Videos Store</h1><form style={formStyles} onSubmit={handleSubmitnested}><RecordList /></form></>
        
    </>
  );
    
};

export default VideoSearch;
