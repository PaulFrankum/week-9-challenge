import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import PMF from '../assets/bigpic.jpg';



const NavBar = () => {
  return (
    <>
    <nav class="center" style={styles.navbar}>
      <div class="topnav"  id="mobile-menu">
        <a href="#home" class="active">Ξ</a>
      {/* // burger menu to work <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
        {/* <aside style={styles.sidebar}>
          <ul>
           {renderPageLinks()}
          </ul>
        </aside> */}
      </div>
      <img src ={PMF} alt = "Headshot of Paul Frankum" class="active" id="mobile-menu" style={image.imageMobile}/> 
      <img src ={PMF} alt = "Headshot of Paul Frankum" class="active" id="desktop-menu" style={image.imageDesktop}/> 
      <h1>PM Frankum Portfolio (Using React)</h1>
      <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/PMFrankum'><img src={facebook} alt="link to Facebook page" class="active" id="mobile-menu" style={image.imageMobile}/></a>
      <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/PMFrankum'><img src={facebook} alt="link to Facebook page" class="active" id="desktop-menu" style={image.imageDesktop}/></a>
      <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/paulmfrankum'><img src={linkedin} alt="link to Linkedin Page" class="active" id="mobile-menu" style={image.imageMobile}/></a>
      <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/paulmfrankum'><img src={linkedin} alt="link to Linkedin Page" class="active" id="desktop-menu" style={image.imageDesktop}/></a>

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
  sidebar: {
    display: 'flex',
    flex: 1,
    width: '150px',
    backgroundColor: '#f4f4f4',
    padding: '5px',
  },
};

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