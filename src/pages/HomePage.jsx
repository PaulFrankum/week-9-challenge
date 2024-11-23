// HomePage.js
import React from 'react';
import marine from '/src/assets/Rotary_marine.jpg';
import shoebox from '/src/assets/shoeboxes.jpg';

const HomePage = () => {
  return (
<>
{/* // make 3 div arrow in right left <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
<div class="centre home-container aboutpm">
  <h2>Current Projects </h2>
</div>
      <div Id="marineBand" class="home-container aboutpm marineBand">

      <h2>Welcome to PM Frankum Portfolio (Using React)</h2>
      <p>I am lead Member on the Marine Band Concert.
      Basingstoke Deane Rotary are delighted to once again to be organising and hosting the world renown 'Band of His Majesty’s Royal Marines - Collingwood’ supported by the amazing Corp of Drums. All the band members are fully trained and operational military personnel producing some wonderful pieces by very talented musicians. Of course, once again among our VIP guests are the charismatic Chelsea Pensioners. 
All funds raised from the concert benefit; The Royal Marines Charity; Royal Hospital Chelsea (home of the Chelsea Pensioners) and other charities or charitable causes supported by Basingstoke Deane Rotary. This is the sixteenth annual concert at the Anvil and we hope to make it the most successful year so far.
If you are at a loss for Christmas presents, tickets to this lively concert are a great idea for all ages and as it is on a Sunday afternoon, a convenient time for just about everyone.
I do hope you will come and join us where we can all have a wonderful time, finishing off with Land of Hope and Glory and flag waving just like the Night of the Proms.</p>

      <a target='_blank' rel='noopener noreferrer' href='https://www.anvilarts.org.uk/events/the-band-of-his-majestys-royal-marines'><img src={marine} alt="link to Marine band at anvil" class= "center" id="desktop-menu" height={800}/></a>
      <a target='_blank' rel='noopener noreferrer' href='https://www.anvilarts.org.uk/events/the-band-of-his-majestys-royal-marines'><img src={marine} alt="link to Marine band at anvil" class= "center" id="mobile-menu" height={300}/></a>
        </div>
        <div Id="shoebox" class="home-container aboutpm shoebox">
          <h2>Christmas Shoebox Appeal 2024</h2>
      <p>Roatry Basingstoke and Deane collected 857 boxes this year which are now on their way to deserving children in Ukraine, Moldova, Romania and Montenegro.
I can report a great Total of 20,455 Shoeboxes having been delivered to the depot during these difficult times from across the Wessex region. We have now completed all custom required paperwork, now awaiting approvals from each Country’s shipping agents to enable us to dispatch, proposed next Weds 13th Nov.
To achieve the most cost-effective way to dispatch to all 4 Counties we will transport out on 3 Artic Lorries,
No 1 Lorry with 6285 Shoeboxes (424 cartons) plus 2 cartons of Woollen knitted items to Poland for the Shoeboxes to be transferred onto a Humanitarian Assistance Convoy which will be traveling into Ukraine via our Host Rotary Club Zamosc Ordynacki.
No 2 Lorry with 6081 Shoeboxes (427 cartons) plus 2 cartons of Woollen knitted items to host Rotary Club of Ulcinj, Montenegro.
No3 Lorry Split load; with 4008 Shoeboxes (281 cartons) plus 2 cartons of Woollen knitted items to host Rotary Club of Teka TG Mures, Romania.
Also, with 4109 Shoeboxes (281 cartons) plus 2 cartons of Woollen knitted items to host Rotary Club Chisinau, Moldova.
All three lorries will arrive by end of this month giving the Host Clubs more time to delivery out well before Christmas.
Many thanks for supporting again this year and for changing to collect dates before half term holidays.
I will inform you all when all safely delivered to host Clubs and have been handed out to the disadvantaged Children they support, Pictures will be forward in due time after Christmas.</p>
<a target='_blank' rel='noopener noreferrer' href='https://www.rotary-ribi.org/clubs/page.php?PgID=954128&ClubID=1523'><img src={shoebox} alt="Picture of shoe box on sorting night" class= "center" id="desktop-menu" height={400}/></a>
<a target='_blank' rel='noopener noreferrer' href='https://www.rotary-ribi.org/clubs/page.php?PgID=954128&ClubID=1523'><img src={shoebox} alt="Picture of shoe box on sorting night" class= "center" id="mobile-menu"height={200}/></a>
</div>

<div id="skillsbootcamp" class="home-container aboutpm skillsbootcamp">
<h2>Full Stack Web Development Bootcamp Sep24-Jan25</h2>
{/* add data <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
</div>

</>
  );
};

export default HomePage;

  /* .marineBand { display: none;} */
  /* .shoebox { display: block;} */
  /* .skillsbootcamp { display: none;} */