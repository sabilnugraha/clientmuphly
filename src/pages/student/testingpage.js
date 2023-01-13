import React, { useState } from 'react';

function FormPage({ page, setPage }) {
  const [formData, setFormData] = useState({});

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit() {
    // code untuk mengirim data form ke server
  }

  return (
    <form>
      {page === 1 && (
        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} required />
          <button type="button" onClick={() => setPage(2)}>Next</button>
        </div>
      )}
      {page === 2 && (
        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} required />
          <button type="button" onClick={() => setPage(1)}>Previous</button>
          <button type="button" onClick={() => setPage(3)}>Next</button>
          <button type="button" onClick={handleSubmit}>Save</button>
        </div>
      )}
      {page === 3 && (
        <div>
          <label>Wleowleo</label>
          <input type="email" name="email" onChange={handleChange} required />
          <button type="button" onClick={() => setPage(1)}>Previous</button>
          <button type="button" onClick={() => setPage(3)}>Next</button>
          <button type="button" onClick={handleSubmit}>Save</button>
        </div>
      )}
    </form>
  );
}

export default FormPage;
