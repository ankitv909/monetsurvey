import React, { Component } from "react";
import './signup.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
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
        document.title = 'Monet | Sign up';
        this.state = {
            formData: {
                company_name : {value: '', isValid: false},
                company_admin_name : {value: '', isValid: false},
                company_email : {value: '', isValid: false},
                company_password : {value: '', isValid: false},
                company_confirm_password : {value: '', isValid: false},
                company_address : {value: '', isValid: false},
                company_country : {value: '', isValid: false},
                company_zipcode : {value: '', isValid: false}
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        event.persist();
        console.log(event);
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const isValid = Signup.handleValidation(target.name, value);
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
        if (type === 'company_name' || type === 'company_admin_name' || type === 'company_address' || type === 'company_country') {
            return value.length > 3 && !!value.match(/^[a-zA-Z ]*$/);
        } else if (type === 'company_email') {
            return !!value.match(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,3}$/);
        } else if (type === 'company_password' || type === 'company_confirm_password') {
            return !!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&'])[^ ]{8,}$/);
        } else if (type === 'company_zipcode') {
            return (value.length >= 6 && !!value.match(/^[0-9]*$/));
        }
    }
    render() {
        const { classes } = this.props;
        const { formData } = this.state;
        let isEnabled = false;
        for (let key in formData) {
            isEnabled = formData[key].isValid;
        }
        return (
            <div className="signup">
                <title>Signup</title>
                <form onSubmit={this.handleSubmit}>
                    <div className={classes.paddingTop}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <div className={classes.margin}>
                                <FormControl className={classes.formControl} error={!formData.company_name.isValid} aria-describedby="company-name-error-text" fullWidth>
                                    <InputLabel htmlFor="company-name">Company Name</InputLabel>
                                    <Input id="company-name" name="company_name" onChange={this.handleInputChange}/>
                                    <FormHelperText id="company-name-error-text">Error</FormHelperText>
                                </FormControl>

                                <FormControl className={classes.formControl} error={!formData.company_admin_name.isValid} aria-describedby="company-admin-name-error-text" fullWidth>
                                    <InputLabel htmlFor="company-admin-name">Company admin name</InputLabel>
                                    <Input id="company-admin-name" name="company_admin_name" onChange={this.handleInputChange} />
                                    <FormHelperText id="company-admin-name-error-text">Error</FormHelperText>
                                </FormControl>

                                <FormControl className={classes.formControl} error={!formData.company_email.isValid} aria-describedby="company-email-error-text" fullWidth>
                                    <InputLabel htmlFor="company-email">Company email</InputLabel>
                                    <Input id="company-email" name="company_email" onChange={this.handleInputChange} />
                                    <FormHelperText id="company-email-error-text">Error</FormHelperText>
                                </FormControl>

                                <FormControl className={classes.formControl} error={!formData.company_password.isValid} aria-describedby="company-password-error-text" fullWidth>
                                    <InputLabel htmlFor="company-password">Company password</InputLabel>
                                    <Input id="company-password" name="company_password" onChange={this.handleInputChange} />
                                    <FormHelperText id="company-password-error-text">Error</FormHelperText>
                                </FormControl>

                                <FormControl className={classes.formControl} error={!formData.company_confirm_password.isValid} aria-describedby="company-confirm-password-error-text" fullWidth>
                                    <InputLabel htmlFor="company-confirm-password">Company confirm password</InputLabel>
                                    <Input id="company-confirm-password" name="company_confirm_password" onChange={this.handleInputChange} />
                                    <FormHelperText id="company-confirm-password-error-text">Error</FormHelperText>
                                </FormControl>

                                <FormControl className={classes.formControl} error={!formData.company_address.isValid} aria-describedby="company-address-error-text" fullWidth>
                                    <InputLabel htmlFor="company-address">Company address</InputLabel>
                                    <Input id="company-address" name="company_address" onChange={this.handleInputChange} />
                                    <FormHelperText id="company-address-error-text">Error</FormHelperText>
                                </FormControl>
                                <Grid
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="center"
                                >
                                    <Grid item lg={6} container
                                          direction="row"
                                          justify="flex-start"
                                          alignItems="center">
                                        <FormControl className={classes.formControl} error={!formData.company_country.isValid} aria-describedby="company-country-error-text" fullWidth>
                                            <InputLabel htmlFor="company-country">Company country</InputLabel>
                                            <Input id="company-country" name="company_country" onChange={this.handleInputChange} />
                                            <FormHelperText id="company-country-error-text">Error</FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item lg={1}/>
                                    <Grid item lg={5}>
                                        <FormControl className={classes.formControl} error={!formData.company_zipcode.isValid} aria-describedby="company-zipcode-error-text" fullWidth>
                                            <InputLabel htmlFor="company-zipcode">Company country</InputLabel>
                                            <Input id="company-zipcode" name="company_zipcode" onChange={this.handleInputChange} />
                                            <FormHelperText id="company-zipcode-error-text">Error</FormHelperText>
                                        </FormControl>
                                    </Grid>

                                </Grid>
                            </div>
                        </Grid>
                    </div>
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                        item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.paddingTop}>
                        <Grid  item xs={12} sm={12} md={12} lg={4} xl={12} >
                            <Button type="submit" variant="contained"  className={classes.button} style={{visibility: isEnabled ? 'visible' : 'hidden'}}>
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </div>
        );
    }
}
Signup.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Signup);
