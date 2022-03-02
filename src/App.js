import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Business from "./pages/Business";
import GetStarted from "./pages/GetStarted";
import Home from "./pages/Home";
import Instant from "./pages/Instant";
import Learn from "./pages/Learn";
import Login from "./pages/Login";
import Sell from "./pages/Sell";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/instant">
          <Instant />
        </Route>

        <Route path="/sell">
          <Sell />
        </Route>

        <Route path="/learn">
          <Learn />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/getstarted">
          <GetStarted />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/business">
          <Business />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
