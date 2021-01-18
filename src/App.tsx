import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import home from "./home";
import AccessibleTabs from './pages/accessibleTabs'

function App() {
  return (
    <BrowserRouter>
      <header>
        <ul className="nav-list">
          <li className="nav-list__item">
            <NavLink exact className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink className="nav-link" to="/accessibleTabs">Accessible Tabs</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={home}/>
          <Route path="/accessibleTabs"
                 component={AccessibleTabs}/>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
