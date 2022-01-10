import React from 'react'
import { useStyles } from './footer_style'
import { Container, Link, Typography } from '@material-ui/core'

const Footer = (props) => {
    const classes = useStyles();
    const { title, description } = props;
    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    {description}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    Copyright ©{" "}
                    <Link color="inherit" href="https://material-ui.com/">
                        Your Website
                    </Link>{" "}
                    {new Date().getFullYear()}.
                </Typography>
            </Container>
        </footer>
    )
}

export default Footer
