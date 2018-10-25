import React, { Component } from "react";
import './login.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar/Avatar";
import Typography from "@material-ui/core/Typography/Typography";
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";

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
    constructor(props) {
        super(props);
        document.title = 'Monet | Login';
        this.state = {
            value: 0,
            formData: {
                company_email : {value: ''},
                company_password : {value: ''}
            }
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
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        let {formData} = this.state;
        formData[name] = {value};
        this.setState({
            formData
        });
    }
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="login">
                <title>Login</title>
                <form onSubmit={this.handleSubmit}>
                <div className={classes.paddingTop}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <div className={classes.margin}>
                            <TextField
                                fullWidth
                                className={classes.textField}
                                id="input-with-icon-textfield"
                                label="username"
                                margin="normal"
                                autoComplete="username"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Avatar
                                                alt="user"
                                                src="/assets/loginuser.svg"
                                                className={ classes.bigAvatar1}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                                name="company_email"
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                fullWidth
                                className={classes.textField}
                                id="input-with-icon-textfield"
                                label="password"
                                margin="normal"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Avatar
                                                alt="lock"
                                                src="/assets/lock.svg"
                                                className={ classes.bigAvatar1}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                                name="company_password"
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </Grid>
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
                        <Grid item xs={12} sm={12} md={12} lg={4} xl={12} >
                            <Button type="submit" variant="contained"  className={classes.button}>
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                </form>
            </div>
        );
    }
}
Login.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Login);
