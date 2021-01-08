import React from 'react';
import interactionImg from "../images/interaction.svg";
import learningImg from "../images/reading-book.svg";
import collaborationImg from "../images/collaboration.svg";
import networkImg from "../images/network.svg";

import '../App.css';

const Vision=()=> {

  return (
    <section className="our-vision" id="vision"> 
        <h2 className="vision-header">Our Vision</h2>

        <div className="vision-content" >
            <div className="vision-card interacion">
                <img  src={interactionImg}/>
                <span className="vision-card-header"> Interaction</span>
                <p> We believe repeated interactions are a great contribution to
                    career growth
                </p>

            </div>

            <div className="vision-card learning">
                <img  src={learningImg}/>
                <span className="vision-card-header"> Learning</span>
                <p> We are enthusiastic about learning and more pumped into faster life-long 
                    learning
                </p>

            </div>

            <div className="vision-card collaboration">
                <img  src={collaborationImg}/>
                <span className="vision-card-header"> Collaboration</span>
                <p>We believe collaboration and team work greatly 
                    contribute to learning and growth
                </p>

            </div>

            <div className="vision-card networking">
                <img  src={networkImg}/>
                <span className="vision-card-header"> Networking</span>
                <p>We believe collaboration and team work greatly 
                    contribute to learning and growth
                </p>

            </div>
            


        </div>  
      
    </section>
  );
}

export default Vision;