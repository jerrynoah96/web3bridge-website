import React from 'react';
import '../App.css';

const Header=(props)=> {

  const switchToForm = (e)=> {
    
    props.formLoader(e);
    setTimeout(() => {
      props.switchToForm(e);
     }, 3000)
  }
  return (
    <header className="header" id="header">

        <div className="header-details">
            <h1 className="header-header">
                <span>LEARN</span> AND <span>NETWORK</span> AT <span>Web3</span>Bridge
            </h1>

            <div className="header-mission">
            <p> <span> Mission: </span> To Identify Web3 Passions, train them in a collaborative
                    and supportive remote environment and create an African web3 community</p>

            </div>

            <button className="registerBtn-header rg-btn" onClick={switchToForm}>Register Now</button>

        </div>
      
      
    </header>
  );
}

export default Header;