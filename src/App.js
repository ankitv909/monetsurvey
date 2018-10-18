import React, { Component } from "react";
import './App.css';
import 'typeface-roboto';
import { HashRouter,Switch,Route } from 'react-router-dom'
import Login from "./component/login-signup/login";
import Signup from "./component/login-signup/signup/signup";
import Addimage from "./component/addcontent/addimage/addimage";
import Addtext from "./component/addcontent/addtext/addtext";
import Header from "./component/header/header";
import Tabbar from "./component/tabbar/tabbar";
import Addcontent from "./component/addcontent/addcontent";
import Selectaudince from "./component/selectaudince/selectaudince";
import Customizeaudience from "./component/customizeaudience/customizeaudience";
import Presurvey from "./component/presurvey/presurvey";
import Postsurvey from "./component/postsurvey/postsurvey";
import Review from "./component/review/review";
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
/*const theme = createMuiTheme(
    {
        typography: {
            useNextVariants: true,
        },
    }
);*/
class App extends Component {
  render() {
    return (
          <HashRouter>
              <div >
                  <Header/>
                  <Tabbar/>
                  <Switch>
                      <Route exact={true} path="/" component={Addcontent} />
                      <Route exact={true} path="/login" component={Login} />
                      <Route exact={true} path="/signup" component={Signup} />
                      <Route exact={true} path="/addcontent" component={Addcontent} />
                      <Route exact={true} path="/selectaudience" component={Selectaudince} />
                      <Route exact={true} path="/customizeaudience" component={Customizeaudience} />
                      <Route exact={true} path="/presurvey" component={Presurvey} />
                      <Route exact={true} path="/postsurvey" component={Postsurvey} />
                      <Route exact={true} path="/review" component={Review} />
                      <Route exact={true} path="/addimage" component={Addimage} />
                      <Route exact={true} path="/addtext" component={Addtext} />
                  </Switch>
              </div>
          </HashRouter>
    );
  }
}

export default App;
