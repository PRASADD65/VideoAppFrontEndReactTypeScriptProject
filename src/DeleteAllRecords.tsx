import React, { useState } from 'react';

const DeleteAllRecords: React.FC = () => {

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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const deleteAllRecords = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://98.130.117.99:8080/api/video', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed, like authorization tokens
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete records');
      }

      // Handle success (e.g., show a message or update the UI)
      console.log('All records deleted successfully');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button style={buttonStyles} onClick={deleteAllRecords} disabled={loading}>
        {loading ? 'Deleting...' : 'Delete All Records'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default DeleteAllRecords;