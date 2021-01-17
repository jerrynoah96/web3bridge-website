import React from 'react';
import logo from '../images/logo.svg';

import '../App.css';

const RegNav=(props)=> {
  
  return (
    <nav className="navbar regnav">
        <img className="logo" src={logo} alt="logo"
          /> 
          <button className="toHomeBtn"
          onClick={()=> {
              props.switchToHome()
          }}>Home</button>

    </nav> 
        
  );
}

export default RegNav;