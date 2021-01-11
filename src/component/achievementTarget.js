import React from 'react';
import BgImg from '../images/Group 203.png';
import '../App.css';

const AchievementTarget=()=> {

  return (
    <div className="achievement-target" id="achievement-target">
        <img src={BgImg} alt="background"/>
        <div className="dark-scarf">

        </div>
        <div className="a-t-flex">
        
        <div className="achievement">
        <h2 className="achievement-h2">Achievements</h2>
            
            <div className="achievement1 achievement-item">
                <h3>273</h3>
                <div className="white-divider"></div>
                <span>Introduced to web3 in 9Months</span>
            </div>

            <div className="achievement2 achievement-item">
                <h3>34</h3>
                <div className="white-divider"></div>
                <p id="span-spread">Onboarded, coding, open source contributors,
                    participating in hacks and working for various blockchain teams
                </p>
            </div>

            <div className="achievement3 achievement-item">
                <h3>3</h3>
                <div className="white-divider"></div>
                <span>Fully completed Dapps</span>
            </div>

        </div>

        
        <div className="target">
        <h2 className="target-h2">Target</h2>
            
            
            <div className="target1 target-item">
                <h3>1000</h3>
                <div className="white-divider"></div>
                <span>Active web3bridge community members <br/> and partners 
                in Africa by 2023</span>
            </div>

            <div className="target2 target-item">
                <h3>500</h3>
                <div className="white-divider"></div>
                <span>Active web3 developers in Africa <br/> by 2023
                </span>
            </div>

        </div>


        </div>
        
    </div>
  );
}

export default AchievementTarget;

