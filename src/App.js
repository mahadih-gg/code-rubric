import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Documentation from './components/Documentation/Documentation';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';

export const UserContext = createContext()

function App() {

  const [user, setUser] = useState([])

  return (
    <UserContext.Provider value={[user, setUser]}>

      <Router>
        <div className="app">
          <Switch>
            <Route>
              <Header></Header>
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/documentation">
              <Documentation />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
