import React from 'react';
import AllanImg from "../images/Allan.jpeg";
import AyodejImg from "../images/Ayodeji.jpeg";
import DanImg from "../images/dan.jpeg";
import MarekImg from "../images/marek.jpeg";
import JerryImg from "../images/jerry.jpeg";
import '../App.css';

const Team=()=> {

  return (
    <div className="team" id="team">
      <div className="team-header"> <h2> The Team</h2> </div>
      <div className="team-members">

      <div className="team-member-detail">
        <img src={AllanImg} alt="Allan"/>
        <span className="team-member-name">Katangole Allan </span>
        <span className="team-member-role">Head, Techinal Training </span>

      </div>

      <div className="team-member-detail">
        <img src={AyodejImg} alt="Ayodeji"/>
        <span className="team-member-name">Awosika Israel Ayodeji </span>
        <span className="team-member-role">Program Designer/Cordinator </span>

      </div>

      <div className="team-member-detail">
        <img src={DanImg} alt="Dan"/>
        <span className="team-member-name">Akinnusotu Temitayo Daniel</span>
        <span className="team-member-role">Student-Mentor Relations </span>

      </div>

      <div className="team-member-detail">
        <img src={MarekImg} alt="Marek" />
        <span className="team-member-name">Marek Laskowski </span>
        <span className="team-member-role">Advisor </span>

      </div>

      <div className="team-member-detail">
        <img src={JerryImg} alt="Jerry"/>
        <span className="team-member-name">Jeremiah Noah </span>
        <span className="team-member-role">Web2 Director </span>

      </div>

      </div>
      
      
      
    </div>
  );
}

export default Team;