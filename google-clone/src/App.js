import React from"react";
import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
           <Route path="/search">
             <h1>This is the search page</h1>
           </Route>
           <Route path="/">
             <Home />
           </Route>
         </Switch>
       </Router>
    </div>
 );
}
    
 

export default App;
