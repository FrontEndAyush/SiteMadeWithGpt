import React from 'react';
import './FormPage.css'; // Assuming you have a CSS file for styling

const FormPage = () => {
  return (
    <div className="form-page">
      <h1 className="form-title">Contact Us</h1>
      <form className="form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <button type="submit" className="submit-button">Send Us</button>
      </form>
    </div>
  );
}

export default FormPage;
