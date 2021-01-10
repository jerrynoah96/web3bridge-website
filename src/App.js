import React, {Component} from 'react';
import NavBar from './component/navbar'
import Header from './component/header';
import Vision from './component/vision';
//import Alumni from './component/alumni';
import Team from './component/team';
import TrustedBy from './component/trustedBy';
import Footer from './component/footer';
import AchievementTarget from './component/achievementTarget';
import RegPage from './component/regPage';
import Loader from './component/landingLoader';
import FormLoader from './component/formLoad';

import './App.css';


class App extends Component{

  state={
    currentPage: 'main',
    landing: 'landing'
  }

  componentDidMount=()=> {
    setTimeout(() => {
      this.setState({
        landing: 'main'
      })
     }, 3000)
  }

  switchToForm=()=> {
    this.setState({
      currentPage: 'form'
    })
  }

  switchToHome=()=> {
    this.setState({
      currentPage: 'main'
    })
  }

  formLoader=()=> {
    this.setState({
      currentPage: 'form load'
    })
  }




  render(){
    //for change from main page to track page
    let currentPage;
    if(this.state.currentPage === 'main'){
        currentPage= <div>
            <NavBar switchToForm={this.switchToForm}
              formLoader={this.formLoader}/>
            <Header switchToForm={this.switchToForm}
            formLoader={this.formLoader}/>
            <Vision />
            <AchievementTarget />
            <Team />
            <TrustedBy />
            <Footer />
        </div>
    }
    else if(this.state.currentPage === 'form load') {
      currentPage = <FormLoader />

    } 
    
    else{
      currentPage = <RegPage 
      switchToHome={this.switchToHome}/>
    }


    //for loader to main page
    let landing;

    if(this.state.landing === 'landing'){
      landing = <Loader />
    }
    else{
      landing= <div>
                {currentPage}
            
        </div>
    }

    //
    return (
    
      <div className="App">
        {landing} 
      </div>
    
    );

  }
  
}

export default App;
