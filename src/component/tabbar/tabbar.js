import React, { Component } from "react";
import './tabbar.css';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from "@material-ui/core/Typography/Typography";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import Customizeaudience from '../customizeaudience/customizeaudience';
/*import Selectaudince from '../selectaudince/selectaudince';*/
import Basicinformation from '../selectaudince/basicinformation/basicinformation';
import Addcontent from '../addcontent/addcontent';
import Presurvey from '../presurvey/presurvey';
import Postsurvey from '../postsurvey/postsurvey';
import Review from "../review/review";
import Audiencerange from "../selectaudince/audiencerange/audiencerange";
import Targetaudience from "../selectaudince/targetaudince/targetaudince";
import Selectaudience from "../selectaudince/selectaudince";

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
        boxShadow:'2px 2px 2px rgba(0, 0, 0, 0.16)'
    },
    textTransform :{
        textTransform: "none",
    },
    barcolor:{
        backgroundColor:"#ffff",
    },

});

class Tabbar extends Component {
    constructor(props) {
        super(props);
        document.title = 'Tabbar';
        this.state = {
            value: 0,
        };
        switch (this.props.location.pathname) {
            case '/corporate/addcontent':
                this.state = {value: 0};
                break;
            case '/corporate/basicinfo':
                this.state = {value: 1};
                break;
            case '/corporate/customizeaudience':
                this.state = {value: 2};
                break;
            case '/corporate/presurvey':
                this.state = {value: 3};
                break;
            case '/corporate/postsurvey':
                this.state = {value: 4};
                break;
            case '/corporate/review':
                this.state = {value: 5};
                break;
            default:
                this.state = {value: 0};
                break;
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return <div className="tabbar">
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center" item xs={12} sm={12} md={12} lg={12} xl={12} spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Paper className={classes.root}>
                       {/* {value}*/}
                        <Tabs
                            value={value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            scrollable
                            scrollButtons="auto"
                        >
                            <Tab className={classes.textTransform} label="Add Content" component={Link}
                                 to="/corporate/addcontent"/>
                            <Tab className={classes.textTransform} label="Select Audience" component={Link}
                                 to="/corporate/basicinfo"/>
                            <Tab className={classes.textTransform} label="Customize Audience" component={Link}
                                 to="/corporate/customizeaudience"/>
                            <Tab className={classes.textTransform} label="Configure Pre-Survey" component={Link}
                                 to="/corporate/presurvey"/>
                            <Tab className={classes.textTransform} label="Configure Post-Survey" component={Link}
                                 to="/corporate/postsurvey"/>
                            <Tab className={classes.textTransform} label="Review" component={Link}
                                 to="/corporate/review"/>
                        </Tabs>
                    </Paper>
                    <Switch>
                        <Route path={`${this.props.match.path}/addcontent`} component={Addcontent}/>
                        <Route path={`${this.props.match.path}/basicinfo`} component={Basicinformation}/>
                        <Route path={`${this.props.match.path}/customizeaudience`} component={Customizeaudience}/>
                        <Route path={`${this.props.match.path}/presurvey`} component={Presurvey}/>
                        <Route path={`${this.props.match.path}/postsurvey`} component={Postsurvey}/>
                        <Route path={`${this.props.match.path}/review`} component={Review}/>
                        <Route path={`${this.props.match.path}/audiencerange`} component={Audiencerange} />
                        <Route path={`${this.props.match.path}/targetaudience`} component={Targetaudience} />
                        <Route path={`${this.props.match.path}/audienceinput`} component={Selectaudience} />
                        <Redirect to='/corporate/addcontent' />
                    </Switch>
                </Grid>
            </Grid>
        </div>;
    }
}
Tabbar.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles) (Tabbar);