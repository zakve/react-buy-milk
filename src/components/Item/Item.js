import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles({
    container: {
        display: flex,
        alignItems: 'center',
        background: grey[100],
        borderRadius: 10,
        color: 'black',
        padding: '30px',
    },
});

const Item = ({ list }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            Image
            <div>
                Controls
            </div>
        </div>

    )
}

export default Item