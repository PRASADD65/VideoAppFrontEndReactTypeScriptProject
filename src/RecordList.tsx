import React, { useState, useEffect } from 'react';
import { getAllRecords, Record } from './getAllRecords ';



const RecordList: React.FC = () => {
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
    const h5Styles: React.CSSProperties = {
      color: 'pink',
      fontSize: '14px',
      fontWeight: 'bold',
      fontFamily: 'Arial, sans-serif',
      margin: '6px 0',
      padding: '0',
      textAlign:'center',
    };

  const [records, setRecords] = useState<Record[]>([]);
  const [searchName, setSearchName] = useState<string>(null);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  

  useEffect(() => {
    fetchRecords();
  },[searchName]);

  const fetchRecords = async () => {
    const data = await getAllRecords(searchName);
    setRecords(data);
  };

  const handleSearchClick = () => {
    setShowSearch(true);
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
    if (isNotNull(searchName)) {
      console.log('Value is not null:', searchName);
      return true;
    } else {
      console.log('Value is null');
      return false;
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchName}
        onChange={handleChange}
      /><br/>
      <button onClick={handleSearchClick} type="submit" style={buttonStyles}> Search Video </button>
      {showSearch  && checkValue() &&
      <ul>
        {records.map((record) => (
          <p key={record.id}>
            {
              <><h5 style={h5Styles}>{record.videoName}</h5><video width="210" height="210" controls>
                <source src={record.videoSourceUrl} type="video/mp4" />
              </video></>
            }
          </p>
        ))}
      </ul>
      }
    </div>
    
  );
};

export default RecordList;