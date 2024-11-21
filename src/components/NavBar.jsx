import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import PMF from '../assets/bigpic.jpg';

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
        <img src ={PMF} alt = "Headshot of Paul Frankum" style={image.imagePic}/>
        <h1>PM Frankum Portfolio (Using React)</h1>
        <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/PMFrankum'><img src={facebook} alt="link to Facebook page" height={60}/></a>
        <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/paulmfrankum'><img src={linkedin} alt="link to Linkedin Page" height={50}/></a>

      </nav>
  )
}

// Inline styles for simplicity
const styles = {  
  navbar: {
    display: 'flex',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    },
};

const image = {  
  imagePic: {
    height: '60px',
    borderRadius: '50%',
   },
 };
export default NavBar