import { Badge, Divider, IconButton, makeStyles, Toolbar, Typography, } from "@material-ui/core";
import { Menu as MenuIcon, Notifications as NotificationsIcon, AccountCircle } from "@material-ui/icons";
import React from 'react'
import SideDrawer from "./SideDrawer";

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
    tagline: {
        fontSize: 20,
        textTransform: "uppercase",
        justifyContent: "center",
        fontFamily: "Montserrat",
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <Toolbar>
                <SideDrawer>
                    <IconButton color="default">
                        <MenuIcon />
                    </IconButton>
                </SideDrawer>

                <Typography variant="h6" className={classes.title}>
                    Blogging Website
                </Typography>

                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                <IconButton color="inherit">
                    <AccountCircle />
                </IconButton>

            </Toolbar>

            <Divider />

            <Toolbar className={classes.tagline}>
                Express your emotions through words
            </Toolbar>

        </>
    )
}

export default Navbar
