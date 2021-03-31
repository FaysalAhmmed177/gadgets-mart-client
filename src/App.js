import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
         <Route path="/">
           
         </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
