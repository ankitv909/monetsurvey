import React, { Component } from "react";
import './login-signup-container.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar/Avatar";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from "react-router-dom";
import { Route } from 'react-router-dom'
import Login from "./login/login";
import Signup from "./signup/signup";

const styles = theme => ({
    card: {
        maxWidth:'100%',
        justifyContent:'center',

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
    }
});

class LoginSignupContainer extends Component {
    constructor(props) {
        super(props);
        document.title = 'Monet | Login';
        this.state = {
            value: 0,
        };
        console.log('in constructor', this.props.location.pathname);
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
                    <Grid item xs={8} sm={6} md={5} lg={5} xl={3} style={{marginTop: 100}}>
                        <Card className={classes.card}>
                            <Grid container
                                  direction="row"
                                  justify="center"
                                  alignItems="center"
                            >
                                <div className={classes.positionAbsolute}>
                                    <Avatar
                                        alt="login-signup"
                                        src="/assets/login-signup.svg"
                                        className={ classes.bigAvatar}
                                    />
                                </div>
                            </Grid>
                            <Grid container
                                  direction="row"
                                  justify="center"
                                  alignItems="center"
                                  item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.paddingTop}>
                            <Paper className={classes.root}>
                                <Grid container item xs={12} sm={10} md={8} lg={8} xl={12}>
                                <Tabs
                                    value={value}
                                    onChange={this.handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    fullWidth
                                >
                                    <Tab className="login-shadow" label="Login" component={Link} to="/login"/>
                                    <Tab label="Sign Up" component={Link} to="/signup" />
                                </Tabs>
                                </Grid>
                            </Paper>
                            </Grid>
                            <Route path={`${this.props.match.path}login`} component={Login} />
                            <Route path={`${this.props.match.path}signup`} component={Signup} />
                        </Card>
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
