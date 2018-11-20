import React, { Component } from "react";
import './header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
import {Link} from "react-router-dom";
import Divider from "@material-ui/core/Divider/Divider";
import Button from "@material-ui/core/Button/Button";
import Avatar from "@material-ui/core/Avatar/Avatar";


import { connect } from 'react-redux'
import {compose} from "redux";

const styles = theme => ( {
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
       background:'linear-gradient(270deg,#FCFCFC,#F3F9FF 80%,#F3F9FF)',
        backgroundColor:'linear-gradient(270deg,#FCFCFC,#F3F9FF 80%,#F3F9FF)'
    },
    iconbutton:{
        borderRadius:'0',
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&:active': {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
        },
    },
    button: {
        margin: theme.spacing.unit,
        boxShadow:'6px 6px Blur12px',
        textTransform:'none',
        width: 'auto',
        height: 'auto',
        color:'#878787',
        backgroundColor:'#FFFFFF'
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    avatar: {
        width: 20,
        height: 20,
        marginLeft: theme.spacing.unit,
    },
    color3448AC:{
        color:'#3448AC',
        justifyContent:'center'
    }
});

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
                                    <Grid item xs={4} sm={2} md={2} lg={1} xl={1}>
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
                                                <Grid container
                                                   direction="row"
                                                   justify="flex-end"
                                                   alignItems="center" >
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={1}>
                                                    <img src="/assets/user1.svg" alt="logo" className="img-responsive"/>
                                                </Grid>
                                                <Typography variant="caption" align="left" className={classes.textTransform} gutterBottom>
                                                   Monet Networks<br/>Administrator
                                                </Typography>
                                                </Grid>
                                            </IconButton>
                                            <Grid
                                                container
                                                direction="row"
                                                justify="center"
                                                alignItems="center"
                                                item xs={12} lg={12} md={12} sm={12} xl={12}>
                                                <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
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
                                            style={{width:'auto',height:'auto',overflow:'hidden'}}>
                                                <FormGroup>
                                                    <FormControlLabel
                                                        control={
                                                            <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
                                                        }
                                                        label={auth ? 'Logout' : 'Login'}
                                                    />
                                                </FormGroup>
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justify="center"
                                                    alignItems="center"
                                                    item xs={12} lg={12} md={12} sm={12} xl={12}>
                                                <Grid item xs={6} lg={6} md={6} sm={6} xl={6}>
                                                    <img src="/assets/user1.svg" alt="img"/>
                                                </Grid>
                                                    <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                                        <MenuItem component={Link} to="/loginsignupcontainer" onClick={this.handleClose} className={classes.color3448AC}>Reports</MenuItem>
                                                        <Divider/>
                                                    </Grid>
                                                    <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                                    <MenuItem component={Link} to="/loginsignupcontainer" onClick={this.handleClose} className={classes.color3448AC}>Profile</MenuItem>
                                                        <Divider/>
                                                    </Grid>
                                                    <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                                        <MenuItem component={Link} to="/loginsignupcontainer" onClick={this.handleClose} className={classes.color3448AC}>Dashboard</MenuItem>
                                                        <Divider/>
                                                    </Grid>
                                                    <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                                        <MenuItem component={Link} to="/loginsignupcontainer" onClick={this.handleClose} className={classes.color3448AC}>Reports</MenuItem>
                                                        <Divider/>
                                                    </Grid>
                                                </Grid>
                                                <Grid container
                                                      direction="row"
                                                      justify="center"
                                                      alignItems="flex-end"
                                                      item xs={12} lg={12} md={12} sm={12} xl={12}>
                                                    <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
                                                        Logout
                                                        <Avatar alt="Remy Sharp" src="/assets/logout.svg" className={classes.avatar} />
                                                    </Button>
                                                </Grid>
                                            </Menu>
                                            </Grid>
                                            </Grid>
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

export default compose(
    withStyles(styles),
    connect(),
)(Header);
