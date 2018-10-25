import React, { Component } from "react";
import './customizelater.css';
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
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";

const drawerWidth = 300;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 500,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
        paddingBottom: '2rem'
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
        marginLeft: theme.spacing.unit * 6,
        marginRight: theme.spacing.unit * 6,
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
        height: 'auto',
        padding: '0px 30px 0px 0px',
        minwidth: '48px',
        borderRadius: '24px',
        textTransform:'none',
        fontSize: '0.7rem',
        color: 'rgb(135, 135, 135)'
    },
    button1: {
        margin: theme.spacing.unit,
        background: 'linear-gradient(270deg,#5C95E4 20%,#1838D6)',
        borderRadius: '30px',
        padding: '6px 40px',
        color:'#ffff',
        textTransform:'none',
    },
    skipbutton:{
        color: 'rgb(135, 135, 135)',
        width: 'auto',
        height: 'auto',
        margin: '8px',
        padding: '6px 40px',
        minwidth: '48px',
        fontSize: '0.7rem',
        boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 4px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12)',
        borderRadius: '30px',
        textTransform: 'none',
        backgroundColor: '#ffff !important',
    },
    addmore: {
        margin: '0',
        background: 'linear-gradient(270deg,#5C95E4 20%,#1838D6)',
        borderRadius: '30px',
        padding: '6px 30px',
        color:'#ffff',
        textTransform:'none',
    },
    textField: {
        /*marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,*/
        width: '100%',
    },
});

class Customizelater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            mobileOpen: false,
        };
    }

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes, theme } = this.props;

        const drawer = (
            <Grid container direction="row" justify="center" alignItems="center" item xs={12} sm={12} md={12} lg={12}
                  xl={12}>
                <Grid item xs={12} sm={12} md={12} lg={10} xl={12}>
                    <Paper className={classes.shadownone}>
                        {/*  <div className={classes.toolbar} />*/}
                        <List >
                            <ListItem >
                                <ListItemText  primary="Quota" />
                                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                    <img src="/assets/success.svg" alt="check" />
                                </Grid>
                            </ListItem>
                            <li>
                                <Divider />
                            </li>
                            <ListItem >
                                <ListItemText primary="Customize Range"/>
                                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                    <img src="/assets/success.svg" alt="check" />
                                </Grid>
                            </ListItem>
                            <li>
                                <Divider />
                            </li>
                            <ListItem >
                                <ListItemText primary="Customize Later" />
                                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                    <img src="/assets/note-interface-symbol.svg" alt="check" />
                                </Grid>
                            </ListItem>
                            <li>
                                <Divider />
                            </li>
                            <div className={classes.toolbar} />
                            <ListItem >
                                <ListItemText primary="Quotas" />
                                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                    {/*<img src="/assets/info.svg" alt="check" />*/}
                                </Grid>
                            </ListItem>
                            <li>
                                <Divider />
                            </li>
                            <ListItem >
                                <ListItemText primary="Demo Quota" />
                                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                    <img src="/assets/info.svg" alt="check" />
                                </Grid>
                            </ListItem>
                            <li>
                            </li>
                        </List>
                    </Paper>
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                        item xs={12} md={12} sm={12} lg={12} xl={12} >
                        <Grid item xs={5} md={6} sm={8} lg={8} xl={12} className={classes.paddingTop1}>
                            <Button type="submit" variant="contained"  className={classes.addmore}>
                                Add more
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );

        return <div className="audiencerange">

            <Grid container direction="row" justify="center" alignItems="center" item xs={12} sm={12} md={12} lg={12}
                  xl={12}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                        <Grid item xs={12} sm={12} md={12} lg={9} xl={12} className={classes.content}>
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
                                    Tell us for further customization
                                </Typography>

                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                      container
                                      direction="row"
                                      justify="flex-start"
                                      alignItems="flex-start" className={classes.paddingTop1}>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Paper className={classes.shadownone}>
                                            <form  noValidate autoComplete="on">
                                                <TextField
                                                    id="standard-textarea"
                                                    label="Your message"
                                                    placeholder="Your message"
                                                    multiline
                                                    className={classes.textField}
                                                    margin="normal"
                                                />
                                            </form>
                                            <Typography className={classes.textTransform} variant="button" gutterBottom>
                                                We will contact you within 24 hours
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Grid
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="flex-end"
                                item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.paddingTop}>
                                <Button type="submit" variant="contained"  className={classes.skipbutton}>
                                    Skip
                                </Button>
                                <Button type="submit" variant="contained" className={classes.button1}>
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
Customizelater.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Customizelater);
