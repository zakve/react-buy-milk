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
    image = '',
    title = 'TITLE',
    price = 0,
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
                <IconButton aria-label="Add" color="secondary" className={classes.button} onClick={onAddClick}>
                    <AddIcon color="secondary" />
                </IconButton>
            </div>
        </div>
    )
}

export default Item