import React from 'react';
import axios from 'axios';

const response = await axios.get(`https://api.github.com/users/PaulFrankum/repos`);
const x = response.data.length
let tableArray = {}

for (let i = 0; i < x; i++) {
  tableArray[i] = {"svnUrl": response.data[i].svn_url, "url": 'https://paulfrankum.github.io/' + response.data[i].name, "fullname": response.data[i].full_name, "createdAt": response.data[i].created_at, "updateAt": response.data[i].updated_at }
}

function HomePage() {
  return (
    <>
    <div class="contact-form-container">
      <h2>GitHub Projects:</h2>
    </div>
    <div>           
      <table style={styles.table}>
        <tr style={styles.table}>
          <th style={styles.table}>Link to Code</th>
          <th style={styles.table}>URL to Live Site</th>
          <th style={styles.table}>Fullname</th>
          <th style={styles.table}>Created</th>
          <th style={styles.table}>Last Update</th>      
        </tr>
        {/* Make for loop to add all git repos and capture 404 errors <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
        {/* <tr>
          <td style={styles.table}><a target='_blank' rel='noopener noreferrer' href={response.data[i].svn_url}>{response.data[i].svn_url}</a></td> 
          <td style={styles.table}><a target='_blank' rel='noopener noreferrer' href={'https://paulfrankum.github.io/' + response.data[0].name}>{'https://paulfrankum.github.io/' + response.data[i].name}</a></td>
          <td style={styles.table}>{response.data[i].full_name}</td>
          <td style={styles.table}>{response.data[i].created_at}</td>
          <td style={styles.table}>{response.data[i].updated_at}</td>
        </tr> */}
        <tr>
          <td style={styles.table}><a target='_blank' rel='noopener noreferrer' href={response.data[0].svn_url}>{response.data[0].svn_url}</a></td> 
          <td style={styles.table}><a target='_blank' rel='noopener noreferrer' href={'https://paulfrankum.github.io/' + response.data[0].name}>{'https://paulfrankum.github.io/' + response.data[0].name}</a></td>
          <td style={styles.table}>{response.data[0].full_name}</td>
          <td style={styles.table}>{response.data[0].created_at}</td>
          <td style={styles.table}>{response.data[0].updated_at}</td>
        </tr>
        <tr>
          <td style={styles.table}><a target='_blank' rel='noopener noreferrer' href={tableArray[1].svnUrl}>{tableArray[1].svnUrl}</a></td> 
          <td style={styles.table}><a target='_blank' rel='noopener noreferrer' href={tableArray[1].url}>{tableArray[1].url}</a></td>
          <td style={styles.table}>{tableArray[1].fullname}</td>
          <td style={styles.table}>{tableArray[1].createdAt}</td>
          <td style={styles.table}>{tableArray[1].updateAt}</td>
        </tr>
        <tr>
          <td style={styles.table}><a target='_blank' rel='noopener noreferrer' href={response.data[2].svn_url}>{response.data[2].svn_url}</a></td> 
          <td style={styles.table}><a target='_blank' rel='noopener noreferrer' href={'https://paulfrankum.github.io/' + response.data[2].name}>{'https://paulfrankum.github.io/' + response.data[2].name}</a></td>
          <td style={styles.table}>{response.data[2].full_name}</td>
          <td style={styles.table}>{response.data[2].created_at}</td>
          <td style={styles.table}>{response.data[2].updated_at}</td>
        </tr>
      </table>
    </div>
    </>
);
}      

// Inline styles for simplicity
const styles = {  
 table: {
  margin:'10px',
  padding: '4px',
  border: '1px solid green',
  textalign: 'center',
  },
};

export default HomePage;
