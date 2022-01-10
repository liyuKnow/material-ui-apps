import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.grey[500],
        marginTop: theme.spacing(4),
        padding: theme.spacing(6, 0),
    }
}));