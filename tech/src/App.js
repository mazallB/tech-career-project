import './App.css';
import HomePage from './components/homePage/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { useState } from 'react'
import RegSteps from './components/regSteps/RegSteps'
import ThirdRegistration from './components/thirdRegistration/ThirdRegistration'
import SecondRegistration from './components/secondRegistration/SecondRegistration';



function App() {


  return (
    <Router>
      <div className="App">

        <Route path='/regSteps' component={RegSteps} />
{/* <ThirdRegistration/>   */}
{/* <SecondRegistration/> */}



      </div>

    </Router>
  );
}

export default App;
