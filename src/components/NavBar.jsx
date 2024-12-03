import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import PMF from '../assets/bigpic.jpg';
import { useState } from 'react';

const pages = [
  { name: 'Home', key: 'home' },
  { name: 'GitHub Projects', key: 'git' },
  { name: 'About', key: 'about' },
  { name: 'Contact', key: 'contact' },]

const NavBar = () => {
  return (
    <>

    <nav className="center" style={styles.navbar}>
      <div className="topnav"  id="mobile-menu">
        <a href="#home" className="active">Ξ</a>
      {/* // burger menu to work <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
          <div id="burger-menu" style={styles.myLinks2}>
            <a href="#">Home</a>
            <a href="#">GitHub Projects</a>     
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
      <img src ={PMF} alt = "Headshot of Paul Frankum" id="mobile-menu" style={image.imageMobile}/> 
      <img src ={PMF} alt = "Headshot of Paul Frankum" id="desktop-menu" style={image.imageDesktop}/> 
      <h1>PM Frankum Portfolio (Using React)</h1>
      <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/PMFrankum'><img src={facebook} alt="link to Facebook page" id="mobile-menu" style={image.imageMobile}/></a>
      <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/PMFrankum'><img src={facebook} alt="link to Facebook page" id="desktop-menu" style={image.imageDesktop}/></a>
      <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/paulmfrankum'><img src={linkedin} alt="link to Linkedin Page" id="mobile-menu" style={image.imageMobile}/></a>
      <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/paulmfrankum'><img src={linkedin} alt="link to Linkedin Page" id="desktop-menu" style={image.imageDesktop}/></a>

    </nav>
    </>
  )
}

// Inline styles for simplicity
const styles = {  
  navbar: {
    zIndex: '1',
    display: 'flex',
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    position: 'sticky', 
    }, 
  myLinks2:{
    color: '#000000',
    flexDirection: 'column',
    position: 'fixed',
    left: '25px',
    top:'18px',
    width: '200px',
    backgroundColor: '#999999',
  }
}
const image = {  
  imageMobile: {
    height: '20px',
    padding: '10px',
    borderRadius: '50%',
   },
   imageDesktop: {
    height: '60px',
    padding: '20px',
    borderRadius: '50%',
   },
 };

export default NavBar