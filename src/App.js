import './App.css';
import HomePage from './Pages/HomePage'
import LogoPage from './Pages/LogoPage'
import GraphicDesignPage from './Pages/GraphicDesignPage'
import ModellingPage from './Pages/ModellingPage'
import WebDesignPage from './Pages/WebDesignPage'
import DHLPage from './Pages/DHLPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import React from 'react';

function App() {
  return (
     <Router>
      <div className="App">
        
        <Switch>
           <Route path="/HomePage">
             <HomePage/>
          </Route>

          <Route path="/DHLPage">
             <DHLPage/>
          </Route>

           <Route path="/LogoPage">
             <LogoPage/>
          </Route>

           <Route path="/GraphicDesignPage">
             <GraphicDesignPage/>
          </Route>

          <Route path="/ModellingPage">
             <ModellingPage/>
          </Route>

          <Route path="/WebDesignPage">
             <WebDesignPage/>
          </Route>
*
          <Route path="/">
           <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
