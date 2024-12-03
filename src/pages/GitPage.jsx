// AboutPage.js
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const GitPage = () => {

  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleSearch = async () => {

      try {
        const response = await axios.get(`https://api.github.com/users/PaulFrankum/repos`);
        setProjects(response.data);
      } catch (err) {
        setError("Could not retrieve information. Please check the status code.");
      }
    };
    handleSearch();
  }, []);

  return (
  <div>
    <div className="contact-form-container">
      <h2>GitHub Projects:</h2>
    </div>

    {projects.map((project, index) => ( 
    <div key={index} className="github-container">
      <a target='_blank' rel='noopener noreferrer' href={project.html_url}>Link to Git Hub Code:<br></br>{project.html_url}</a><br></br>
      {project.has_pages && <a target='_blank' rel='noopener noreferrer' href={'https://paulfrankum.github.io/'+project.name}>Link to live website:<br></br>https://paulfrankum.github.io/{project.name}</a>}
      <p>Description: {project.description}</p>
      <p>Created at: {project.created_at}</p>
      <p>Updated at: {project.updated_at}</p>
    </div>))}
  
  </div>
  )}

export default GitPage;


