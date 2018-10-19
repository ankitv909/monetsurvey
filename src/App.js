import React, { Component } from "react";
import './App.css';
import 'typeface-roboto';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Header from "./component/header/header";
import LoginSignupContainer from "./component/login-signup/login-signup-container";
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
class App extends Component {
  render() {
    return (
          <Router>
              <div >
                  <Header/>
                  {/*<Tabbar/>*/}
                  <Switch>
                      <Route path="/" component={LoginSignupContainer} />
                      {/*
                      <Route exact={true} path="/addcontent" component={Addcontent} />
                      <Route exact={true} path="/selectaudience" component={Selectaudince} />
                      <Route exact={true} path="/customizeaudience" component={Customizeaudience} />
                      <Route exact={true} path="/presurvey" component={Presurvey} />
                      <Route exact={true} path="/postsurvey" component={Postsurvey} />
                      <Route exact={true} path="/review" component={Review} />
                      <Route exact={true} path="/addimage" component={Addimage} />
                      <Route exact={true} path="/addtext" component={Addtext} />*/}
                  </Switch>
              </div>
          </Router>
    );
  }
}

export default App;
