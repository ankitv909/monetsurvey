import React, { Component } from "react";
import './header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
/*import AccountCircle from '@material-ui/icons/AccountCircle';*/
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';



const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    positionAbsolute:{
        position:"absolute",
        right:"0",
    },
    textTransform :{
        textTransform: "none",
        color:'rgba(0, 0, 0, 0.54)',
        fontweight:'600'
    },
    barcolor:{
        backgroundColor:"#ffff",
    },
    iconbutton:{
        borderRadius:'0'
    }
};

class Header extends Component {
        state = {
            auth: true,
            anchorEl: null,
        };
    handleChange = event => {
        this.setState({ auth: event.target.checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className="">
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center" spacing={0}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className={classes.root}>
                            <AppBar position="static"  className={classes.barcolor}>
                                <Toolbar>
                                    <Hidden lgDown xlDown>
                                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                            <MenuIcon />
                                        </IconButton>
                                    </Hidden>
                                    <Grid item xs={3} sm={2} md={2} lg={1} xl={1}>
                                    <img src="/assets/monet_logo.svg" alt="logo" className="img-responsive"/>
                                    </Grid>
                                    {auth && (
                                        <div className={classes.positionAbsolute}>
                                            <IconButton
                                                className={classes.iconbutton}
                                                aria-owns={open ? 'menu-appbar' : null}
                                                aria-haspopup="true"
                                                onClick={this.handleMenu}
                                                color="inherit"
                                            >
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={1}>
                                                    <img src="/assets/user1.svg" alt="logo" className="img-responsive"/>
                                                </Grid>
                                                <Typography variant="caption" align="left" className={classes.textTransform} gutterBottom>
                                                   Monet Networks<br/>Administrator
                                                </Typography>
                                            </IconButton>
                                            <Menu
                                                id="menu-appbar"
                                                anchorEl={anchorEl}
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                open={open}
                                                onClose={this.handleClose}
                                            >
                                                <FormGroup>
                                                    <FormControlLabel
                                                        control={
                                                            <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
                                                        }
                                                        label={auth ? 'Logout' : 'Login'}
                                                    />
                                                </FormGroup>
                                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                            </Menu>
                                        </div>
                                    )}
                                </Toolbar>
                            </AppBar>
                </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
Header.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles) (Header);
