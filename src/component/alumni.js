import React from 'react';
import Carousel from 'react-elastic-carousel'
import managerImg from "../images/manager.svg";

import '../App.css';

const Alumni=()=> {

  const breakPoints = [
    {width: 300, itemsToShow: 1},
    {width: 600, itemsToShow: 2},
    {width: 900, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}

  ]

  return (
    <section className="alumni" id="alumni">
      <h2> Alumni</h2>
      <Carousel breakPoints={breakPoints} enableAutoPlay={true}
                autoPlaySpeed={3000}>
        <div className="alumnus-card">
            <img src={managerImg} alt="alumnus"/>
            <p className="alumnus-profile">
                Blockchain developer for Legogreen, creating smart contract offerrings and 
                decentralized applications for seamless transactions
            </p>

        </div>

        <div className="alumnus-card">
            <img src={managerImg} alt="alumnus"/>
            <p className="alumnus-profile">
                Blockchain developer for Legogreen, creating smart contract offerrings and 
                decentralized applications for seamless transactions
            </p>

        </div>

        <div className="alumnus-card">
            <img src={managerImg} alt="alumnus"/>
            <p className="alumnus-profile">
                Blockchain developer for Legogreen, creating smart contract offerrings and 
                decentralized applications for seamless transactions
            </p>

        </div>


        <div className="alumnus-card">
            <img src={managerImg} alt="alumnus"/>
            <p className="alumnus-profile">
                Blockchain developer for Legogreen, creating smart contract offerrings and 
                decentralized applications for seamless transactions
            </p>

        </div>

        <div className="alumnus-card">
            <img src={managerImg} alt="alumnus"/>
            <p className="alumnus-profile">
                Blockchain developer for Legogreen, creating smart contract offerrings and 
                decentralized applications for seamless transactions
            </p>

        </div>
        <div className="alumnus-card">
            <img src={managerImg} alt="alumnus"/>
            <p className="alumnus-profile">
                Blockchain developer for Legogreen, creating smart contract offerrings and 
                decentralized applications for seamless transactions
            </p>

        </div>
        <div className="alumnus-card">
            <img src={managerImg} alt="alumnus"/>
            <p className="alumnus-profile">
                Blockchain developer for Legogreen, creating smart contract offerrings and 
                decentralized applications for seamless transactions
            </p>

        </div>
        <div className="alumnus-card">
            <img src={managerImg} alt="alumnus"/>
            <p className="alumnus-profile">
                Blockchain developer for Legogreen, creating smart contract offerrings and 
                decentralized applications for seamless transactions
            </p>

        </div>
        <div className="alumnus-card">
            <img src={managerImg} alt="alumnus"/>
            <p className="alumnus-profile">
                Blockchain developer for Legogreen, creating smart contract offerrings and 
                decentralized applications for seamless transactions
            </p>

        </div>

        

      </Carousel>
        

    </section>
  );
}

export default Alumni;