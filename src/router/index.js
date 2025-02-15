import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import StatesCards from "../components/StatesCards";
import ParticularState from "../components/ParticularState";
import Footer from "../components/Footer";
import NotFound from "../components/NotFound";

import destination from "../data/allDestinations.js";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/all-states">
          <StatesCards destination={destination} />
        </Route>
        <Route path="/states/:state">
          <ParticularState destination={destination} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
