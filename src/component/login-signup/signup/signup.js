import React, { Component } from "react";
import './signup.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar/Avatar";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from "@material-ui/core/Typography/Typography";
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
});

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            formData: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            formData: {[name]: value}
        });
    }
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="signup">
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                >
                    <Grid item xs={8} sm={6} md={5} lg={5} xl={3}>
                        <Card className={classes.card}>
                            <form onSubmit={this.handleSubmit}>
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
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                            indicatorColor="primary"
                                            textColor="primary"
                                            fullWidth
                                        >
                                            <Tab label="Login" component={Link} to="/login"/>
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
                                            fullWidth
                                            id="filled-name-input"
                                            label="Company name"
                                            className={classes.textField}
                                            type="name"
                                            autoComplete="current-name"
                                            margin="normal"
                                            name="company_name"
                                            onChange={this.handleInputChange}
                                        />
                                        <TextField
                                            fullWidth
                                            id="filled-adminname-input"
                                            label="Company admin name"
                                            className={classes.textField}
                                            type="name"
                                            autoComplete="current-name"
                                            margin="normal"
                                            name="company_admin_name"
                                            onChange={this.handleInputChange}
                                        />
                                        <TextField
                                            fullWidth
                                            id="filled-email-input"
                                            label="Company email"
                                            className={classes.textField}
                                            type="email"
                                            autoComplete="current-email"
                                            margin="normal"
                                            name="company_email"
                                            onChange={this.handleInputChange}
                                        />
                                        <TextField
                                            fullWidth
                                            id="filled-password-input"
                                            label="Password"
                                            className={classes.textField}
                                            type="password"
                                            autoComplete="current-password"
                                            margin="normal"
                                            name="company_password"
                                            onChange={this.handleInputChange}
                                        />
                                        <TextField
                                            fullWidth
                                            id="filled-confirmpassword-input"
                                            label="Confirm password"
                                            className={classes.textField}
                                            type="password"
                                            autoComplete="current-password"
                                            margin="normal"
                                            name="company_confirm_password"
                                            onChange={this.handleInputChange}
                                        />
                                        <TextField
                                            fullWidth
                                            id="filled-companyadrs-input"
                                            label="Company address"
                                            className={classes.textField}
                                            type="address"
                                            autoComplete="current-address"
                                            margin="normal"
                                            name="company_address"
                                            onChange={this.handleInputChange}
                                        />
                                        <Grid
                                            container
                                            direction="row"
                                            justify="flex-start"
                                            alignItems="center"
                                        >
                                            <Grid item lg={7} container
                                                  direction="row"
                                                  justify="flex-start"
                                                  alignItems="center">
                                                <TextField
                                                    fullWidth
                                                    id="filled-companycountry-input"
                                                    label="Company Country"
                                                    className={classes.textField}
                                                    type="address"
                                                    autoComplete="current-address"
                                                    margin="normal"
                                                    name="company_country"
                                                    onChange={this.handleInputChange}
                                                />
                                            </Grid>
                                            <Grid item lg={5}>
                                                <TextField
                                                    fullWidth
                                                    id="filled-zipcode-input"
                                                    label="ZIP code"
                                                    className={classes.textField}
                                                    type="address"
                                                    autoComplete="current-address"
                                                    margin="normal"
                                                    name="company_zipcode"
                                                    onChange={this.handleInputChange}
                                                />
                                            </Grid>

                                        </Grid>
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
                                    <Button type="submit" variant="contained"  className={classes.button}>
                                        Sign Up
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                        </Card>
                    </Grid>
                </Grid>

            </div>
        );
    }
}
Signup.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Signup);
