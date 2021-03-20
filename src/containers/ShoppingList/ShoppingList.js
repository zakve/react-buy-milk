import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import List from "../../components/List/List";
import Item from "../../components/Item/Item";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        // padding: theme.spacing(1),
        // textAlign: 'center',
        // color: theme.palette.text.secondary,
        // whiteSpace: 'nowrap',
        // marginBottom: theme.spacing(1),
    }
}));

const ShoppingList = () => {
    const classes = useStyles();

    const [list, setList] = useState([
        { title: 'Fresh salad', count: 1 },
        { title: 'Norweigan Bacon', count: 1 },
        { title: 'Gouda', count: 1 },
        { title: 'Chicken legs', count: 2 }
    ])
    const [price, setPrice] = useState(0)

    return (
        <Grid container>
            <Grid item sm={10} xs={12}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper elevation={0} className={classes.paper}><List list={list} /></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={0} className={classes.paper}><Item /></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={0} className={classes.paper}><Item /></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={0} className={classes.paper}><Item /></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={0} className={classes.paper}><Item /></Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={2} xs={12}>
                <Paper elevation={0} className={classes.paper}><Typography>Past Orders</Typography></Paper>
            </Grid>
        </Grid>
    )
}

export default ShoppingList