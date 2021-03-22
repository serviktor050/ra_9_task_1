import "./App.css";
import Menu from "./components/Menu.jsx";
import HomePage from "./components/HomePage.jsx";
import DriftPage from "./components/DriftPage.jsx";
import ForzaPage from "./components/ForzaPage.jsx";
import TimeAttackPage from "./components/TimeAttackPage.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Switch>
            <Route path="/forza" component={ForzaPage} />
            <Route path="/timeattack" component={TimeAttackPage} />
            <Route path="/drift" component={DriftPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
