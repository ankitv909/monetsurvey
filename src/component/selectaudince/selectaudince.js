import React, { Component } from "react";
import './selectaudince.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ImageIcon from '@material-ui/icons/Image';
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Hidden from "@material-ui/core/Hidden/Hidden";

const drawerWidth = 300;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 440,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
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
        },
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing.unit * 3,
    },
    shadownone:{
        boxShadow:'none'
    }
});

class Selectaudince extends Component {
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
                        <div className={classes.toolbar} />
                        <List>
                            <ListItem>
                                <ListItemText primary="Photos" />
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItem>
                            <li>
                                <Divider />
                            </li>
                            <ListItem>
                                <ListItemText primary="Photos" />
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItem>
                            <Divider component="li" />
                            <ListItem>
                                <ListItemText primary="Photos" />
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
                </Grid>
        );

        return <div className="selectaudince">

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
                        <Grid item xs={12} sm={12} md={12} lg={9} xl={12}>
                            <Paper>
                                <main className={classes.content}>
                                    {/*  <div className={classes.toolbar} />*/}
                                    <Typography noWrap>{'Audince range'}</Typography>
                                </main>
                            </Paper>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>;
    }
}
Selectaudince.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Selectaudince);
