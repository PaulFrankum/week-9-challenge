import NavBar from './NavBar'
import Footer from './Footer';

const pages = [
  { name: 'Home', key: 'home' },
  { name: 'GitHub Projects', key: 'git' },
  { name: 'About', key: 'about' },
  { name: 'Contact', key: 'contact' },
]

const Layout = ({ children, selectedPage, onSetPage }) => {

  const renderPageLinks = () => {

    return pages.map(page => (
       <li
          key={page.key}
          style={{
            ...styles.sidebarLink,
            ...(page.key === selectedPage ? styles.selected : {}),
          }}
          onClick={() => onSetPage(page.key)}
        >
          {page.name}
        </li>
    ));
  }

  return (
    <>
    <div id="desktop-menu" style={styles.container}>
      {/* Navigation */}
      <NavBar />
      <div style={styles.main}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <ul>
           {renderPageLinks()}
          </ul>
        </aside>

        {/* Content Area */}
        <section style={styles.content}>
          {children}
        </section>
      </div>
      {/* Footer */}
      <Footer />
    </div>
    <div id="mobile-menu" style={styles.container}>
      {/* Navigation */}
      <NavBar />
      <div style={styles.main}>
          {/* Sidebar */}
          <aside style={styles.sidebar2}>
          <ul>
           {renderPageLinks()}
          </ul>
        </aside>
        {/* Content Area */}
        <section style={styles.content}>
          {children}
        </section>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  </>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    flexDirection: 'column',
    minHeight: '100vh',
    minWidth: '100vw',
  },
  selected: {
    backgroundColor: '#999',
  },
  main: {
    display: 'flex',
    flex: 1,
  },
   sidebar: {
    display: 'flex',
    position: 'fixed',
    width: '200px',
    height: '100%',
    backgroundColor: '#f4f4f4',
    padding: '5px',
  },
  sidebar2: {
    display: 'none',
    width: '200px',
    backgroundColor: '#f4f4f4',
    padding: '5px',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
  sidebarLink: {
    display: 'flex',
    position: 'sticky', 
    padding: '5px',
    color: '#333',
    textDecoration: 'none',
  },
 footer: {
  zindex:"1"
},

};

export default Layout;
