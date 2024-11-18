// HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h2>Contact Page:</h2>
      <form action="#" method="POST">
        <div class="contact-form-container aboutpm">
          <div class="form-group">
            <label for="name">Name:</label>
            {/* <input type="text" placeholder="Enter Name" value={ContactName} onChange={handleChange} style={{ padding: '8px', width: '100%' }}/> */}
          </div>
          <div class="form-group">
            <label for="email" class="email-label">Email:</label>
            {/* <input type="email" id="email" name="email" required> */}
          </div>
          <div class="form-group">
            <label for="phone" class="phone-label">Phone:</label>
            {/* <input type="tel" id="phone" name="phone"> */}
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="8" cols="52" ></textarea>
          </div>
          <button type="submit">Submit</button>
          <p><a href="#" class="terms-link">Terms and Conditions</a></p>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
