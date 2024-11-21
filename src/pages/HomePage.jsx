// HomePage.js
import React from 'react';
import axios from 'axios';

const response = await axios.get(`https://api.github.com/users/PaulFrankum/repos`);
const x = response.data.length
        


function HomePage() {
  return (
    <div>
   homepage
    </div>
  );
}

export default HomePage;
