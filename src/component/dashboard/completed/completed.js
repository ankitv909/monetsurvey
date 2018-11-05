import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid/Grid";
import  './completed.css'


const styles = theme => ({

});


class Completed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    render() {

        return (
            <div className="completed">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    item xs={12} lg={12} md={12} sm={12} xl={12}
                >
                    comp
                </Grid>
            </div>
        );
    }
}
Completed.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Completed);
