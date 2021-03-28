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
        { id: 1, title: 'Fresh salad', price: 15, count: 1, image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80' },
        { id: 2, title: 'Norweigan Bacon', price: 35, count: 1, image: 'https://images.unsplash.com/photo-1528607929212-2636ec44253e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' },
        { id: 3, title: 'Gouda', price: 20, count: 1, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80' },
        { id: 4, title: 'Chicken legs', price: 55, count: 2, image: 'https://images.unsplash.com/photo-1588767768106-1b20e51d9d68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' }
    ])
    const [price, setPrice] = useState(0)


    const addToListHandler = (item) => {
        let newArr = [...list]
        Object.assign(list[list.findIndex(el => el.id === item.id)], item.count++)
        setList(newArr)
    }

    return (
        <Grid container>
            <Grid item sm={10} xs={12}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper elevation={0} className={classes.paper}><List list={list} /></Paper>
                    </Grid>
                    {
                        list.map((item, i) =>
                            <Grid key={i} item md={3} sm={4} xs={6}>
                                <Paper elevation={0} className={classes.paper}>
                                    <Item
                                        title={item.title}
                                        price={item.price}
                                        image={item.image}
                                        onAddClick={() => addToListHandler(item)} />
                                </Paper>
                            </Grid>
                        )
                    }
                </Grid>
            </Grid>
            <Grid item sm={2} xs={12}>
                <Paper elevation={0} className={classes.paper}><Typography>Past Orders</Typography></Paper>
            </Grid>
        </Grid>
    )
}

export default ShoppingList