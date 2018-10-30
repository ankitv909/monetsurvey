/*
import React, { Component } from "react";
import './App.css';
import 'typeface-roboto';
import {  Router,Switch,Route } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
import Header from "./component/header/header";
import LoginSignupContainer from "./component/login-signup/login-signup-container";
import Targetaudince from "./component/selectaudince/targetaudince/targetaudince";
import Tabbar from "./component/tabbar/tabbar";
/!*import Login from "./component/login-signup/login/login";
import Signup from "./component/login-signup/signup/signup";*!/
import Presurvey from "./component/presurvey/presurvey";
import Postsurvey from "./component/postsurvey/postsurvey";
import Selectaudince from "./component/selectaudince/selectaudince";
import Addcontent from "./component/addcontent/addcontent";
import Addimage from "./component/addcontent/addimage/addimage";
import Addtext from "./component/addcontent/addtext/addtext";
import Customizeaudience from "./component/customizeaudience/customizeaudience";
import Audiencerange from "./component/selectaudince/audiencerange/audiencerange";
import Basicinformation from "./component/selectaudince/basicinformation/basicinformation";
import Customizerange from "./component/customizeaudience/customizerange/customizerange";
import Customizelater from "./component/customizeaudience/customizelater/customizelater";
import Review from "./component/review/review";
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
          <Router history={customHistory} >
              <div >
                  <Header/>
                  <Tabbar/>
                  <Switch>
                      <Route exact path="/" component={Addcontent} />

                      <Route  path="/loginsignupcontainer" component={LoginSignupContainer} />
                      {/!*<Route path="/login" component={Login} />
                      <Route path="/signup" component={Signup} />*!/}

                      <Route  path="/corporate" component={Tabbar} />
                      <Route  path="/addcontent" component={Addcontent} />
                      <Route  path="/selectaudience" component={Basicinformation} />
                      <Route  path="/customizeaudience" component={Customizeaudience} />
                      <Route  path="/presurvey" component={Presurvey} />
                      <Route  path="/postsurvey" component={Postsurvey} />
                      <Route  path="/review" component={Review} />
                      <Route  path="/addimage" component={Addimage} />
                      <Route  path="/addtext" component={Addtext} />
                      <Route  path="/targetaudience" component={Targetaudince} />
                      <Route  path="/audiencerange" component={Audiencerange} />
                      <Route  path="/audienceinput" component={Selectaudince} />
                      <Route  path="/customizerange" component={Customizerange} />
                      <Route  path="/customizelater" component={Customizelater} />
                  </Switch>
              </div>
          </Router>
    );
  }
}

export default App;
*/
import React, { Component } from "react";
import './App.css';
import 'typeface-roboto';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Header from "./component/header/header";
import LoginSignupContainer from "./component/login-signup/login-signup-container";
/*import Addimage from "./component/addcontent/addimage/addimage";
import Addtext from "./component/addcontent/addtext/addtext";*/

import Tabbar from "./component/tabbar/tabbar";

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
class App extends Component {
    render() {
        return (
            <Router>
                <div >
                    <Header/>
                    <Switch>
                        <Route path="/corporate" component={Tabbar} />
                        <Route path="/" component={LoginSignupContainer} />
                        {/*<Route path="/addimage" component={Addimage} />
                        <Route path="/addtext" component={Addtext} />*/}
                        <Redirect to='/login'/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;