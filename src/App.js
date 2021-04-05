import './App.css';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Deals from './components/Deals/Deals';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Checkout/Checkout';
import ManageProduct from './components/Admin/ManageProduct';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route path="/home">
              <Header />
              <Home />
            </Route>
            <PrivateRoute path="/orders">
              <Header />
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/deals">
              <Header />
              <Deals />
            </Route>
            <Route path="/login">
              <Header />
              <Login />
            </Route>
            <PrivateRoute path="/checkout/:id">
              <Header />
              <Checkout />
            </PrivateRoute>
            <Route path="*">
              <Header />
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
