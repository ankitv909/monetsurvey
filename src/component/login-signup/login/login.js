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
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import FormControl from "@material-ui/core/FormControl/FormControl";

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
        borderRadius: '20%'
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
        marginLeft: theme.spacing.unit ,
        marginRight: theme.spacing.unit,
        color:'#878787'
    },
    boxShadow:{
        boxShadow: '0px 1px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(50, 19, 19, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)',
    },
    loginpadding:{
            paddingTop: '0rem',
        paddingBottom:'2rem'
    }
});

class Login extends Component {
    constructor(props) {
        super(props);
        document.title = 'Monet | Login';
        this.state = {
            value: 0,
            formData: {
                company_email : {value: '', isValid: false, isUntouched: true},
                company_password : {value: '', isValid: false, isUntouched: true},
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
        const isValid = Login.handleValidation(target.name, value);
        let {formData} = this.state;
        formData[name] = {value, isValid};
        this.setState({
            formData
        });
    }
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }
    static handleValidation(type, value) {
        if (type === 'company_email')
            return !!value.match(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,3}$/);
        else if (type === 'company_password' || type === 'company_confirm_password')
            return !!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&'])[^ ]{8,}$/);
    }
    render() {
        const { classes } = this.props;
        const { formData } = this.state;
        let isEnabled = false;
        for (let key in formData) {
            isEnabled = formData[key].isValid;
        }
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
                            <FormControl className={classes.formControl} error={!formData.company_email.isValid && !formData.company_email.isUntouched} aria-describedby="company-email-error-text" fullWidth>
                            <TextField
                                fullWidth
                                className={classes.textField}
                                id="company-email-error-text"
                                label="username"
                                placeholder="Company Email"
                                margin="normal"
                                autoComplete="username"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" id="company-email" onChange={this.handleInputChange}>
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
                                <FormHelperText id="company-email-error-text" style={{visibility: formData.company_email.isValid || formData.company_email.isUntouched ? 'hidden' : 'visible'}}>Error</FormHelperText>
                            </FormControl>

                            <FormControl className={classes.formControl} error={!formData.company_password.isValid && !formData.company_password.isUntouched} aria-describedby="company-password-error-text" fullWidth>
                            <TextField
                                placeholder="Company Password"
                                fullWidth
                                className={classes.textField}
                                id="company-password"
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
                                <FormHelperText id="company-password-error-text" style={{visibility: formData.company_password.isValid || formData.company_password.isUntouched ? 'hidden' : 'visible'}}>Error</FormHelperText>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                        item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.loginpadding}>
                        <Grid item xs={12} sm={12} md={12} lg={4} xl={4} >
                            <Typography variant="button" gutterBottom className={classes.textTransform}>
                                Forget password?
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4} xl={4} >
                            <Button type="submit" variant="contained"  className={classes.button} disabled={!isEnabled}> {/*style={{visibility: isEnabled ? 'visible' : 'hidden'}}*/}
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
