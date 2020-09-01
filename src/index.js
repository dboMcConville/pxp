import React from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./views/About";
import My404Component from "./components/My404Component";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MerchantPage from "./views/MerchantPage";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div id="page-container">
          <div id="content-wrap">
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/doordash" exact component={MerchantPage} />
              <Route path="/tavour" exact component={MerchantPage} />
              <Route path="/home_chef" exact component={MerchantPage} />
              <Route path="/fetch_rewards" exact component={MerchantPage} />
              <Route path="/cash_app" exact component={MerchantPage} />
              <Route path="*" exact={true} component={My404Component} />
            </Switch>
          </div>
          <Footer id="footer" />
        </div>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
