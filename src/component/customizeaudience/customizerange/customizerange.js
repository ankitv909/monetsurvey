import React, { Component } from "react";
import './customizerange.css';
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
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import {Link} from "react-router-dom";

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
    content2:{
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
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
    radio: {
        color: 'rgb(255, 255, 255)',
        '&$checked': {
            color: '#4fb49e',
        },
        padding:'4px'
    },
    checked: {
    },
    radioshadow:{
        boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 10px 0px rgba(0, 0, 0, 0.12)',
        borderRadius:'30px'
    },
    bigAvatar: {
        width: 22,
        height: 22,
        backgroundColor:'transparent',
        boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 10px 0px rgba(0, 0, 0, 0.12)',
        borderRadius:'30px'
    },
    smAvatar: {
        width: 12,
        height: 12,
    },
});

class Customizerange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            mobileOpen: false,
            selectedValue: 'a',
            selectedValue1: 'd',
            selectedValue2: 'h',
        };
    }

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };
    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };
    handleagegroup = event => {
        this.setState({ selectedValue1: event.target.value });
    };
    handlegender = event => {
        this.setState({ selectedValue2: event.target.value });
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
                                    <img src="/assets/note-interface-symbol.svg" alt="check" />
                                </Grid>
                            </ListItem>
                            <li>
                                <Divider />
                            </li>
                            <ListItem >
                                <ListItemText primary="Customize Later" />
                                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                    <img src="/assets/info.svg" alt="check" />
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
                        {/*<Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            item xs={12} md={12} sm={12} lg={12} xl={12} className={classes.paddingTop}>
                            <Grid item xs={5} md={6} sm={8} lg={6} xl={12}>
                                <img src="/assets/80.svg" alt="80"/>
                            </Grid>
                        </Grid>*/}
                    </Paper>
                </Grid>
            </Grid>
        );

        return <div className="selectaudince">

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
                                    Customize Range
                                </Typography>

                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.paddingTop1}>
                                    <Paper className={classes.content2}>
                                        <Typography className={classes.textTransform} variant="button" gutterBottom>
                                            How many people do you want the quota to reach?
                                        </Typography>
                                        <Typography className={classes.textTransform} variant="button" gutterBottom>
                                            <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
                                                <Radio
                                                    checked={this.state.selectedValue === 'a'}
                                                    onChange={this.handleChange}
                                                    value="a"
                                                    name="radio-button-demo"
                                                    aria-label="A"
                                                    icon={<RadioButtonUncheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    checkedIcon={<RadioButtonCheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    classes={{
                                                        root: classes.radio,
                                                        checked: classes.checked,
                                                    }}
                                                />
                                                All
                                            </Button>
                                            <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
                                                <Radio
                                                    checked={this.state.selectedValue === 'b'}
                                                    onChange={this.handleChange}
                                                    value="b"
                                                    name="radio-button-demo"
                                                    aria-label="B"
                                                    icon={<RadioButtonUncheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    checkedIcon={<RadioButtonCheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    classes={{
                                                        root: classes.radio,
                                                        checked: classes.checked,
                                                    }}
                                                />
                                                Male
                                            </Button>
                                            <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
                                                <Radio
                                                    checked={this.state.selectedValue === 'c'}
                                                    onChange={this.handleChange}
                                                    value="c"
                                                    name="radio-button-demo"
                                                    aria-label="C"
                                                    icon={<RadioButtonUncheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    checkedIcon={<RadioButtonCheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    classes={{
                                                        root: classes.radio,
                                                        checked: classes.checked,
                                                    }}
                                                />
                                                Female
                                            </Button>
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.paddingTopbottom}>
                                    <Paper className={classes.content2}>
                                        <Typography className={classes.textTransform} variant="button" gutterBottom>
                                           Age group
                                        </Typography>
                                        <Typography className={classes.textTransform} variant="button" gutterBottom>
                                            <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
                                                <Radio
                                                    checked={this.state.selectedValue1 === 'd'}
                                                    onChange={this.handleagegroup}
                                                    value="d"
                                                    name="radio-button-demo"
                                                    aria-label="D"
                                                    icon={<RadioButtonUncheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    checkedIcon={<RadioButtonCheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    classes={{
                                                        root: classes.radio,
                                                        checked: classes.checked,
                                                    }}
                                                />
                                                All
                                            </Button>
                                            <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
                                                <Radio
                                                    checked={this.state.selectedValue1 === 'e'}
                                                    onChange={this.handleagegroup}
                                                    value="e"
                                                    name="radio-button-demo"
                                                    aria-label="E"
                                                    icon={<RadioButtonUncheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    checkedIcon={<RadioButtonCheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    classes={{
                                                        root: classes.radio,
                                                        checked: classes.checked,
                                                    }}
                                                />
                                                18-34
                                            </Button>
                                            <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
                                                <Radio
                                                    checked={this.state.selectedValue1 === 'f'}
                                                    onChange={this.handleagegroup}
                                                    value="f"
                                                    name="radio-button-demo"
                                                    aria-label="F"
                                                    icon={<RadioButtonUncheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    checkedIcon={<RadioButtonCheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    classes={{
                                                        root: classes.radio,
                                                        checked: classes.checked,
                                                    }}
                                                />
                                                35-55
                                            </Button>
                                            <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
                                                <Radio
                                                    checked={this.state.selectedValue1 === 'g'}
                                                    onChange={this.handleagegroup}
                                                    value="g"
                                                    name="radio-button-demo"
                                                    aria-label="G"
                                                    icon={<RadioButtonUncheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    checkedIcon={<RadioButtonCheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    classes={{
                                                        root: classes.radio,
                                                        checked: classes.checked,
                                                    }}
                                                />
                                                Custom
                                            </Button>
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.paddingTopbottom}>
                                    <Paper className={classes.content2}>
                                        <Typography className={classes.textTransform} variant="button" gutterBottom>
                                            Target gender
                                        </Typography>
                                        <Typography className={classes.textTransform} variant="button" gutterBottom>
                                            <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
                                                <Radio
                                                    checked={this.state.selectedValue2 === 'h'}
                                                    onChange={this.handlegender}
                                                    value="h"
                                                    name="radio-button-demo"
                                                    aria-label="H"
                                                    icon={<RadioButtonUncheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    checkedIcon={<RadioButtonCheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    classes={{
                                                        root: classes.radio,
                                                        checked: classes.checked,
                                                    }}
                                                />
                                                All
                                            </Button>
                                            <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
                                                <Radio
                                                    checked={this.state.selectedValue2 === 'i'}
                                                    onChange={this.handlegender}
                                                    value="i"
                                                    name="radio-button-demo"
                                                    aria-label="I"
                                                    icon={<RadioButtonUncheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    checkedIcon={<RadioButtonCheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    classes={{
                                                        root: classes.radio,
                                                        checked: classes.checked,
                                                    }}
                                                />
                                                Male
                                            </Button>
                                            <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
                                                <Radio
                                                    checked={this.state.selectedValue2 === 'j'}
                                                    onChange={this.handlegender}
                                                    value="j"
                                                    name="radio-button-demo"
                                                    aria-label="J"
                                                    icon={<RadioButtonUncheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    checkedIcon={<RadioButtonCheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    classes={{
                                                        root: classes.radio,
                                                        checked: classes.checked,
                                                    }}
                                                />
                                                Female
                                            </Button>
                                        </Typography>
                                    </Paper>
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
                                <Button type="submit" variant="contained" component={Link} to="/customizelater" className={classes.button1}>
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
Customizerange.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Customizerange);
