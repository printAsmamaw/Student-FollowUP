import React, { useState } from 'react';
import axios from 'axios';

function Check() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setMessage('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:3001/Student/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.errors) {
        setErrors(response.data.errors);
        setMessage('Some records failed');
      } else {
        setErrors([]);
        setMessage(response.data.status);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Error uploading file');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className='text-3xl text-gray-400 text-center mb-4'>
        Remember to replace your_secret_key with a secure key in a real application. 
        You should also hash the passwords before storing them in the database using bcrypt when creating users.
      </div>
      <form onSubmit={handleSubmit} className="text-center">
        <input type="file" onChange={handleFileChange} className="mb-4" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Upload File</button>
      </form>
      {message && <div className="text-center mt-4 text-red-500">{message}</div>}
      {errors.length > 0 && (
        <div className="text-center mt-4 text-red-500">
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Check;