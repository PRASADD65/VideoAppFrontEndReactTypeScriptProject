import React, { useState, useEffect } from 'react';
import { getAllRecords, Record ,fetchAllVideos } from './getAllRecords ';

const RecordList: React.FC = () => {

    const buttonStyles: React.CSSProperties = {
      padding: '8px 16px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    };

    const h5Styles: React.CSSProperties = {
      color: 'pink',
      fontSize: '14px',
      fontWeight: 'bold',
      fontFamily: 'Arial, sans-serif',
      margin: '6px 0',
      padding: '0',
      textAlign:'center',
    };

    
    const inputStyles: React.CSSProperties = {
      flex: 1,
      padding: '8px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      outline: 'none',
    };

  const [records, setRecords] = useState<Record[]>([]);
  const [searchName, setSearchName] = useState<string>(null);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showSearchForAllVideos, setshowSearchForAllVideos] = useState<boolean>(false);
  const [allVideos, setAllvideos] = useState<Record[]>([]);
  const [searhField, setSearhField] = useState<boolean>(false);
  

  useEffect(() => {
    fetchRecords();
  },[searchName]);

  const fetchRecords = async () => {
    const data = await getAllRecords(searchName);
    setRecords(data);
  };

  const fetchallVideios = async () => {
    const data = await fetchAllVideos();
    setAllvideos(data);
  };

  useEffect(()=>
  {
    fetchallVideios();
  },[])

  const handleSearchClick = () => {
    setShowSearch(true);
    checkValue();
  };

  const handleSearchClickForAllVideos = () => {
    setshowSearchForAllVideos(true);
  };

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value);
  };

  const changeShowSearchValue = () => {
    setShowSearch(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event);
    changeShowSearchValue();
  };

  const isNotNull = <T,>(value: T | null): value is T => {
    return value !== null;
  };

  const checkValue = () => {
    if (isNotNull(searchName) && searchName.trim() !== "") {
      console.log('Value is not null:', searchName);
      setSearhField(true); 
    } else {
      console.log('Value is null or empty');
      setSearhField(false); 
    }
  };

  return (
    <div >
      <input
        type="text"
        placeholder="Search by Video name"
        value={searchName}
        onChange={handleChange}
        style={inputStyles}
      /><br/> <br/>
      <button onClick={handleSearchClick} type="submit" style={{...buttonStyles,marginRight: '25px' }}> Search Video </button>
      <button onClick={handleSearchClickForAllVideos} type="submit" style={buttonStyles}> Watch All Videos </button>
      {
    searhField && showSearch? (
    <ul>
      {records.map((record) => (
        <p key={record.id}>
          <h5 style={h5Styles}>{record.videoName}</h5>
          <video width="210" height="210" controls>
            <source src={record.videoSourceUrl} type="video/mp4" />
          </video>
        </p>
      ))}
    </ul>
  ) : showSearchForAllVideos ? (
    <ul>
      {allVideos.map((record) => (
        <p key={record.id}>
          <h5 style={h5Styles}>{record.videoName}</h5>
          <video width="210" height="210" controls>
            <source src={record.videoSourceUrl} type="video/mp4" />
          </video>
        </p>
      ))}
    </ul>
  ) : null
}
    </div>
    
  );
};

export default RecordList;