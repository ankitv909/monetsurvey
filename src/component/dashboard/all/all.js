import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid/Grid";
import './all.css'
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";
import Typography from "@material-ui/core/Typography/Typography";
import * as _ from 'underscore';

const styles = theme => ({
    paper: {
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 1,
        fontWeight:'500'
    },
    border:{
        borderBottom: '2px solid #5C95E4',
    },
    background:{
        background:'linear-gradient(to right,#1838D6,#5C95E4)',
        padding: 0,
        width: '40%'
    },
    button: {
        margin: '4px',
        minWidth: '30px',
        minHeight: '34px',
        padding:'2px 2px',
        backgroundColor:'transparent',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    rightIcon: {
        color:'#ffff',
        fontSize:'18px'
    },
    shadow:{
        boxShadow:'0 3px 12px rgba(0, 0, 0, .16)',
        marginTop:'1rem',
        fontSize: '14px'
    },
    paper1: {
        paddingTop: 0,
        paddingBottom: 0,
    },
    font14:{
        fontSize:'14px'
    },
    autopadding:{
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    autopadding1: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 4,
    },
    autopadding2: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 4,
    },
    boxshadow:{
        boxShadow: '0 3px 12px rgba(0, 0, 0, .16)',
    },
    automargin:{
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    buttonprev: {
        margin: theme.spacing.unit,
        width: 'auto',
        height: 'auto',
        padding: '0 24px',
        minWidth: '48px',
        borderRadius: '24px',
        backgroundColor:'#ffff',
        textTransform:'none',
        minHeight: '30px',
        color: '#878787',
        boxShadow:'0 3px 3px rgba(0, 0, 0, .16)'
    },
    buttonnext: {
        margin: theme.spacing.unit,
        width: 'auto',
        height: 'auto',
        padding: '0 24px',
        minWidth: '48px',
        borderRadius: '24px',
        backgroundColor:'#ffff',
        textTransform:'none',
        minHeight: '30px',
        color: '#878787',
        boxShadow:'0 3px 3px rgba(0, 0, 0, .16)'
    },
    buttonlast: {
        margin: theme.spacing.unit,
        width: 'auto',
        height: 'auto',
        padding: '0 24px',
        minWidth: '48px',
        borderRadius: '24px',
        background:'linear-gradient(to right,#1838D6,#5C95E4)',
        textTransform:'none',
        minHeight: '30px',
        color: '#ffff',
        boxShadow:'0 3px 3px rgba(0, 0, 0, .16)'
    },
    buttonnumber: {
        margin: 2,
        width: '30px',
        height: '20px',
        minHeight:'30px',
        backgroundColor:'#ffff',
        padding: '0',
        minWidth: '0',
        boxShadow: 'none',
        borderRadius: '50%',
        color:'#878787',
        '&:active': {
            background:'linear-gradient(to right,#1838D6,#5C95E4)',
            boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
            color:'#ffff'

        },
        '&:hover': {
            background:'linear-gradient(to right,#1838D6,#5C95E4)',
            boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
            color:'#ffff'

        },
    },
});


class All extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            header: [
                {name: '', key: '', sort: null},
                {name: 'Campaigns', key: 'cmp_name', sort: null},
                {name: 'Test Market', key: 'countries_name', sort: null},
                {name: 'Progress', key: 'cmp_target', sort: null},
                {name: '', key: '', sort: null},/*Pending*/
                {name: 'Status', key: '', sort: null},
                {name: '', key: '', sort: null},
            ],
            response: Object.assign([], this.props.response),
            campaignsSortCopy: Object.assign([], this.props.response),
            campaignsSearchCopy: Object.assign([], this.props.response)
        };
        this.sortCampaignsList = this.sortCampaignsList.bind(this);
        this.setPage = this.setPage.bind(this);
    }


    sortCampaignsList(filter, sortType) {
        const availableSortType = [null, 'asc', 'desc'];
        const { header } = this.state;
        const { campaignsSortCopy } = this.state;
        let { response } = this.state;
        for (const key in header) {
            if (header.hasOwnProperty(key)) {
                if (header[key].sort === sortType && header[key].key === filter) {
                    header[key].sort = availableSortType[availableSortType.indexOf(sortType) + 1] ? availableSortType[availableSortType.indexOf(sortType) + 1] : null;
                } else {
                    header[key].sort = null;
                }
            }
        }
        sortType = availableSortType[availableSortType.indexOf(sortType) + 1] ? availableSortType[availableSortType.indexOf(sortType) + 1] : null;
        if (filter === 'cmp_target') {
            if (sortType === 'asc') {
                response.sort( function(a, b) { return (a[filter]['complete'] > b[filter]['complete']) ? 1 : ((b[filter]['complete'] > a[filter]['complete']) ? -1 : 0); } );
            } else if (sortType === 'desc') {
                response.sort( function(a, b) { return (a[filter]['complete'] > b[filter]['complete']) ? -1 : ((b[filter]['complete'] > a[filter]['complete']) ? 1 : 0); } );
            } else {
                response = Object.assign([], campaignsSortCopy);
            }
        }
        if (filter === 'cmp_name' || filter === 'countries_name') {
            if (sortType === 'asc') {
                response.sort( function(a, b) { return (a[filter] > b[filter]) ? 1 : ((b[filter] > a[filter]) ? -1 : 0); } );
            } else if (sortType === 'desc') {
                response.sort( function(a, b) { return (a[filter] > b[filter]) ? -1 : ((b[filter] > a[filter]) ? 1 : 0); } );
            } else {
                response = Object.assign([], campaignsSortCopy);
            }
        }
        this.setState({
            response,
            campaignsSortCopy,
        });
        this.setPage(1);
    }
    componentWillReceiveProps(props) {
        this.setState({
            response: this.props.response
        })
    }

    getPager(totalItems, currentPage = 1, pageSize = 5) {
        // calculate total pages
        const totalPages = Math.ceil(totalItems / pageSize);

        let startPage, endPage;

        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }

        // calculate start and end item indexes
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        const pages = _.range(startPage, endPage + 1);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    setPage(page) {
        const { response } = this.state;
        if (page < 1 || page > this.getPager().totalPages) {
          return;
        }
        // get pager object from service
        const pager = this.getPager(response.length, page, 5);
        // get current page of items
        const pagedItems = response.slice(pager.startIndex, pager.endIndex + 1);
        console.log(pagedItems);
    }



    render() {
        const { classes } = this.props;
        const { header } = this.state;
        const { response } = this.state;
        return (
            <div className="all">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    item xs={12} lg={12} md={12} sm={12} xl={12}
                className={classes.border}>
                    {header.map((header, number) =>
                        <Grid className={classes.paper} item
                              xs={number === 4 || number === 6 ? 1 : 2} lg={number === 4 || number === 6 ? 1 : 2} md={number === 4 || number === 6 ? 1 : 2} sm={number === 4 || number === 6 ? 1 : 2} xl={number === 4 || number === 6 ? 1 : 2}
                              key={number.toString()}
                        >
                            <span onClick = {() => header.key ? this.sortCampaignsList(header.key, header.sort) : ''} style={{cursor: header.key ? 'pointer' : 'default', userSelect: 'none'}}>{header.name}</span>
                            <span>
                                {header.sort=== 'desc' ? <i className=" material-icons sort" style={{verticalAlign: 'middle'}}>keyboard_arrow_up</i>
                                    : header.sort=== 'asc' ? <i className=" material-icons sort" style={{verticalAlign: 'middle'}}>keyboard_arrow_down</i>
                                        : null}
                                        </span>
                        </Grid>
                    )}
                </Grid>
                {response.map((header, number) =><Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    item xs={12} lg={12} md={12} sm={12} xl={12}
                    className={classes.shadow}
                    key={number.toString()}>
                        <Grid className={classes.paper1} item xs={2} lg={2} md={2} sm={2} xl={2}>
                            {header.content_type === 'video' ? <img src={'https://dev.monetrewards.com' + header.thumb_url} height="120px" width="100%" style={{padding: 0}} alt={header.cmp_name}/>
                            : header.content_type === 'youtube' ? <img src={ header.thumb_url} height="120px" width="100%" style={{padding: 0}} alt={header.cmp_name}/>
                                    : header.content_type === 'vimeo' ? <img src={ header.thumb_url} height="120px" width="100%" style={{padding: 0}} alt={header.cmp_name}/>
                                        : header.content_type === 'image' ? <img src={ header.content_url['0'].path} height="120px" width="100%" style={{padding: 0}} alt={header.cmp_name}/>
                                : header.content_type === 'text' ? <img src="/assets/text selected.svg" height="120px" width="100%" style={{padding: 0}} alt={header.cmp_name}/> : <img src="/assets/text selected.svg" alt="default"/>}
                        </Grid>
                        <Grid className={classes.paper1} item xs={2} lg={2} md={2} sm={2} xl={2}>
                            {header.cmp_name ? header.cmp_name : '-'}
                        </Grid>
                        <Grid className={classes.paper1} item xs={2} lg={2} md={2} sm={2} xl={2}>
                            {header.cmp_country ? header.cmp_country : '-'}
                        </Grid>
                        <Grid className={classes.paper1} item xs={2} lg={2} md={2} sm={2} xl={2}>
                            <span>0/{header.cmp_target ? header.cmp_target.complete : ''}</span><br/>
                            <span>completed</span>
                        </Grid>
                        <Grid className={classes.paper1} item xs={1} lg={1} md={1} sm={1} xl={1}>
                           {/* {header.cmp_target ? header.cmp_target.complete : ''}*/}
                        </Grid>
                        <Grid className={classes.paper1} item xs={2} lg={2} md={2} sm={2} xl={2}>
                            <svg height="20" width="20" style={{ verticalAlign: 'middle'}}>
                                {header.pagestage === 7 ?
                                    <circle cx="10" cy="10" r="5" strokeWidth="1" fill="#2E7951"/>
                                    : header.pagestage === 8 ?
                                        <circle cx="10" cy="10" r="5" strokeWidth="1" fill="#770E0E"/>
                                        : header.pagestage === 6 ?
                                            <circle cx="10" cy="10" r="5" strokeWidth="1" fill="#FFFFFF"/>
                                            : header.pagestage === 1 || 2 || 3 || 4 || 5 ?
                                                <circle cx="10" cy="10" r="5" strokeWidth="1" fill="#93909C"/>
                                                : <circle cx="10" cy="10" r="5" strokeWidth="1" fill="#93909C"/>
                                }
                            </svg>
                            <div>
                                {header.pagestage ? header.pagestage === 1 ? 'Content Uploaded' :
                                    header.pagestage === 2 ? 'Audience Selected' :
                                        header.pagestage === 3 ? 'Audience Customized' :
                                            header.pagestage === 4 ? 'Survey Configured' :
                                                header.pagestage === 5 ? 'Ready for Approval' :
                                                    header.pagestage === 6 ? 'Paused (Approved)':
                                                        header.pagestage === 7 ? 'Running' :
                                                            header.pagestage === 8 ? 'Expired': '' :'-'}
                            </div>
                        </Grid>
                        <Grid container
                              direction="column"
                              justify="flex-end"
                              alignItems="flex-end" className={`${classes.paper1}`} item xs={1} lg={1} md={1} sm={1} xl={1}>
                            <Grid className={`${classes.background}`}>
                                <Button variant="contained"  className={classes.button}>
                                    <Icon className={classes.rightIcon}>list_alt</Icon>
                                </Button>
                                {header.pagestage < 7 ?
                                    <Button variant="contained" className={classes.button}>
                                        <Icon className={classes.rightIcon}>edit</Icon>
                                    </Button>
                                    : header.pagestage === 7 ? <Button variant="contained" className={classes.button}>
                                        <Icon className={classes.rightIcon}>play_arrow</Icon>
                                    </Button>
                                        : header.pagestage === 8 ?<Button variant="contained" className={classes.button}>
                                        <Icon className={classes.rightIcon}>pause</Icon>
                                    </Button>
                                            : ''
                                }
                                <Button variant="contained"  className={classes.button}>
                                    <Icon className={classes.rightIcon}>delete</Icon>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12} className={`${classes.automargin} ${classes.boxshadow}`}>
                    <Grid  item xs={6} lg={6} md={6} sm={6} xl={6}>
                        <Grid container
                              direction="row"
                              justify="flex-start"
                              alignItems="center" className={classes.autopadding1}>
                            <Typography variant="body2" gutterBottom style={{color:'#878787'}}>
                                Showing 1 to 10 of 21 rows
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid  item xs={6} lg={6} md={6} sm={6} xl={6}>
                        <Grid container
                              direction="row"
                              justify="flex-end"
                              alignItems="center" className={classes.autopadding}>
                            <Button variant="extendedFab" aria-label="Delete" className={classes.buttonprev}>
                                Prev
                            </Button>

                            <Button variant="fab"  aria-label="Add" className={classes.buttonnumber}>
                                1
                            </Button>

                            <Button variant="fab"  aria-label="Add" className={classes.buttonnumber}>
                                2
                            </Button>

                            <Button variant="fab"  aria-label="Add" className={classes.buttonnumber}>
                                3
                            </Button>

                            <Button variant="fab"  aria-label="Add" className={classes.buttonnumber}>
                                4
                            </Button>

                            <Button variant="extendedFab" aria-label="Delete" className={classes.buttonnext}>
                                Next
                            </Button>
                            <Button variant="extendedFab" aria-label="Delete" className={classes.buttonlast}>
                                Last
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
All.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(All);
