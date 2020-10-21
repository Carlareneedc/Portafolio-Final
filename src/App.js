import React from 'react';
import './App.css'

import {
BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom'
import Home from './Components/Home.jsx'
import JapanQueen from "./Components/JapanQueen"
import Gav from "./Components/Gav.jsx"
import Unimarc from "./Components/Unimarc"
import About from "./Components/About"





function App() {
  return ( 
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/JapanQueen" exact>
          <JapanQueen/>
        </Route>
        <Route path="/Gav" exact>
          <Gav/>
        </Route>
        <Route path="/Unimarc" exact>
          <Unimarc/>
        </Route>
        <Route path="/About" exact>
          <About/>
        </Route>
      </Switch>
    </div>
   
    </Router>
  );
}

export default App;