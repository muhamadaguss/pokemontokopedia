import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/layout/NavBar";
import DashBoard from "./components/layout/DashBoard";

import backgroundImage from "./pattern.png";
import Pokemon from "./components/Pokemon/Pokemon";

function App() {
  return (
    <Router>
      <div className="App" style={{ background: `url(${backgroundImage})` }}>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={DashBoard}></Route>
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
