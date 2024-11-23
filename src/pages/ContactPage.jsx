// HomePage.js
import React from 'react';

const handleSubmit = (e) => {
  e.preventDefault();
  alert(`Form submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\nHeard Of Us: ${formData.hearOfUs}\nOther Source: ${formData.otherSource}`);
};

const HomePage = () => {
  return (
    // make form do alert and finish <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    <>
    <div class="contact-form-container aboutpm">
      <h2>Contact Page:</h2>
    </div>
    <div>
      <form action="#" method="POST">
        <div class="contact-form-container aboutpm">
          <div class="form-group">
            <label for="name" class="name-label">Name:</label>
            <input type="text" placeholder="Enter Name" style={{ padding: '8px', width: '96%'}}/>
          </div>
          <div class="form-group">
            <label for="email" class="email-label">Email:</label>
            <input type="email" placeholder=" Enter Email" style={{ padding: '8px', width: '96%'}}/>
          </div>
          <div class="form-group">
            <label for="phone" class="phone-label">Phone:</label>
            <input type="tel" placeholder=" Enter Telephone Number" style={{ padding: '8px', width: '96%'}}/>
          </div>
          <div class="form-group">
            <label for="message" class="message-label">Message:</label>
            <textarea id="message" placeholder="Message" rows="8" cols="52" style={{ padding: '8px', width: '96%'}}></textarea>
          </div>

          <button type="submit">Submit</button>
          <p><a href="#home" class="terms-link" >Terms and Conditions</a></p>
        </div>
      </form>
    </div>
    </>
  );
};

export default HomePage;
