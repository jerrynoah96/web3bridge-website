import React from 'react';


import '../App.css';

const RegPage=()=> {

  return (
        <div className="reg-page">
            <h2>List of Track/Courses</h2>
            <div className="track web2-intro">
                <h5>Web2 Introduction</h5>
                <p>Web2 introduction track will be introducing no-coders to Web2(HTML,CSS, Javascript).
                    The track will be building on the result of the pilot program to increase the 
                    impact and the reach of the track </p>

                <button> Register</button>

            </div>

            <div className="track web3bridge">
                <h5>Web2 Introduction</h5>
                <p>Web2 introduction track will be introducing no-coders to Web2(HTML,CSS, Javascript).
                    The track will be building on the result of the pilot program to increase the 
                    impact and the reach of the track </p>

                <button> Register</button>

            </div>

            <div className="track web3garage">
                <h5>Web3 Garage</h5>
                <p>With the number of web3 developers we have trained since the cohort started
                and those that have been motivated by our vision and have self-taught themselves,
                We are opening up a "Web3 Garage"!.The garage will be focused on learning product life cycle
                 user research, community engagement, marketing and within 12 weeks will be
                breaking and fixing codes to launch projects/ products</p>

                <button> Register</button>

            </div>

        </div>
  );
}

export default RegPage;