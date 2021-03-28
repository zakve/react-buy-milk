import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles({
    container: {
    },
    row: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center'
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
            {
                list && list.length > 0 &&
                list.map((item, i) => {
                    return (
                        <div key={i} className={styles.row}>
                            <Typography variant="body1">
                                {item.title} {item.count}
                            </Typography>
                            <IconButton
                                aria-label="Add"
                                color="secondary"
                                size="small"
                                className={styles.button}
                                onClick={() => onRemoveClick(item)}
                            >
                                <RemoveIcon color="secondary" />
                            </IconButton>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List