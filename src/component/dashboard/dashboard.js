import React, { Component } from "react";
import './dashboard.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";
import All from './all/all';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 2 * 3 }}>
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
        backgroundColor: theme.palette.background.paper,
    },
    tabsRoot: {
        borderBottom: '1px solid #e8e8e8',
    },
    tabsIndicator: {
        backgroundColor: '#1890ff',
    },
    tabRoot: {
        textTransform: 'initial',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing.unit * 1,
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$tabSelected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    tabSelected: {},
    textField: {
        margin:'0 0 24px 0',
        width: 280,
    },
    searchIcon: {
        width:'auto',
        height: '100%',
        position: 'relative',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#CEC9DD',
    },
    button: {
        margin: '0 0 24px 0',
        backgroundColor:'transparent',
        boxShadow:'none',
        color:'#878787',
        '&:hover': {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: 'transparent',
            borderColor: 'transparent',
        },
        textTransform:'none'
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    BG:{
        backgroundColor:'rgba(189, 206, 229, .26)',
        boxShadow: '0 0 12px rgba(0, 0, 0, 0.16)'
    }
});


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            countries: [],
            response: [],
            campaignsSortCopy: [],
            campaignsSearchCopy: [],
            searchKey: ''
        };
        this.searchCampaignList = this.searchCampaignList.bind(this);
        switch (this.props.location.pathname) {
            case '/dashboard/all':
                this.state = {value: 0};
                break;
            case '/dashboard/processing':
                this.state = {value: 1};
                break;
            case '/dashboard/running':
                this.state = {value: 2};
                break;
            case '/dashboard/completed':
                this.state = {value: 3};
                break;
            case '/dashboard/expired':
                this.state = {value: 4};
                break;
            default:
                this.state = {value: 0};
                break;
        }
        fetch("https://dev.monetrewards.com/Diy/public/api/getCountry",
            {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        countries: Object.assign([], result.response)
                    });
                },
                (error) => {}
            )
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    componentDidMount() {
        fetch("https://dev.monetrewards.com/Diy/public/api/listCampaigns?from_date=2018-01-01%2000:00:00&to_date=2018-11-04%2003:12:52",
            {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 1rzRY0mao4swVsvX6Q019ypzmnHT79eawrNf898Jti2ubr3OLNsiDSGwLLzB',
                    'sid': '5bdffbb7d1e1b76ef461a162'
                },
            })
            .then(res => res.json())
            .then(
                (result) => {
                    result.response.map(value => {
                        if (!value.cmp_target) {
                            value.cmp_target = {complete: 0, age: '', gender: ''};
                        }
                        if (!value.cmp_name) {
                            value.cmp_name = '';
                        }
                        if (!value.cmp_country) {
                            value.cmp_country = 0;
                        }
                        return value;
                    });
                    const { countries } = this.state;
                    if (countries) {
                        for (const key in countries) {
                            if (countries.hasOwnProperty(key)) {
                                for (const count in result.response) {
                                    if (result.response.hasOwnProperty(count)) {
                                        if (countries[key].countries_id === result.response[count].cmp_country) {
                                            result.response[count].countries_name = countries[key].countries_name;
                                        }
                                        if (result.response[count].cmp_country === 0) {
                                            result.response[count].countries_name = '';
                                        }
                                    }
                                }
                            }
                        }
                    }
                    this.setState({
                        response: Object.assign([], result.response),
                        campaignsSortCopy: Object.assign([], result.response),
                        campaignsSearchCopy: Object.assign([], result.response),
                    });
                },
                (error) => {}
            )
    }
    searchCampaignList(event) {
        const searchKey = event.target.value;
        this.setState({
            searchKey
        });
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        const { response,campaignsSortCopy, campaignsSearchCopy, searchKey } = this.state;
        return (
            <div className="dashboard">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    item xs={12} lg={12} md={12} sm={12} xl={12}
                >
                    <Grid
                        item xs={11} lg={11} md={11} sm={11} xl={9}
                    >
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-end"
                    item xs={12} lg={12} md={12} sm={12} xl={12}
                >
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-end"
                        item xs={6} lg={6} md={6} sm={6} xl={6}
                    >
                        <TextField
                            id="standard-search"
                            label="Type what you are looking for?"
                            type="search"
                            className={classes.textField}
                            margin="normal"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end" className={classes.searchIcon}>
                                        <SearchIcon />
                                    </InputAdornment>
                                ),}}
                            onChange={this.searchCampaignList}
                        />
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end"
                        item xs={6} lg={6} md={6} sm={6} xl={6}
                    >
                        <Button variant="contained" color="secondary" className={classes.button} component={Link}
                                to="/corporate">
                            <AddIcon className={classes.leftIcon}/>
                            Create Campaign
                        </Button>
                    </Grid>

                </Grid>
                <div className={classes.root}>
                    <AppBar position="static" color={"default"} className={classes.BG}>
                        <Tabs
                            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                            value={value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            scrollable
                            scrollButtons="auto"
                        >
                            <Tab label="All"  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}  component={Link}
                                 to="/dashboard/all"/>
                            <Tab label="Processing"  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}  component={Link}
                                 to="/dashboard/processing"/>
                            <Tab label="Running"  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}  component={Link}
                                 to="/dashboard/running"/>
                            <Tab label="Completed"  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}  component={Link}
                                 to="/dashboard/completed"/>
                            <Tab label="Expired"  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}  component={Link}
                                 to="/dashboard/expired"/>
                           {/* <Grid
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="center"
                            >
                                kkk
                            </Grid>*/}
                        </Tabs>
                    </AppBar>
                    {campaignsSortCopy || campaignsSearchCopy ? <All response= { response } searchKey= { searchKey } /> : null }
                   {/* <Switch>
                        <Route path={`${this.props.match.path}/all`} component={All}/>
                        <Route path={`${this.props.match.path}/processing`} component={Processing}/>
                        <Route path={`${this.props.match.path}/running`} component={Running}/>
                        <Route path={`${this.props.match.path}/completed`} component={Completed}/>
                        <Route path={`${this.props.match.path}/expired`} component={Expired}/>
                        <Redirect to='/dashboard/all' />
                    </Switch>*/}
                </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
