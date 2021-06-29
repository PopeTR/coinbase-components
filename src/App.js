import React from 'react';
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForYou from "./components/pages/ForYou"
import Home from "./components/pages/Home"
import Portfolio from "./components/pages/Portfolio"
import Trade from "./components/pages/Trade"
import Notifications from "./components/pages/Notifications"


const App = () => {

  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/trade' component={Trade} />
              <Route path='/for-you' component={ForYou} />
              <Route path='/notifications' component={Notifications} />
          </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;
