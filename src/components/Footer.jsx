import React from 'react'

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 PM Frankum Portfolio (Using React). All rights reserved.</p>
    </footer>
  )
}

// Inline styles for simplicity
const styles = {
  footer: {
    backgroundColor: '#333',
    zIndex: '1',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
  
};

export default Footer