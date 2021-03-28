import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
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
                        <p key={i}>{item.title} {item.count}</p>
                    )
                })
            }
        </div>
    )
}

export default List