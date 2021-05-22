import React from 'react';
//import Allan from "../images/Allan.jpeg";
//import Ayodeji from "../images/Ayodeji.jpeg";
//import Dan from "../images/dan.jpeg";
//import Marek from "../images/marek.jpeg";
//import Jerry from "../images/jerry.jpeg";
import '../App.css';

const Team=()=> {

  return (
    <div className="team" id="team">
      <div className="team-header"> <h2> The Team</h2> </div>
      <div className="team-members">

      <div className="team-member-detail">
        <img src="https://i.ibb.co/r004Q1v/Allan.jpg" alt="Allan"/>
        <span className="team-member-name">Katangole Allan </span>
        <span className="team-member-role">Head, Techinal Training </span>

      </div>

      <div className="team-member-detail">
        <img src="https://i.ibb.co/fnyXyxD/Ayodeji.jpg" alt="Ayodeji"/>
        <span className="team-member-name">Awosika Israel Ayodeji </span>
        <span className="team-member-role">Program Designer/Cordinator </span>

      </div>

      <div className="team-member-detail">
        <img src="https://i.ibb.co/9Hyj3Nr/dan.jpg" alt="Dan"/>
        <span className="team-member-name">Akinnusotu Temitayo Daniel</span>
        <span className="team-member-role">Student-Mentor Relations </span>

      </div>

      <div className="team-member-detail">
        <img src="https://i.ibb.co/W0V7kZs/marek.jpg" alt="Marek" />
        <span className="team-member-name">Marek Laskowski </span>
        <span className="team-member-role">Advisor </span>

      </div>

      <div className="team-member-detail">
        <img src="https://i.ibb.co/VWWqwQH/jerry.jpg" alt="Jerry"/>
        <span className="team-member-name">Jeremiah Noah </span>
        <span className="team-member-role">Web2 Director </span>

      </div>

      </div>
      
      
      
    </div>
  );
}

export default Team;