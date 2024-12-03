// HomePage.js
import React from 'react';
import PMF from '../assets/bigpic.jpg';

const HomePage = () => {
  return (
    <>
    <div className="about-container">
      <h2>About Page:</h2>
    </div>
    <div className="about-container">
      <img src ={PMF} alt = "Headshot of Paul Frankum" className ="center" height={225}/>
           
      <p>I am a former Basngstoke and Deane Borough Councillor,
      voted by all parties to Chair Scrutiny Committee through
      the Pandemic. I was deputy then Mayor for Basingstoke and 
      Deane Council. I served as a Councillor for over 20 years.
      I now want to get back to my first love of coding, so to 
      this end I have enrolled in this Skills Coding Boot Camp. 
      To update and refresh my skills. In my spare time I am a 
      Rotarian at present I am running one of the two biggest 
      fund-raising events The Marine Band with Marine Drummers 
      Concert in the Anvil for 26th January 2025 all profits
      going to charity. The other main fund raiser is The Festival
      of Transport in the Memorial Park my role is to oversee the 
      disabled parking with about 200 spaces to manage. I also 
      collect Whisky from around the world and have currently 
      about 340 bottles (unopened!).</p>
      
    </div>
    </>
  );
};

export default HomePage;
