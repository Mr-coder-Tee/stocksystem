import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AddStock, ViewStock, Sales, Navigation } from "./Comp/index";
import { stock, Customers, products } from "./Data/index";
import Calc from "./Data/CalcAPI";

function App() {
  return (
    <Router>
      <div className="appContainer">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <ViewStock  />
          </Route>

          <Route exact path="/addstock">
            <AddStock />
          </Route>
          <Route exact path="/sales">
            <Sales products={products} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
