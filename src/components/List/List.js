import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles({
    container: {
        background: grey[100],
        borderRadius: 10,
        color: 'black',
        padding: '30px',
    },
});

const List = ({ list }) => {
    const classes = useStyles();

    if (list.length === 0) {
        return <p>Start adding groceries</p>
    }

    return (
        <div className={classes.container}>
            {
                list && list.length > 0 &&
                list.map((item, i) => {
                    return (
                        <p>{item.title} {item.count}</p>
                    )
                })
            }
        </div>
    )
}

export default List