import React, { Component } from "react";
import './login.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar/Avatar";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from "@material-ui/core/Typography/Typography";
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";


function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};
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
        boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 4px 1px -3px rgba(0, 0, 0, 0.12)',
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
    button: {
        margin: theme.spacing.unit,
        background: 'linear-gradient(270deg,#5C95E4 20%,#1838D6)',
        borderRadius: '30px',
        padding: '6px 40px',
        color:'#ffff',
        textTransform:'none',
    },
    textTransform :{
        textTransform: "none",
        color:'rgba(0, 0, 0, 0.54)',
        fontweight:'600'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    boxShadow:{
        boxShadow: '0px 1px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(50, 19, 19, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)',
    }
});

class Login extends Component {
    state = {
        value: 0,
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className="login">
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                >
                    <Grid item xs={8} sm={6} md={5} lg={5} xl={3}>
                        <Card className={classes.card}>
                            <Grid container
                                  direction="row"
                                  justify="center"
                                  alignItems="center"
                            >
                                <div className={classes.positionAbsolute}>
                                    <Avatar
                                        alt="Adelle Charles"
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

                            <div className={classes.paddingTop}>
                                <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                >
                                <FormControl className={classes.margin}>
                                    <TextField
                                        className={classes.textField}
                                        id="input-with-icon-textfield"
                                        label="username"
                                        margin="normal"
                                        autoComplete="username"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Avatar
                                                        alt="Adelle Charles"
                                                        src="/assets/loginuser.svg"
                                                        className={ classes.bigAvatar1}
                                                    />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <TextField
                                        className={classes.textField}
                                        id="input-with-icon-textfield"
                                        label="password"
                                        margin="normal"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Avatar
                                                        alt="Adelle Charles"
                                                        src="/assets/lock.svg"
                                                        className={ classes.bigAvatar1}
                                                    />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </FormControl>
                                </Grid>
                            </div>

                            <Grid
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="center"
                                item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.paddingTop}>
                                <Grid  item xs={12} sm={12} md={12} lg={4} xl={12} >
                                    <Typography variant="button" gutterBottom className={classes.textTransform}>
                                        Forget password?
                                    </Typography>
                                </Grid>
                                <Grid  item xs={12} sm={12} md={12} lg={4} xl={12} >
                                    <Button variant="contained"  className={classes.button}>
                                       Login
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>

            </div>
        );
    }
}
Login.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Login);
