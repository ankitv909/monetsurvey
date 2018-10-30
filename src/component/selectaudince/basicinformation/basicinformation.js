import React, { Component } from "react";
import './basicinformation.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Hidden from "@material-ui/core/Hidden/Hidden";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";

const drawerWidth = 300;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 'auto',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
        paddingBottom: '2rem',
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
            borderRight:'none'
        },
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing.unit * 0,
        boxShadow:'none',
        border:'1px solid rgba(0, 0, 0, 0.12)',
        borderRadius:'0',
        paddingTop:'2rem'
    },
    content1:{
        marginLeft: theme.spacing.unit * 8,
        marginRight: theme.spacing.unit * 8,
        boxShadow:'none'
    },
    shadownone:{
        boxShadow:'none'
    },
    textTransform:{
        textTransform: 'none',
        textAlign:'left',
        paddingTop:'0.4rem',
        color:'rgba(0, 0, 0, 0.54)'
    },
    paddingTop: {
        paddingTop:'4rem'
    },
    paddingTop1: {
        paddingTop:'2rem'
    },
    font:{
        fontSize: '12px',
        color:'rgba(0, 0, 0, 0.54)'
    },
    root1: {
        /*...theme.mixins.gutters(),*/
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
        backgroundColor: '#ffff !important',
        boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 10px 0px rgba(0, 0, 0, 0.12)',
        width: 'auto',
        height: '40px',
        padding: '0 16px',
        minwidth: '48px',
        borderRadius: '24px',
        textTransform:'none',
        fontSize: '0.875rem',
        color: 'rgba(0, 0, 0, 0.54)'
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    button1: {
        margin: theme.spacing.unit,
        background: 'linear-gradient(270deg,#5C95E4 20%,#1838D6)',
        borderRadius: '30px',
        padding: '6px 40px',
        color:'#ffff',
        textTransform:'none',
    },
    formControl: {
        marginTop: theme.spacing.unit * 2,
        minWidth: 240,
        maxWidth:'100%',
        width:'20rem'
    },
    button2: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    radio: {
        color: 'rgb(255, 255, 255)',
        '&$checked': {
            color: '#4fb49e',
        },
        padding:'4px'
    },
    checked: {},
    radioshadow:{
        boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 10px 0px rgba(0, 0, 0, 0.12)',
        borderRadius:'30px'
    }
});

class Basicinformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            mobileOpen: false,
            category: '',
            country:'',
            open: false,
            open1:false

        };
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handlechange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleclose = () => {
        this.setState({ open1: false });
    };

    handleopen = () => {
        this.setState({ open1: true });
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes, theme } = this.props;

        const drawer = (
            <Grid container direction="row" justify="center" alignItems="center" item xs={12} sm={12} md={12} lg={12}
                  xl={12}>
                <Grid item xs={12} sm={12} md={9} lg={10} xl={9} >
                    <Paper className={classes.shadownone}>
                        {/*  <div className={classes.toolbar} />*/}
                        <List >
                            <ListItem >
                                <ListItemText  primary="Info" />
                                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                    <img src="/assets/note-interface-symbol.svg" alt="check" />
                                </Grid>
                            </ListItem>
                            <li>
                                <Divider />
                            </li>
                            <ListItem >
                                <ListItemText primary="Select range"/>
                                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                    <img src="/assets/info.svg" alt="check" />
                                </Grid>
                            </ListItem>
                            <li>
                                <Divider />
                            </li>
                            <ListItem >
                                <ListItemText primary="Trageted Audience" />
                                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                    <img src="/assets/info.svg" alt="check" />
                                </Grid>
                            </ListItem>
                            <li>
                                <Divider />
                            </li>
                            <ListItem >
                                <ListItemText primary="Audience input" />
                                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                    <img src="/assets/info.svg" alt="check" />
                                </Grid>
                            </ListItem>
                            <li>
                                <Divider />
                            </li>
                        </List>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            item xs={12} md={12} sm={12} lg={12} xl={12} className={classes.paddingTop}>
                            <Grid item xs={5} md={6} sm={7} lg={6} xl={8}>
                                <img src="/assets/0.svg" alt="80"/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );

        return <div className="basicinformation">

            <Grid container direction="row" justify="center" alignItems="center" item xs={12} sm={12} md={12} lg={12}
                  xl={12}>
                <Grid item xs={12} sm={11} md={12} lg={12} xl={12}>
                    <div className={classes.root}>
                        <Hidden mdUp>
                            <Drawer
                                variant="temporary"
                                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                open={this.state.mobileOpen}
                                onClose={this.handleDrawerToggle}
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <Hidden smDown implementation="css">
                            <Drawer
                                variant="permanent"
                                open
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <Grid item xs={12} sm={12} md={8} lg={9} xl={10} className={classes.content}>
                            <Paper className={classes.content1} >
                                {/*  <div className={classes.toolbar} />*/}
                                <IconButton
                                    color="inherit"
                                    aria-label="Open drawer"
                                    onClick={this.handleDrawerToggle}
                                    className={classes.navIconHide}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography className={classes.textTransform} variant="button" gutterBottom>
                                    Basic information
                                </Typography>

                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.paddingTopbottom}
                                      container
                                      direction="row"
                                      justify="flex-start"
                                      alignItems="flex-start">
                                    <Paper className={classes.shadownone}>
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                                            <form autoComplete="off">
                                                <FormControl className={classes.formControl}>
                                                    <TextField
                                                        id="standard-name-input"
                                                        label="Campaign Name"
                                                        className={classes.textField}
                                                        type="name"
                                                        autoComplete="current-name"
                                                    />
                                                </FormControl>
                                            </form>

                                            <form autoComplete="off">
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel htmlFor="demo-controlled-open-select">Category</InputLabel>
                                                    <Select
                                                        open={this.state.open}
                                                        onClose={this.handleClose}
                                                        onOpen={this.handleOpen}
                                                        value={this.state.category}
                                                        onChange={this.handleChange}
                                                        inputProps={{
                                                            name: 'category',
                                                            id: 'demo-controlled-open-select',
                                                        }}
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </form>

                                            <form autoComplete="off">
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel htmlFor="demo-controlled-open-select-1">Country</InputLabel>
                                                    <Select
                                                        open={this.state.open1}
                                                        onClose={this.handleclose}
                                                        onOpen={this.handleopen}
                                                        value={this.state.country}
                                                        onChange={this.handlechange}
                                                        inputProps={{
                                                            name: 'country',
                                                            id: 'demo-controlled-open-select-1',
                                                        }}
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={21}>india</MenuItem>
                                                        <MenuItem value={22}>USA</MenuItem>
                                                        <MenuItem value={23}>UK</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </form>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </Paper>
                            <Grid
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="flex-end"
                                item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.paddingTop}>
                                <Button type="submit" variant="contained" component={Link} to="/audiencerange"  className={classes.button1}>
                                    Next
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>;
    }
}
Basicinformation.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Basicinformation);
