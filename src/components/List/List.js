import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import ListUi from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles({
    container: {
    },
    row: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center'
    },
    count: {
        textAlign: 'right'
    },
    subtitle: {
        color: grey[500],
    },
    subtitleCount: {
        color: grey[500],
        textAlign: 'right'
    }
});

const List = ({
    list,
    onRemoveClick
}) => {
    const styles = useStyles();

    if (list.length === 0) {
        return <p>Start adding groceries</p>
    }

    return (
        <div className={styles.container}>
            <ListUi component="nav" aria-label="main mailbox folders">
                <ListItem>
                    <ListItemText primary='Product' className={styles.subtitle} />
                    <ListItemText primary='Count' className={styles.subtitleCount} />
                </ListItem>
                {
                    list && list.length > 0 &&
                    list.map((item, i) =>
                        <ListItem key={i}>
                            <ListItemText primary={item.title} />
                            <ListItemText primary={item.count} className={styles.count} />
                            <ListItemSecondaryAction>
                                <IconButton
                                    edge="end"
                                    aria-label="remove"
                                    color="secondary"
                                    size="small"
                                    onClick={() => onRemoveClick(item)}
                                >
                                    <RemoveIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                }
            </ListUi>
        </div>
    )
}

export default List