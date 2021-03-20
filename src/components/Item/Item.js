import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles({
    container: {
        alignItems: 'center',
        border: '1px solid',
        borderColor: grey[100],
        borderRadius: 10,
        padding: '10px',
    },
});

const Item = ({
    image = '',
    title = '',
    price = 0,
    onAddClick = () => { }
}) => {
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