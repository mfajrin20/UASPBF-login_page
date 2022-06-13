import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./login/Login";
import Join from "./login/Join";
import Landing from "./pages/Landing";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Dashboard from "./dashboard/Dashboard";
import About from "./about/About"
import contact from "./contact/contact";
import Series from "./series/Series";
import PermainanVideo from "./permainanvideo/PermainanVideo"
import Hero from "./hero/Hero";
import News from "./news/News"


function Routes() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={contact} />
          <Route path="/series" component={Series} />
          <Route path="/news" component={News} />
          <Route path="/permainanvideo" component={PermainanVideo} />
          {/* <Route exact path="/" component={Login} /> */}
          <Route path="/join" component={Join} />
          <Route path="/landing" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/details/:name?" component={Details} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}



export default Routes;