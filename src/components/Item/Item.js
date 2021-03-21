import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/AddCircle';

// Colors
import { fade } from '@material-ui/core/styles/colorManipulator';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles({
    container: {
        alignItems: 'center',
        border: '1px solid',
        borderColor: grey[100],
        borderRadius: 10,
        padding: '10px',
    },
    media: {
        width: '100%',
        height: 140,
        objectFit: 'cover'
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        backgroundColor: fade('#f44336', 0.08)
    }
});

const Item = ({
    image = 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
    title = 'Salad',
    price = 12,
    onAddClick = () => { }
}) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img className={classes.media} src={image} alt={title} />
            <div className={classes.row}>
                <div>
                    <Typography variant="body2" color="textSecondary" component="p">{title}</Typography>
                    <Typography>{price}&nbsp;Kč</Typography>
                </div>
                <IconButton aria-label="Add" color="secondary" className={classes.button}>
                    <AddIcon color="secondary" />
                </IconButton>
            </div>
        </div>
    )
}

export default Item