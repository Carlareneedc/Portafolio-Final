import React from 'react';
import './App.css'

import {
BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom'
import Home from './Components/Home.jsx'





function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        
        
      </Switch>
    </div>
   
    </Router>
  );
}

export default App;