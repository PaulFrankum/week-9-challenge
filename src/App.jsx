// App.js
import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GitPage from './pages/GitPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {

  const [page, setPage] = useState('home');

  return (
    <Layout selectedPage={page} onSetPage={setPage}>

      {page === 'home' && <HomePage />}
      {page === 'git' && <GitPage />}      
      {page === 'about' && <AboutPage />}
      {page === 'contact' && <ContactPage />}

    </Layout>
  );
}

export default App;
