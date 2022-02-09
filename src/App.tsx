import React from 'react';
import './App.css';
import { RegistrationPage } from './components/RegistrationPage';
import { SuccessPage } from './components/SuccessPage';
import { AnagramCalculator} from './components/AnagramCalculator';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
       <Route path="/" exact component={RegistrationPage} />
       <Route path="/registration" exact component={RegistrationPage} />
       <Route path="/success" exact component={SuccessPage} />
       <Route path="/anagram" exact component={AnagramCalculator} />
      </Router>
    </div>
  );
}

export default App;
