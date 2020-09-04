import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import SpacexState from './context/SpacexState';

import {
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom';
function App() {
  return (
   
      <SpacexState>
        <Router>
          <div className="App">

            <Switch>
              <Route  path='/' component={Home} />
            </Switch>
    
         </div>
        
     
      </Router>
      </SpacexState>
     
   
  );
}

export default App;
