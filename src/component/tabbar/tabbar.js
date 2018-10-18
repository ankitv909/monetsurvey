import React, { Component } from "react";
import './tabbar.css';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from "@material-ui/core/Typography/Typography";
import {Link} from "react-router-dom";


function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    textTransform :{
        textTransform: "none",
    },
    barcolor:{
        backgroundColor:"#ffff",
    },

});

class Tabbar extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className="tabbar">
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center" item xs={12} sm={12} md={12} lg={12} xl={12} spacing={0}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Paper className={classes.root}>
                            <Tabs
                                value={value}
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                scrollable
                                scrollButtons="auto"
                            >
                                <Tab  className={classes.textTransform} label="Add Content" component={Link} to="/addcontent" />
                                <Tab className={classes.textTransform} label="Select Audience" component={Link} to="/selectaudience"  />
                                <Tab className={classes.textTransform} label="Customize Audience" component={Link} to="/customizeaudience"  />
                                <Tab className={classes.textTransform} label="Configure Pre-Survey" component={Link} to="/presurvey"  />
                                <Tab className={classes.textTransform} label="Configure Post-Survey"  component={Link} to="/postsurvey" />
                                <Tab className={classes.textTransform} label="Review" component={Link} to="/review" />
                            </Tabs>
                        </Paper>
                        {/*{value === 0 && <TabContainer>add content</TabContainer>}
                        {value === 1 && <TabContainer>select</TabContainer>}
                        {value === 2 && <TabContainer>customize</TabContainer>}
                        {value === 3 && <TabContainer>pre</TabContainer>}
                        {value === 4 && <TabContainer>post</TabContainer>}
                        {value === 5 && <TabContainer>review</TabContainer>}*/}
                    </Grid>
                </Grid>
            </div>
        );
    }
}
Tabbar.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles) (Tabbar);
