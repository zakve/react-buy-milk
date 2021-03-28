import React, { useState, useEffect } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import grey from '@material-ui/core/colors/grey';

import List from "../../components/List/List";
import Item from "../../components/Item/Item";
import shoppingBagImage from "../../assets/images/shoppingBag.png";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 50
    },
    paper: {
        background: grey[100],
        borderRadius: 10,
        color: 'black',
        padding: '30px',
    },
    price: {
        textAlign: "right"
    },
    image: {
        width: '100%',
    },
    imageContainer: {
        marginTop: -100,
        alignItems: 'flex-start'
    }
}));

const ShoppingList = () => {
    const styles = useStyles();

    const [list, setList] = useState([
        { id: 1, title: 'Fresh salad', price: 15, count: 1, image: 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
        { id: 2, title: 'Norweigan Bacon', price: 35, count: 1, image: 'https://images.unsplash.com/photo-1528607929212-2636ec44253e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' },
        { id: 3, title: 'Gouda', price: 20, count: 1, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80' },
        { id: 4, title: 'Chicken legs', price: 55, count: 2, image: 'https://images.unsplash.com/photo-1588767768106-1b20e51d9d68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' }
    ])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        if (list && list.length > 0) {
            let price = 0
            list.forEach((item, i) => {
                price += (item.price * item.count)
            })
            setTotalPrice(price)
        }
    }, [totalPrice, list])

    const addToListHandler = (item) => {
        let newArr = [...list]
        Object.assign(list[list.findIndex(el => el.id === item.id)], item.count++)
        setList(newArr)
    }

    const removeFromListHandler = (item) => {
        let newArr = [...list]
        Object.assign(list[list.findIndex(el => el.id === item.id)], item.count > 0 && item.count--)
        setList(newArr)
    }

    return (
        <Grid container className={styles.container}>
            <Grid item sm={10} xs={12}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper elevation={0} className={styles.paper}>
                            <Grid container>
                                <Grid item sm={8} xs={12}>
                                    <List list={list} onRemoveClick={removeFromListHandler} />
                                    <div className={styles.price}>
                                        <p>Total: {totalPrice}</p>
                                    </div>
                                </Grid>
                                <Hidden xsDown>
                                    <Grid item sm={4} xs={12} className={styles.imageContainer}>
                                        <img src={shoppingBagImage} alt='shoppingBag' className={styles.image} />
                                    </Grid>
                                </Hidden>
                            </Grid>
                        </Paper>
                    </Grid>
                    {
                        list.map((item, i) =>
                            <Grid key={i} item md={3} sm={4} xs={6}>
                                <Paper elevation={0}>
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
                <Paper elevation={0}><Typography>Past Orders</Typography></Paper>
            </Grid>
        </Grid>
    )
}

export default ShoppingList