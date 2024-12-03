// HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    // make form do alert and finish <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    <>
    <div className="contact-form-container aboutpm">
      <h2>Contact Page:</h2>
    </div>
    <div>
      {/* needs tohave somewhere otop send form data change action when got it */}
      <form action="#" method="POST">
        <div className="contact-form-container aboutpm">
          <div className="form-group">
            <label htmlFor="name" className="name-label">Name:</label>
            <input type="text" placeholder="Enter Name" style={{ padding: '8px', width: '96%'}}/>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="email-label">Email:</label>
            <input type="email" placeholder=" Enter Email" style={{ padding: '8px', width: '96%'}}/>
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="phone-label">Phone:</label>
            <input type="tel" placeholder=" Enter Telephone Number" style={{ padding: '8px', width: '96%'}}/>
          </div>
          <div className="form-group">
            <label htmlFor="message"className="message-label">Message:</label>
            <textarea id="message" placeholder="Message" rows="8" cols="52" style={{ padding: '8px', width: '96%'}}></textarea>
          </div>
        {/* Reset form as no back end to send data change to submit when form action is sorted at top*/}
          <button type="reset">Submit</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default HomePage;
