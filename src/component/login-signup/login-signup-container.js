import React, { Component } from "react";
import './login-signup-container.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar/Avatar";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link, Redirect, Switch} from "react-router-dom";   /*, Redirect*/
import Login from "../login-signup/login/login";
import Signup from "../login-signup/signup/signup";
import Route from "react-router-dom/es/Route";
const styles = theme => ({
    card: {
        maxWidth:'100%',
        justifyContent:'center',
        boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.16)'
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
    bigAvatar1: {
        width: 20,
        height: 20,
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        // boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 4px 1px -3px rgba(0, 0, 0, 0.12)',
    },
    margin: {
        margin: theme.spacing.unit,
        width:"80%",
    },
    positionAbsolute:{
        position:'absolute',
        display: 'flex',
        justifyContent: 'center',
    },
    paddingTop:{
        paddingTop: '2rem',
    },
    autopadding: {
        paddingRight:theme.spacing.unit * 0,
        paddingLeft:theme.spacing.unit * 0
    },
    tabsRoot: {
        borderBottom: '1px solid #e8e8e8',
        width:'100%'
    },
    tabsIndicator: {
        background: 'linear-gradient(to right,#1838D6,#5C95E4)',
    },
    tabRoot: {
        textTransform: 'initial',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing.unit * 4,
        '&:hover': {
            color: '#878787',
            opacity: 1,
        },
        '&$tabSelected': {
            color: '#878787',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#878787',
        },
    },
    tabSelected: {},
});

class LoginSignupContainer extends Component {
    constructor(props) {
        super(props);
        document.title = 'Monet | Login';
        this.state = {
            value: 0,
        };
        switch (this.props.location.pathname) {
            case '/login':
                this.state = {value: 0};
                break;
            case '/signup':
                this.state = {value: 1};
                break;
            default:
                this.state = {value: 0};
                break;
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div>
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                >
                    <Grid item xs={8} sm={6} md={5} lg={5} xl={4} style={{marginTop: 100,marginBottom:'4rem'}}>
                        <div className={classes.card}>
                            <Grid container
                                  direction="row"
                                  justify="center"
                                  alignItems="center"
                            >
                                <div className={classes.positionAbsolute}>
                                    <Avatar
                                        alt="login-signup"
                                        src="/assets/login-signup.svg"
                                        className={ classes.bigAvatar }
                                    />
                                </div>
                            </Grid>
                            <Grid container
                                  direction="row"
                                  justify="center"
                                  alignItems="center"
                                  item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.paddingTop}>
                                <div className={classes.root}>
                                    <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.autopadding}>
                                        <Tabs
                                            value={value}
                                            onChange={this.handleChange}
                                            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                                        >
                                            <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Login" component={Link} to="/login" />
                                            <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Sign Up" component={Link} to="/signup" />
                                        </Tabs>
                                    </Grid>
                                </div>
                            </Grid>
                            <Switch>
                                <Route  path={`${this.props.match.path}login`} component={Login} />
                                <Route path={`${this.props.match.path}signup`} component={Signup} />
                                <Redirect to='/login' />
                            </Switch>
                        </div>
                    </Grid>
                </Grid>

            </div>
        );
    }
}
LoginSignupContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(LoginSignupContainer);