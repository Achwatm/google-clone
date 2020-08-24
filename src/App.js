import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
function App() {
  return (
    // BEM
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
              <h1>search page</h1>    
          </Route> 
          <Route path="/">
            <Home />
          </Route>  

        </Switch>
       
          {/* Home (the one with the search on) */}
          
          {/* SearchPage (Result page) */}
      </Router>
      
    </div>
  );
}

export default App;
