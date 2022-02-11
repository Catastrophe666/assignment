import React from 'react';
import './App.css';
import { RegistrationPage } from './components/RegistrationPage';
import { SuccessPage } from './components/SuccessPage';
import { AnagramCalculator} from './components/AnagramCalculator';
import { TempTrack} from './components/TeamperatureTracker';

import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
       <Route path="/" exact component={RegistrationPage} />
       <Route path="/registration" exact component={RegistrationPage} />
       <Route path="/success" exact component={SuccessPage} />
       <Route path="/anagram" exact component={AnagramCalculator} />
       <Route path="/temptracker" exact component={TempTrack} />
       
      </Router>
    </div>
  );
}

export default App;
