import React from 'react';
import RegNav from './regNav';
import RegFooter from './regFooter'


import '../App.css';

const RegPage=(props)=> {

  return (
        <div className="reg-page">
            <RegNav 
            switchToHome={props.switchToHome}/>
            <h2>List of Track/Courses</h2>
            <div className="track web2-intro">
                <h5>Web2 Introduction</h5>
                <p>Web2 introduction track will be introducing no-coders to Web2(HTML,CSS, Javascript).
                    The track will be building on the result of the pilot program to increase the 
                    impact and the reach of the track </p>

                <button className="reg-button"> <a target="_blank" rel="noreferrer" href="https://forms.gle/e6S6HL3yrNRFCVkT6">Register</a></button>

            </div>

            <div className="track web3bridge">
                <h5>Web3Bridge</h5>
                <p>Web3bridge track is the core of the program as it focuses on migrating web2 developers
                    into the web3 ecosystem. We will be opening the cohort for one hundred and fifty(150)
                    web2 developers with the goal of graduating seventy(70) developers and a minimum of three(3)
                    projects/dapps.
                </p>

                <button className="reg-button">  <a target="_blank" rel="noreferrer" href="https://forms.gle/se5PG3zKb9NHNn3b7">Register</a></button>

            </div>

            <div className="track web3garage">
                <h5>Web3 Garage</h5>
                <p>With the number of web3 developers we have trained since the cohort started
                and those that have been motivated by our vision and have self-taught themselves,
                We are opening up a "Web3 Garage"!.The garage will be focused on learning product life cycle
                 user research, community engagement, marketing and within 12 weeks will be
                breaking and fixing codes to launch projects/ products</p>

                <button className="reg-button"> Register</button>

            </div>
            <RegFooter 
            switchToHome={props.switchToHome}/>

        </div>
  );
}

export default RegPage;